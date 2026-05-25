export interface HRAInput {
  basicMonthly: number;
  hraReceived: number;
  rentPaid: number;
  isMetro: boolean;
}

export interface HRAResult {
  exemption: number;
  taxableHRA: number;
  condition1: number;
  condition2: number;
  condition3: number;
  limitingCondition: 1 | 2 | 3;
  annualExemption: number;
  taxSavedAt30: number;
}

export function calculateHRA(input: HRAInput): HRAResult {
  const { basicMonthly, hraReceived, rentPaid, isMetro } = input;

  const condition1 = hraReceived;
  const condition2 = Math.max(0, rentPaid - 0.1 * basicMonthly);
  const condition3 = basicMonthly * (isMetro ? 0.5 : 0.4);

  const exemption = Math.min(condition1, condition2, condition3);
  const taxableHRA = Math.max(0, hraReceived - exemption);
  const annualExemption = exemption * 12;
  const taxSavedAt30 = annualExemption * 0.30;

  let limitingCondition: 1 | 2 | 3 = 1;
  if (exemption === condition2 && condition2 <= condition1 && condition2 <= condition3) {
    limitingCondition = 2;
  } else if (exemption === condition3 && condition3 <= condition1 && condition3 <= condition2) {
    limitingCondition = 3;
  }

  return {
    exemption,
    taxableHRA,
    condition1,
    condition2,
    condition3,
    limitingCondition,
    annualExemption,
    taxSavedAt30,
  };
}
