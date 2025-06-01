export default function Registration() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#152238] text-center mb-12">
          Registration Fees & Contact Info
        </h2>

        {/* Fees Section */}
        <section className="bg-[#f9fafb] rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-[#152238] mb-6 text-center">
            Registration Fees
          </h3>

          <ul className="space-y-6 text-[#152238] text-lg font-medium max-w-md mx-auto">
            <li className="flex justify-between border-b border-gray-300 pb-3">
              <span>UN and Indian Committees</span>
              <span>₹ 2000</span>
            </li>
            <li className="flex justify-between border-b border-gray-300 pb-3">
              <span>International Press</span>
              <span>₹ 1800</span>
            </li>
            <li className="flex justify-between border-b border-gray-300 pb-3">
              <span>FIA (Double Delegation)</span>
              <span>₹ 3800</span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-[#f9fafb] rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-[#152238] mb-6 text-center">
            For Any Queries Contact
          </h3>

          <div className="max-w-md mx-auto space-y-6 text-[#152238] text-lg font-medium">
            <div>
              <p className="font-semibold">Mr Hrishik Ladia (Founder)</p>
              <p className="text-gray-700">+91 93198 36980</p>
            </div>

            <div>
              <p className="font-semibold">Ms Eva Uniyal (President)</p>
              <p className="text-gray-700">+91 92891 16999</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
