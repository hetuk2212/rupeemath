const rows = [
  { salary: "₹20,000", y20: "₹7.5L",  y25: "₹8.5L",  y30: "₹9.5L"  },
  { salary: "₹25,000", y20: "₹9.5L",  y25: "₹11L",   y30: "₹12L"   },
  { salary: "₹30,000", y20: "₹11.5L", y25: "₹13L",   y30: "₹14.5L" },
  { salary: "₹35,000", y20: "₹13.5L", y25: "₹15.5L", y30: "₹17L"   },
  { salary: "₹40,000", y20: "₹15.5L", y25: "₹18L",   y30: "₹19.5L" },
  { salary: "₹50,000", y20: "₹19.5L", y25: "₹22.5L", y30: "₹24.5L" },
  { salary: "₹60,000", y20: "₹23.5L", y25: "₹27L",   y30: "₹29.5L" },
  { salary: "₹75,000", y20: "₹29.5L", y25: "₹34L",   y30: "₹37L"   },
  { salary: "₹1,00,000", y20: "₹39.5L", y25: "₹45.5L", y30: "₹49.5L" },
  { salary: "₹1,50,000", y20: "₹59L",   y25: "₹68L",   y30: "₹74L"   },
];

export function SalaryLoanTable() {
  return (
    <div className="mt-10">
      <h2 className="mb-1 text-xl font-bold text-gray-900">Maximum Home Loan Amount by Salary in India</h2>
      <p className="mb-4 text-sm text-gray-500">Home Loan Eligibility by Salary — 2026</p>
      <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-navy-900 text-white">
              <th className="px-4 py-3 text-left font-semibold">Monthly Salary</th>
              <th className="px-4 py-3 text-right font-semibold">Max Loan (20 yr)</th>
              <th className="px-4 py-3 text-right font-semibold">Max Loan (25 yr)</th>
              <th className="px-4 py-3 text-right font-semibold">Max Loan (30 yr)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {rows.map((row, i) => (
              <tr key={row.salary} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="px-4 py-3 font-semibold text-gray-800">{row.salary}</td>
                <td className="px-4 py-3 text-right text-gray-700">{row.y20}</td>
                <td className="px-4 py-3 text-right text-gray-700">{row.y25}</td>
                <td className="px-4 py-3 text-right font-semibold text-primary">{row.y30}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-400">
        Calculated at 8.5% interest rate. No existing EMIs. 40% of salary as EMI.
      </p>
    </div>
  );
}
