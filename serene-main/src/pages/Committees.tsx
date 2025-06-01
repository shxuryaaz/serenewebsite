export default function Committees() {
  const committees = [
    {
      name: 'United Nations General Assembly',
      shortName: 'UNGA',
      description: 'Deliberation on the Global Impact of U.S. Tariffs on International Trade and Development',
      image: '/unga.jpg',
    },
    {
      name: 'United Nations Human Rights Council',
      shortName: 'UNHRC',
      description: 'Addressing the Global Refugee Crisis: Ensuring Protection and International Cooperation',
      image: '/unhrc.jpg',
    },
    {
      name: 'United Nations Commission on the Status of Women',
      shortName: 'UNCSW',
      description: 'Preventing Forced Marriages and Child Brides in Conflict and Disaster Zones',
      image: '/uncsw.jpg',
    },
    {
      name: 'International Court of Justice',
      shortName: 'ICJ',
      description: 'Addressing the South China Sea Dispute: Ensuring Maritime Security and Peaceful Resolution',
      image: '/icj.jpg',
    },
    {
      name: 'All India Political Parties Meet',
      shortName: 'AIPPM',
      description: 'Deliberation on the Waqf Board Bill: Transparent Governance, Minority Rights & Religious Property',
      image: '/aippm.jpg',
    },
    {
      name: 'Formula 1 Association',
      shortName: 'F1A',
      description: 'Ensuring Fair Play in Global Sporting Events: Case Study of the 2021 Formula 1 Championship',
      image: '/f1.jpg',
    },
    {
      name: 'International Press',
      shortName: 'IP',
      description: 'Reporting on Global Events: Upholding Freedom of Press and Ethical Journalism',
      image: '/ip.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#152238] text-center mb-12">
          Committees & Agendas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee) => (
            <div
              key={committee.name}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-64 mb-4 overflow-hidden rounded-md relative group">
                <img
                  src={committee.image}
                  alt={committee.shortName}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-[#152238] mb-4">{committee.name}</h3>
              <p className="text-gray-600">{committee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
