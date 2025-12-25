function ChitServices() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Chit Fund Services</h1>
        <p className="text-gray-600 mt-1">
          Complete chit services available online for subscribers
        </p>
      </div>

      {/* Public Services */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          General Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard
            title="Online Application"
            description="Online enrollment form for new subscribers to join a chit scheme."
          />
          <ServiceCard
            title="Enquiries"
            description="Subscribers can raise specific enquiries regarding chit schemes."
          />
          <ServiceCard
            title="Complaints / Suggestions"
            description="Submit complaints or suggestions related to services."
          />
        </div>
      </div>

      {/* Login Required Services */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Subscriber Services (Login Required)
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          To access the following services, please login using your Subscriber
          ID. For login credentials, contact your branch office.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard
            title="Subscriber Status"
            description="View current status of your chit subscription."
          />
          <ServiceCard
            title="Change of Address"
            description="Request address update for your subscriber account."
          />
          <ServiceCard
            title="Dividend Enquiry"
            description="Check dividend details for your chit schemes."
          />
          <ServiceCard
            title="Subscription Pickup"
            description="Request doorstep pickup of your chit subscription amount."
          />
        </div>
      </div>

      {/* Payment Modes */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">
          Accepted Payment Modes
        </h3>
        <p className="text-blue-700">Cash / Cheque / DD / PDC / ECS</p>
      </div>
    </div>
  );
}

export default ChitServices;

/* Small helper inside same file */
function ServiceCard({ title, description }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
