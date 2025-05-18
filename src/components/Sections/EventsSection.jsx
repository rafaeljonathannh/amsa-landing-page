// src/components/Sections/EventsSection.jsx

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "PRICE AMSC 2025: Urban Health Talkshow",
      description: "Hosted in collaboration between AMSA-Universitas Indonesia and AMSA-Malaysia, this talkshow will explore real-world urban health issues through the unique perspectives of each country. Featuring two speakers — Dr. Ariel Pradipta, MRes, PhD (Indonesia) and Dr. Zi Qi Ang, University Kebangsaan Malaysia (UKM) — who will discuss challenges, innovations, and approaches to urban health issues.",
      image: "/src/assets/images/event-talkshow.jpg",
    },
    {
      id: 2,
      title: "The National Medical and General Biology Competition (NMGBC)",
      description: "The National Medical and General Biology Competition (NMGBC), hosted by AMSA-Universitas Indonesia, is a highly anticipated academic event that challenges and inspires high school students in biology and medicine. Held at Fakultas Kedokteran Universitas Indonesia, this prestigious competition includes three main events...",
      image: "/src/assets/images/event-competition.jpg",
    },
    {
      id: 3,
      title: "Comser",
      description: "",
      image: "/src/assets/images/event-comser.jpg",
    },
  ];

  return (
    <div>
      {/* Whats on amsa ui */}
      <section className="py-16 bg-[#6E9277] bg-opacity-[0.24]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* SVG Illustration */}
            <div className="flex justify-center mb-4">
              <img 
                src="/src/assets/images/whats-on-amsa.svg" 
                alt="What's On AMSA" 
                className="w-85 h-auto md:w-120"
              />
            </div>
          </div>
        </div>
      </section>

    {/* Events Grid */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image container — expands inside itself */}
              <div className="overflow-hidden h-56">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Description area with fixed height, expands inside card */}
              <div className="p-6 flex flex-col justify-start">
                <h3 className="text-center font-semibold text-[#184A3C] text-lg mb-3">
                  {event.title}
                </h3>

                {/* Container with max height to prevent layout shift */}
                <div className="relative overflow-hidden max-h-24 group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  <p className="text-sm text-gray-600">
                    {event.description || "Description coming soon..."}
                  </p>

                  {/* Optional gradient fade if content is long */}
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default EventsSection;