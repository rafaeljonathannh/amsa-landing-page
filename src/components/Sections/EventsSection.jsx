// src/components/Sections/EventsSection.jsx
import { motion } from 'framer-motion';

const EventsSection = ({ events }) => {
  return (
    <div>
      {/* Whats on amsa ui */}
      <section className="py-4 md:py-8 bg-[#6E9277] bg-opacity-[0.24]">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* SVG Illustration */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }} // Added x: -50 for fade left to right
              whileInView={{ opacity: 1, x: 0 }} // Changed y to x
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="/images/whats-on-amsa.svg" 
                alt="What's On AMSA" 
                style={{ width: '430px', height: 'auto' }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

    {/* Events Grid */}
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300" // Removed hover classes
              style={{ width: '33.333vw', minWidth: '300px'}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image container — expands inside itself */}
              <motion.div 
                className="overflow-hidden transition-all duration-300 h-[480px] group-hover:h-40" // Kept group-hover for internal animation
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" // Kept group-hover for internal animation
                />
              </motion.div>

              {/* Description area with fixed height, expands inside card */}
              <div className="p-6 flex flex-col justify-start">
                <motion.h3 
                  className="text-center font-semibold text-[#184A3C] text-lg mb-3"
                >
                  {event.title}
                </motion.h3>

                {/* Container with max height to prevent layout shift */}
                <div className="relative overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  <p className="text-sm text-gray-600">
                    {event.description || "Description coming soon..."}
                  </p>

                    {/* Learn More */}
                    <div className="text-center mt-8">
                    {event.link && event.description && event.description.length !== 0 && (
                        <motion.a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block px-5 py-2 bg-[#EEF8F1] text-[#6E9277] font-semibold rounded-lg text-center border-2 border-[#184A3C] transition-colors" // Removed hover classes
                        >
                          Learn More
                        </motion.a>
                    )}
                    </div>

                    {/* Optional gradient fade if content is long */}
                    <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default EventsSection;