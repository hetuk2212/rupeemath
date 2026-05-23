export interface SIPInput {
  monthlyInvestment: number;
  annualRate: number;
  tenureYears: number;
}

export interface SIPYearData {
  year: number;
  invested: number;
  value: number;
}

export interface SIPResult {
  maturityAmount: number;
  totalInvested: number;
  wealthGained: number;
  yearlyBreakdown: SIPYearData[];
}

export function calculateSIP(input: SIPInput): SIPResult {
  const { monthlyInvestment, annualRate, tenureYears } = input;
  const r = annualRate / 12 / 100;
  const n = tenureYears * 12;

  const maturityAmount =
    r === 0
      ? monthlyInvestment * n
      : monthlyInvestment * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

  const totalInvested = monthlyInvestment * n;
  const wealthGained = maturityAmount - totalInvested;

  const yearlyBreakdown: SIPYearData[] = [];
  for (let year = 1; year <= tenureYears; year++) {
    const months = year * 12;
    const value =
      r === 0
        ? monthlyInvestment * months
        : monthlyInvestment * (((Math.pow(1 + r, months) - 1) / r) * (1 + r));
    yearlyBreakdown.push({
      year,
      invested: monthlyInvestment * months,
      value: Math.round(value),
    });
  }

  return {
    maturityAmount: Math.round(maturityAmount),
    totalInvested: Math.round(totalInvested),
    wealthGained: Math.round(wealthGained),
    yearlyBreakdown,
  };
}
