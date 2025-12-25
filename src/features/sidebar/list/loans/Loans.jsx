const Loans = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Loans</h1>

      {/* Key Loan Terms */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Principal", desc: "Amount you borrow" },
          { title: "Interest Rate", desc: "Extra money paid to bank" },
          { title: "EMI", desc: "Monthly repayment" },
          { title: "Tenure", desc: "Loan period" },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Loan Types */}
      <h2 className="text-xl font-semibold mb-4">Common Types of Loans</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "Personal Loan", desc: "For personal needs (no security)" },
          { title: "Education Loan", desc: "For studies" },
          { title: "Home Loan", desc: "To buy/build a house" },
          { title: "Gold Loan", desc: "Loan by keeping gold" },
          { title: "Business Loan", desc: "For business needs" },
        ].map((loan, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{loan.title}</h3>
            <p className="text-gray-600 text-sm">{loan.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loans;
