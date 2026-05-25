export interface SWPInput {
  totalInvestment: number;
  monthlyWithdrawal: number;
  annualReturnRate: number;
  tenureYears: number;
}

export interface SWPMonthRow {
  month: number;
  withdrawal: number;
  returns: number;
  closingBalance: number;
}

export interface SWPResult {
  finalCorpus: number;
  totalWithdrawn: number;
  totalReturns: number;
  monthsActive: number;
  yearlyChart: { year: string; corpus: number }[];
  monthlyData: SWPMonthRow[];
}

export function calculateSWP(input: SWPInput): SWPResult {
  const { totalInvestment, monthlyWithdrawal, annualReturnRate, tenureYears } = input;
  const monthlyRate = annualReturnRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  let corpus = totalInvestment;
  const monthlyData: SWPMonthRow[] = [];
  let totalWithdrawn = 0;
  let totalReturns = 0;
  let monthsActive = 0;

  for (let m = 1; m <= totalMonths; m++) {
    if (corpus <= 0) break;
    const returns = corpus * monthlyRate;
    totalReturns += returns;
    corpus = corpus + returns - monthlyWithdrawal;
    totalWithdrawn += monthlyWithdrawal;
    monthsActive = m;

    if (corpus < 0) {
      totalWithdrawn += corpus; // adjust for partial last withdrawal
      corpus = 0;
    }

    monthlyData.push({
      month: m,
      withdrawal: monthlyWithdrawal,
      returns: Math.round(returns),
      closingBalance: Math.round(corpus),
    });

    if (corpus <= 0) break;
  }

  // Yearly chart data (sample at year-end months)
  const yearlyChart: { year: string; corpus: number }[] = [];
  for (let y = 1; y <= tenureYears; y++) {
    const idx = Math.min(y * 12 - 1, monthlyData.length - 1);
    if (idx >= 0) {
      yearlyChart.push({ year: `Y${y}`, corpus: monthlyData[idx].closingBalance });
    }
  }

  return {
    finalCorpus: Math.round(Math.max(0, corpus)),
    totalWithdrawn: Math.round(Math.max(0, totalWithdrawn)),
    totalReturns: Math.round(totalReturns),
    monthsActive,
    yearlyChart,
    monthlyData,
  };
}
