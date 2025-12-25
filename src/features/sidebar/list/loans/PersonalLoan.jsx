import { CheckCircle } from "lucide-react";

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-2 text-gray-700 mb-2">
      <CheckCircle className="text-green-500 mt-1" size={18} />
      <span>{children}</span>
    </div>
  );
}

export default function PersonalLoan() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* HERO */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">What is Personal Loan?</h1>
        <p className="text-lg">
          A personal loan offers quick, collateral-free financing for diverse
          financial needs. With competitive interest rates, minimal paperwork,
          and swift approval, instant personal loans ensure seamless access to
          funds.
        </p>
      </div>

      {/* LOAN CALCULATOR UI */}
      <Section title="Loan Details">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm text-gray-500">Loan Amount (₹)</label>
            <input
              type="text"
              value="30,00,000"
              readOnly
              className="w-full border rounded-lg p-3 mt-1"
            />
            <p className="text-xs text-gray-400 mt-1">Min ₹5K | Max ₹60L</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Rate of Interest (%)
            </label>
            <input
              type="text"
              value="9"
              readOnly
              className="w-full border rounded-lg p-3 mt-1"
            />
            <p className="text-xs text-gray-400 mt-1">Min 6% | Max 36%</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Loan Tenure (Months)
            </label>
            <input
              type="text"
              value="36"
              readOnly
              className="w-full border rounded-lg p-3 mt-1"
            />
            <p className="text-xs text-gray-400 mt-1">Min 3 | Max 72</p>
          </div>
        </div>
      </Section>

      {/* EXAMPLE */}
      <Section title="Example Calculation">
        <Bullet>Loan Amount (Principal): ₹1,00,000</Bullet>
        <Bullet>Total Interest Rate: 12%</Bullet>
        <Bullet>Tenure: 12 months</Bullet>
        <Bullet>EMI: ₹9,025.83</Bullet>
        <Bullet>Interest Rate: 15% per annum</Bullet>
        <Bullet>APR: Starting from 19%</Bullet>
        <Bullet>Processing Fee (incl. GST): ₹3,000 (3%)</Bullet>
      </Section>

      {/* WHY CHOOSE */}
      <Section title="Why Choose this for Personal Loan?">
        <div className="grid md:grid-cols-2 gap-4">
          <Bullet>No collateral required</Bullet>
          <Bullet>Instant approvals</Bullet>
          <Bullet>Zero paperwork</Bullet>
          <Bullet>Affordable interest</Bullet>
          <Bullet>APR ranges from 32–57% p.a</Bullet>
          <Bullet>Repayment tenure from 3 to 60 months</Bullet>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section title="Personal Loan Benefits">
        <div className="grid md:grid-cols-2 gap-4">
          <Bullet>Loan top-ups available</Bullet>
          <Bullet>Direct bank transfer</Bullet>
          <Bullet>100% digital process</Bullet>
          <Bullet>Multi-purpose loans</Bullet>
          <Bullet>Transparent terms</Bullet>
          <Bullet>No collateral required</Bullet>
        </div>
      </Section>

      {/* ELIGIBILITY */}
      <Section title="Eligibility Criteria">
        <Bullet>Nationality: Indian citizen</Bullet>
        <Bullet>Age: 21 to 60 years</Bullet>
        <Bullet>Profile: Salaried, Self-employed, MSMEs</Bullet>
        <Bullet>Documents: Selfie, PAN & Aadhaar</Bullet>
        <Bullet>Income proof required for select loans</Bullet>
      </Section>

      {/* DOCUMENTS */}
      <Section title="Documents Required">
        <Bullet>Basic personal details</Bullet>
        <Bullet>Aadhaar card & selfie verification</Bullet>
        <Bullet>PAN card</Bullet>
        <Bullet>Income details (if required)</Bullet>
      </Section>

      {/* DISCLAIMER */}
      <div className="text-sm text-gray-500 text-center mt-6">
        Disclaimer: The Loan EMI Calculator provides an estimated value. Please
        consult your lender for accurate details.
      </div>
    </div>
  );
}
