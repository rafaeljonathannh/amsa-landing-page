import { motion } from 'framer-motion';

const PresidentSection = () => {
  return (
    <section id="president-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-center text-2xl font-semibold text-[#74928A] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hi, People of Tomorrow!
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image */}
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="relative"
              >
                {/* President photo */}
                <img 
                  src="/src/assets/images/president_bgr.png" 
                  alt="Josh Melvern Arelian" 
                  className="w-full rounded-lg"
                />

                {/* white gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>

                {/* Top overlay image top */}
                <motion.img 
                  src="/src/assets/images/amsa-ui-rep.svg" 
                  alt="Overlay"
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-42 z-20" 
                />

                {/* Bottom overlay image (president name) */}
                <motion.img 
                  src="/src/assets/images/president_name.svg" 
                  alt="President Name"
                  className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-72 z-20"
                />
              </motion.div>
              
              <motion.div 
                className="flex justify-center mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="italic mr-2">AMSA-UI</div>
                <div className="font-semibold">Representatium</div>
                <div className="ml-2">2024/2025</div>
              </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-4 text-gray-700">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Since 1986, AMSA-Universitas Indonesia has grown into one of the leading medical student organizations in the country. As a proud chapter of AMSA-Indonesia, we've worked with many institutions to make meaningful contributions to society.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  With 7 active divisions, we unite passionate medical students and notable alumni from the Faculty of Medicine Universitas Indonesia. AMSA-UI is a dynamic and welcoming community. On behalf of the Executive Board, I'm excited to introduce you to AMSA-UI through our official website, your gateway to explore who we are.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Guided by the values of Science, Action, Friendship, and Culture, AMSA-UI offers a wide range of opportunities. We focus on academic growth, giving back to the community through health and social projects, while building lifelong connections among medical students.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  For over 38 years, AMSA-UI has played a key role in driving positive change. Our strong relationships with government bodies, NGOs, sponsors, and other partners reflect our professionalism and dedication to actualize our goals.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  This website is here to update our members and welcome new partners to connect and collaborate with us. I hope this platform can serve as a brief introduction of AMSA-UI. If you have any questions, feel free to reach out using the contact info provided.
                </motion.p>
                
                <motion.div 
                  className="pt-4 text-[#74928A]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p>Best Regards,</p>
                  <p>TogetherWeGrow</p>
                  <p>VIVA AMSA</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentSection;