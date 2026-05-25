export interface RDInput {
  monthlyDeposit: number;
  annualRate: number;
  tenureMonths: number;
}

export interface RDQuarterBreakdown {
  quarter: number;
  deposited: number;
  balance: number;
}

export interface RDResult {
  maturityAmount: number;
  totalDeposited: number;
  interestEarned: number;
  quarterlyBreakdown: RDQuarterBreakdown[];
}

export function calculateRD(input: RDInput): RDResult {
  const { monthlyDeposit, annualRate, tenureMonths } = input;
  const quarterlyRate = annualRate / 4 / 100;

  // Each monthly deposit grows with quarterly compounding for remaining months
  let maturity = 0;
  for (let i = 1; i <= tenureMonths; i++) {
    const remainingMonths = tenureMonths - i + 1;
    const quarters = remainingMonths / 3;
    maturity += monthlyDeposit * Math.pow(1 + quarterlyRate, quarters);
  }

  const totalDeposited = monthlyDeposit * tenureMonths;
  const interestEarned = maturity - totalDeposited;

  // Build quarterly breakdown
  const quarterlyBreakdown: RDQuarterBreakdown[] = [];
  let runningBalance = 0;
  let runningDeposited = 0;
  const totalQuarters = Math.ceil(tenureMonths / 3);

  for (let q = 1; q <= totalQuarters; q++) {
    const monthsThisQuarter = Math.min(3, tenureMonths - (q - 1) * 3);
    runningDeposited += monthlyDeposit * monthsThisQuarter;
    runningBalance = (runningBalance + monthlyDeposit * monthsThisQuarter) * (1 + quarterlyRate);
    quarterlyBreakdown.push({
      quarter: q,
      deposited: Math.round(runningDeposited),
      balance: Math.round(runningBalance),
    });
  }

  return {
    maturityAmount: Math.round(maturity),
    totalDeposited,
    interestEarned: Math.round(interestEarned),
    quarterlyBreakdown,
  };
}
