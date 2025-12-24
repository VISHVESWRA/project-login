function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Home</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Income</h3>
          <p className="text-2xl font-bold text-green-600">₹50,000</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Expenses</h3>
          <p className="text-2xl font-bold text-red-600">₹20,000</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Balance</h3>
          <p className="text-2xl font-bold text-blue-600">₹30,000</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
