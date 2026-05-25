export interface PPFInput {
  yearlyInvestment: number;
  rate: number;
  years: number;
}

export interface PPFYearBreakdown {
  year: number;
  investment: number;
  interest: number;
  balance: number;
}

export interface PPFResult {
  maturityAmount: number;
  totalInvested: number;
  totalInterest: number;
  yearlyBreakdown: PPFYearBreakdown[];
}

export function calculatePPF(input: PPFInput): PPFResult {
  const { yearlyInvestment, rate, years } = input;
  let balance = 0;
  const yearlyBreakdown: PPFYearBreakdown[] = [];

  for (let y = 1; y <= years; y++) {
    balance += yearlyInvestment;
    const interest = balance * rate / 100;
    balance += interest;
    yearlyBreakdown.push({
      year: y,
      investment: yearlyInvestment,
      interest: Math.round(interest),
      balance: Math.round(balance),
    });
  }

  const totalInvested = yearlyInvestment * years;
  const totalInterest = balance - totalInvested;

  return {
    maturityAmount: Math.round(balance),
    totalInvested,
    totalInterest: Math.round(totalInterest),
    yearlyBreakdown,
  };
}
