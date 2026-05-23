export interface TaxInput {
  grossSalary: number;
  hra: number;
  lta: number;
  section80C: number;
  section80D: number;
  homeLoanInterest: number;
  nps80CCD: number;
  otherDeductions: number;
}

export interface RegimeTax {
  taxableIncome: number;
  basicTax: number;
  surcharge: number;
  cess: number;
  totalTax: number;
  inHandAnnual: number;
  inHandMonthly: number;
}

export interface TaxResult {
  oldRegime: RegimeTax;
  newRegime: RegimeTax;
  betterRegime: "old" | "new";
  savings: number;
}

function applySlabs(income: number, slabs: [number, number][]): number {
  let tax = 0;
  let prev = 0;
  for (const [limit, rate] of slabs) {
    if (income <= prev) break;
    const taxable = Math.min(income, limit) - prev;
    tax += taxable * rate;
    prev = limit;
    if (income <= limit) break;
  }
  if (income > slabs[slabs.length - 1][0]) {
    tax += (income - slabs[slabs.length - 1][0]) * slabs[slabs.length - 1][1];
  }
  return tax;
}

function computeTax(taxableIncome: number, regime: "old" | "new", grossSalary: number): RegimeTax {
  // Old regime slabs (in ₹)
  const oldSlabs: [number, number][] = [
    [250000, 0],
    [500000, 0.05],
    [1000000, 0.2],
    [Infinity, 0.3],
  ];

  // New regime slabs FY 2024-25 (Budget 2024)
  const newSlabs: [number, number][] = [
    [300000, 0],
    [700000, 0.05],
    [1000000, 0.1],
    [1200000, 0.15],
    [1500000, 0.2],
    [Infinity, 0.3],
  ];

  const income = Math.max(0, taxableIncome);
  let basicTax = regime === "old" ? applySlabs(income, oldSlabs) : applySlabs(income, newSlabs);

  // Rebate 87A
  const rebateLimit = regime === "old" ? 500000 : 700000;
  if (income <= rebateLimit) basicTax = 0;

  // Surcharge (for individuals)
  let surcharge = 0;
  if (grossSalary > 5000000 && grossSalary <= 10000000) surcharge = basicTax * 0.1;
  else if (grossSalary > 10000000 && grossSalary <= 20000000) surcharge = basicTax * 0.15;
  else if (grossSalary > 20000000) surcharge = basicTax * 0.25;

  const cess = (basicTax + surcharge) * 0.04;
  const totalTax = Math.round(basicTax + surcharge + cess);
  const inHandAnnual = Math.round(grossSalary - totalTax);
  const inHandMonthly = Math.round(inHandAnnual / 12);

  return {
    taxableIncome: Math.round(income),
    basicTax: Math.round(basicTax),
    surcharge: Math.round(surcharge),
    cess: Math.round(cess),
    totalTax,
    inHandAnnual,
    inHandMonthly,
  };
}

export function calculateIncomeTax(input: TaxInput): TaxResult {
  const {
    grossSalary,
    hra,
    lta,
    section80C,
    section80D,
    homeLoanInterest,
    nps80CCD,
    otherDeductions,
  } = input;

  // Old regime deductions
  const standardDeductionOld = 50000;
  const old80C = Math.min(section80C, 150000);
  const old80D = Math.min(section80D, 50000);
  const oldHomeLoan = Math.min(homeLoanInterest, 200000);
  const oldNPS = Math.min(nps80CCD, 50000);
  const totalOldDeductions =
    standardDeductionOld +
    Math.min(hra, grossSalary * 0.5) +
    Math.min(lta, 50000) +
    old80C +
    old80D +
    oldHomeLoan +
    oldNPS +
    otherDeductions;
  const oldTaxableIncome = Math.max(0, grossSalary - totalOldDeductions);

  // New regime deductions (Budget 2024 — only standard deduction ₹75K)
  const standardDeductionNew = 75000;
  const newTaxableIncome = Math.max(0, grossSalary - standardDeductionNew);

  const oldRegime = computeTax(oldTaxableIncome, "old", grossSalary);
  const newRegime = computeTax(newTaxableIncome, "new", grossSalary);

  const betterRegime: "old" | "new" = oldRegime.totalTax <= newRegime.totalTax ? "old" : "new";
  const savings = Math.abs(oldRegime.totalTax - newRegime.totalTax);

  return { oldRegime, newRegime, betterRegime, savings };
}
