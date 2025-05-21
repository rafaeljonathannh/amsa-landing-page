// src/components/Sections/EventsSection.jsx

const EventsSection = ({ events }) => {
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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ width: '33.333vw', minWidth: '300px'}}
            >
              {/* Image container — expands inside itself */}
              <div className="overflow-hidden transition-all duration-300 h-[480px] group-hover:h-40">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Description area with fixed height, expands inside card */}
              <div className="p-6 flex flex-col justify-start">
                <h3 className="text-center font-semibold text-[#184A3C] text-lg mb-3">
                  {event.title}
                </h3>

                {/* Container with max height to prevent layout shift */}
                <div className="relative overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  <p className="text-sm text-gray-600">
                    {event.description || "Description coming soon..."}
                  </p>

                   {/* Learn More */}
                   <div className="text-center">
                    {event.link && event.description && event.description.length !== 0 && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block px-5 py-2 bg-[#EEF8F1] text-[#6E9277] font-semibold rounded-lg text-center border-2 border-[#184A3C] hover:bg-[#6E9277] hover:text-[#FFFFFF] hover:border-0 transition-colors"
                          >
                          Learn More
                        </a>
                    )}
                    </div>

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