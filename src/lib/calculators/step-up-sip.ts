export interface StepUpSIPInput {
  initialMonthly: number;
  stepUpPercent: number;
  annualRate: number;
  tenureYears: number;
}

export interface StepUpSIPResult {
  maturityAmount: number;
  totalInvested: number;
  wealthGained: number;
  regularSIPComparison: {
    maturityAmount: number;
    totalInvested: number;
    wealthGained: number;
  };
  chartData: { year: string; "Step-Up SIP": number; "Regular SIP": number }[];
}

export function calculateStepUpSIP(input: StepUpSIPInput): StepUpSIPResult {
  const { initialMonthly, stepUpPercent, annualRate, tenureYears } = input;
  const monthlyRate = annualRate / 12 / 100;

  // Step-Up SIP simulation
  let stepCorpus = 0;
  let stepInvested = 0;

  // Regular SIP simulation
  let regularCorpus = 0;
  let regularInvested = 0;

  const chartData: { year: string; "Step-Up SIP": number; "Regular SIP": number }[] = [];

  for (let year = 1; year <= tenureYears; year++) {
    const monthlyAmount = initialMonthly * Math.pow(1 + stepUpPercent / 100, year - 1);

    for (let m = 0; m < 12; m++) {
      stepCorpus = stepCorpus * (1 + monthlyRate) + monthlyAmount;
      stepInvested += monthlyAmount;
      regularCorpus = regularCorpus * (1 + monthlyRate) + initialMonthly;
      regularInvested += initialMonthly;
    }

    chartData.push({
      year: `Y${year}`,
      "Step-Up SIP": Math.round(stepCorpus),
      "Regular SIP": Math.round(regularCorpus),
    });
  }

  return {
    maturityAmount: Math.round(stepCorpus),
    totalInvested: Math.round(stepInvested),
    wealthGained: Math.round(stepCorpus - stepInvested),
    regularSIPComparison: {
      maturityAmount: Math.round(regularCorpus),
      totalInvested: Math.round(regularInvested),
      wealthGained: Math.round(regularCorpus - regularInvested),
    },
    chartData,
  };
}
