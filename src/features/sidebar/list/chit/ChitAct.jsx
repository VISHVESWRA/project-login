function ChitAct() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">The Chit Funds Act, 1982</h1>

      <div className="bg-white rounded shadow p-6 space-y-6 text-gray-700">
        {/* Intro */}
        <section>
          <h2 className="text-lg font-semibold mb-2">About the Act</h2>
          <p>
            An Act to regulate chit funds and related matters. Applicable to the
            whole of India (except J&K).
          </p>
        </section>

        {/* Definitions */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Important Definitions</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Chit:</b> Monthly contribution scheme with prize amount
            </li>
            <li>
              <b>Foreman:</b> Person managing the chit
            </li>
            <li>
              <b>Subscriber:</b> Member of the chit
            </li>
            <li>
              <b>Prize Amount:</b> Chit amount minus discount
            </li>
            <li>
              <b>Discount:</b> Amount foregone by prized subscriber
            </li>
          </ul>
        </section>

        {/* Rights of Non-Prized */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            Rights of Non-Prized Subscribers
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Must pay monthly subscription</li>
            <li>Can receive receipts from foreman</li>
            <li>Name removed if defaulted (with notice)</li>
            <li>Can appeal to Registrar</li>
          </ul>
        </section>

        {/* Rights of Prized */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            Rights of Prized Subscribers
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Must provide security for future payments</li>
            <li>Must continue paying monthly subscriptions</li>
            <li>Foreman can demand consolidated payment</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ChitAct;
