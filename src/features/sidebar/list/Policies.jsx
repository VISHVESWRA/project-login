const Policies = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Insurance Policies</h1>

      {/* Insurance Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          {
            title: "Life Insurance",
            desc: "Family gets money if something happens to you",
          },
          { title: "Health Insurance", desc: "Covers hospital expenses" },
          { title: "Vehicle Insurance", desc: "For bike/car accidents" },
          { title: "Term Insurance", desc: "Pure protection, low cost" },
        ].map((policy, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{policy.title}</h3>
            <p className="text-gray-600 text-sm">{policy.desc}</p>
          </div>
        ))}
      </div>

      {/* Key Terms */}
      <h2 className="text-xl font-semibold mb-4">Key Insurance Terms</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Premium", desc: "Amount you pay" },
          { title: "Sum Assured", desc: "Amount insurance pays" },
          { title: "Policy Term", desc: "Duration of policy" },
          { title: "Claim", desc: "Request insurer to pay money" },
        ].map((term, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">{term.title}</h3>
            <p className="text-sm text-gray-600">{term.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policies;
