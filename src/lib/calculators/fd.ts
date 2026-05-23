export type CompoundFrequency = "annually" | "semi-annually" | "quarterly" | "monthly";

export interface FDInput {
  principal: number;
  annualRate: number;
  tenureYears: number;
  frequency: CompoundFrequency;
}

export interface FDYearData {
  year: number;
  balance: number;
}

export interface FDResult {
  maturityAmount: number;
  totalInterest: number;
  effectiveAnnualRate: number;
  yearlyBreakdown: FDYearData[];
}

const frequencyMap: Record<CompoundFrequency, number> = {
  annually: 1,
  "semi-annually": 2,
  quarterly: 4,
  monthly: 12,
};

export function calculateFD(input: FDInput): FDResult {
  const { principal, annualRate, tenureYears, frequency } = input;
  const r = annualRate / 100;
  const n = frequencyMap[frequency];

  const maturityAmount = principal * Math.pow(1 + r / n, n * tenureYears);
  const totalInterest = maturityAmount - principal;
  const effectiveAnnualRate = (Math.pow(1 + r / n, n) - 1) * 100;

  const yearlyBreakdown: FDYearData[] = [];
  for (let year = 1; year <= tenureYears; year++) {
    const balance = principal * Math.pow(1 + r / n, n * year);
    yearlyBreakdown.push({ year, balance: Math.round(balance) });
  }

  return {
    maturityAmount: Math.round(maturityAmount),
    totalInterest: Math.round(totalInterest),
    effectiveAnnualRate: Math.round(effectiveAnnualRate * 100) / 100,
    yearlyBreakdown,
  };
}
