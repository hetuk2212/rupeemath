export interface HomeLoanInput {
  monthlyIncome: number;
  existingEMIs: number;
  annualRate: number;
  tenureYears: number;
}

export interface HomeLoanResult {
  maxEMICapacity: number;
  maxLoanAmount: number;
  maxLoanLakhs: number;
  eligibilityPercent: number;
  monthlyEMI: number;
}

export function calculateHomeLoanEligibility(input: HomeLoanInput): HomeLoanResult {
  const { monthlyIncome, existingEMIs, annualRate, tenureYears } = input;
  const r = annualRate / 12 / 100;
  const n = tenureYears * 12;

  // FOIR rule: max 50% of income toward total EMIs
  const maxEMICapacity = Math.max(0, monthlyIncome * 0.5 - existingEMIs);

  // Reverse EMI formula: P = EMI × [(1+r)^n – 1] / [r × (1+r)^n]
  const maxLoanAmount =
    r === 0
      ? maxEMICapacity * n
      : (maxEMICapacity * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));

  const eligibilityPercent = Math.min(100, ((existingEMIs + maxEMICapacity) / monthlyIncome) * 100);

  return {
    maxEMICapacity: Math.round(maxEMICapacity),
    maxLoanAmount: Math.round(maxLoanAmount),
    maxLoanLakhs: Math.round(maxLoanAmount / 100000),
    eligibilityPercent: Math.round(eligibilityPercent * 10) / 10,
    monthlyEMI: Math.round(maxEMICapacity),
  };
}
