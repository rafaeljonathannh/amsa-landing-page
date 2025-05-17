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
    <section className="py-16">  
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-center font-bold text-gray-800 mb-3">{event.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-4">
                  {event.description || "Description coming soon..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsSection;