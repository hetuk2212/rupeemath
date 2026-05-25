export interface GratuityInput {
  basicPlusDA: number;
  yearsOfService: number;
  isCoveredUnderAct: boolean;
}

export interface GratuityResult {
  gratuityAmount: number;
  taxExemptAmount: number;
  taxableAmount: number;
  formulaLabel: string;
}

const TAX_EXEMPT_LIMIT = 2_000_000; // ₹20 lakh

export function calculateGratuity(input: GratuityInput): GratuityResult {
  const { basicPlusDA, yearsOfService, isCoveredUnderAct } = input;

  const gratuityAmount = isCoveredUnderAct
    ? (basicPlusDA * 15 / 26) * yearsOfService
    : (basicPlusDA * 15 / 30) * yearsOfService;

  const taxExemptAmount = Math.min(gratuityAmount, TAX_EXEMPT_LIMIT);
  const taxableAmount = Math.max(0, gratuityAmount - TAX_EXEMPT_LIMIT);

  const formulaLabel = isCoveredUnderAct
    ? "(Basic + DA) × 15/26 × Years of service"
    : "(Basic + DA) × 15/30 × Years of service";

  return {
    gratuityAmount: Math.round(gratuityAmount),
    taxExemptAmount: Math.round(taxExemptAmount),
    taxableAmount: Math.round(taxableAmount),
    formulaLabel,
  };
}
