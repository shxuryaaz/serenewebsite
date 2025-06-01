export default function Matrix() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#152238] text-center mb-12">
          Committee Matrix
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6 flex justify-end">
            <a
              href="https://docs.google.com/spreadsheets/d/142CKWpL2vNyEaaSDEX4qciL4CrYkkMRoZ23wVzhKTho/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#152238] text-white px-4 py-2 rounded-md hover:bg-[#1a2a4a] transition-colors">
                Open in Google Sheets
              </button>
            </a>
          </div>

          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR8aVPEW_VL-Kf2cTo664v2D4qrjxGrmUVNa_KISMUQd6HxEs7SnfxSmODwsNVcILo8FHLU_N_aZ3wO/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="600"
              className="w-full border-none rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
