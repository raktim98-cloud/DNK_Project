const AboutTeam = () => {
  const teamMembers = [
    {
      id: 1, // Added unique ID for key
      name: "Harvey Spector",
      position: "Founder-CEO",
      image: "/team_member (1).png"
    },
    {
      id: 2,
      name: "Jessica Pearson",
      position: "Marketing Head",
      image: "/team_member (2).png"
    },
    {
      id: 3,
      name: "Rachel Zain",
      position: "Design Lead",
      image: "/team_member (3).png"
    },
    {
      id: 4,
      name: "Luisel Iitt",
      position: "UX Researcher",
      image: "/team_member (4).png"
    },
    {
      id: 5,
      name: "Katrina Bennett",
      position: "Frontend Developer",
      image: "/team_member (5).png"
    },
    {
      id: 6,
      name: "Mike Boss",
      position: "Backend Engineer",
      image: "/team_member (6).png"
    }
  ];

  return (
    <section className="py-20 px-2 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="px-30">
        <div className="text-center mb-16">
          <p className="text-lg font-light text-gray-500 mb-2">A Few Words About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Team</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4">
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            </p>
            <p className="text-gray-600">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {teamMembers.map((member) => (
            <div 
              key={member.id} // Added key prop
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center mx-auto"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={member.image} 
                  alt={`Portrait of ${member.name}, ${member.position}`} // Improved alt text
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // Reduced scale amount
                  loading="lazy" // Added lazy loading
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;