export interface EMIInput {
  loanAmount: number;
  annualRate: number;
  tenureMonths: number;
}

export interface EMIMonthData {
  month: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface EMIResult {
  emi: number;
  totalPayable: number;
  totalInterest: number;
  principalPercent: number;
  interestPercent: number;
  amortizationSchedule: EMIMonthData[];
}

export function calculateEMI(input: EMIInput): EMIResult {
  const { loanAmount, annualRate, tenureMonths } = input;
  const r = annualRate / 12 / 100;

  const emi =
    r === 0
      ? loanAmount / tenureMonths
      : (loanAmount * r * Math.pow(1 + r, tenureMonths)) /
        (Math.pow(1 + r, tenureMonths) - 1);

  const totalPayable = emi * tenureMonths;
  const totalInterest = totalPayable - loanAmount;
  const principalPercent = (loanAmount / totalPayable) * 100;
  const interestPercent = (totalInterest / totalPayable) * 100;

  const amortizationSchedule: EMIMonthData[] = [];
  let balance = loanAmount;
  for (let month = 1; month <= Math.min(tenureMonths, 360); month++) {
    const interestPayment = balance * r;
    const principalPayment = emi - interestPayment;
    balance -= principalPayment;
    amortizationSchedule.push({
      month,
      principal: Math.round(principalPayment),
      interest: Math.round(interestPayment),
      balance: Math.max(0, Math.round(balance)),
    });
  }

  return {
    emi: Math.round(emi),
    totalPayable: Math.round(totalPayable),
    totalInterest: Math.round(totalInterest),
    principalPercent: Math.round(principalPercent * 10) / 10,
    interestPercent: Math.round(interestPercent * 10) / 10,
    amortizationSchedule,
  };
}
