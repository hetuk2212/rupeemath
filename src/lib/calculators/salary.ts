import { calculateIncomeTax } from "./income-tax";

export interface SalaryInput {
  annualCTC: number;
  pfPercentOfBasic: number;
  professionalTax: number;
  regime: "old" | "new";
}

export interface SalaryResult {
  grossMonthly: number;
  basicMonthly: number;
  pfDeduction: number;
  professionalTaxMonthly: number;
  incomeTaxMonthly: number;
  netMonthly: number;
  annualInHand: number;
}

export function calculateSalary(input: SalaryInput): SalaryResult {
  const { annualCTC, pfPercentOfBasic, professionalTax, regime } = input;

  const grossMonthly = annualCTC / 12;
  const basicMonthly = grossMonthly * 0.5;
  const pfDeduction = basicMonthly * pfPercentOfBasic / 100;
  const annualPF = pfDeduction * 12;

  const taxResult = calculateIncomeTax({
    grossSalary: annualCTC,
    hra: 0,
    lta: 0,
    section80C: Math.min(annualPF, 150000),
    section80D: 0,
    homeLoanInterest: 0,
    nps80CCD: 0,
    otherDeductions: 0,
  });

  const selectedRegime = regime === "new" ? taxResult.newRegime : taxResult.oldRegime;
  const incomeTaxMonthly = selectedRegime.totalTax / 12;

  const netMonthly = Math.max(0, grossMonthly - pfDeduction - professionalTax - incomeTaxMonthly);

  return {
    grossMonthly,
    basicMonthly,
    pfDeduction,
    professionalTaxMonthly: professionalTax,
    incomeTaxMonthly,
    netMonthly,
    annualInHand: netMonthly * 12,
  };
}
