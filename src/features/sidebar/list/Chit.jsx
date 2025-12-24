const Chit = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Chit Fund</h1>

      {/* How it Works */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">How Chit Fund Works</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>20 members × ₹1,000 per month = ₹20,000</li>
          <li>Every month one member gets the full amount</li>
          <li>Continues for 20 months</li>
        </ul>
      </div>

      {/* Ways to Get Money */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Ways to Get Money</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Auction – Take money early by giving discount</li>
          <li>Lucky Draw – Random selection</li>
        </ul>
      </div>

      {/* Chit Terms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Chit Value", desc: "Total amount" },
          { title: "Chit Period", desc: "Number of months" },
          { title: "Foreman", desc: "Company managing chit" },
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

export default Chit;
