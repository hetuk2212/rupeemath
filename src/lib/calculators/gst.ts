export type GSTRate = 5 | 12 | 18 | 28;
export type GSTCalcType = "add" | "extract";

export interface GSTInput {
  amount: number;
  gstRate: GSTRate;
  calculationType: GSTCalcType;
}

export interface GSTResult {
  originalAmount: number;
  gstAmount: number;
  finalAmount: number;
  cgst: number;
  sgst: number;
  gstRate: GSTRate;
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

export function calculateGST(input: GSTInput): GSTResult {
  const { amount, gstRate, calculationType } = input;
  const rate = gstRate / 100;

  let originalAmount: number, gstAmount: number, finalAmount: number;

  if (calculationType === "add") {
    originalAmount = amount;
    gstAmount = amount * rate;
    finalAmount = amount + gstAmount;
  } else {
    finalAmount = amount;
    originalAmount = amount / (1 + rate);
    gstAmount = amount - originalAmount;
  }

  return {
    originalAmount: round2(originalAmount),
    gstAmount: round2(gstAmount),
    finalAmount: round2(finalAmount),
    cgst: round2(gstAmount / 2),
    sgst: round2(gstAmount / 2),
    gstRate,
  };
}
