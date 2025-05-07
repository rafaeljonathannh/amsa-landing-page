// src/components/Sections/PresidentSection.jsx

const PresidentSection = () => {
  return (
    <section id="president-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold text-[#74928A] mb-8">
            Hi, People of Tomorrow!
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image */}
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-green-600 rounded-lg"></div>
                  <div className="relative z-10">
                    <img 
                      src="/src/assets/images/president.jpg" 
                      alt="Josh Melvern Arelian" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-gray-800">Josh Melvern Arelian</h3>
              </div>
              <div className="flex justify-center mt-2">
                <div className="italic mr-2">AMSA-UI</div>
                <div className="font-semibold">Representatium</div>
                <div className="ml-2">2024/2025</div>
              </div>
            </div>
            
            {/* Text content */}
            <div className="md:w-2/3">
              <div className="space-y-4 text-gray-700">
                <p>
                  Since 1986, AMSA-Universitas Indonesia has grown into one of the leading medical student organizations in the country. As a proud chapter of AMSA-Indonesia, we've worked with many institutions to make meaningful contributions to society.
                </p>
                <p>
                  With 7 active divisions, we unite passionate medical students and notable alumni from the Faculty of Medicine Universitas Indonesia. AMSA-UI is a dynamic and welcoming community. On behalf of the Executive Board, I'm excited to introduce you to AMSA-UI through our official website, your gateway to explore who we are.
                </p>
                <p>
                  Guided by the values of Science, Action, Friendship, and Culture, AMSA-UI offers a wide range of opportunities. We focus on academic growth, giving back to the community through health and social projects, while building lifelong connections among medical students.
                </p>
                <p>
                  For over 38 years, AMSA-UI has played a key role in driving positive change. Our strong relationships with government bodies, NGOs, sponsors, and other partners reflect our professionalism and dedication to actualize our goals.
                </p>
                <p>
                  This website is here to update our members and welcome new partners to connect and collaborate with us. I hope this platform can serve as a brief introduction of AMSA-UI. If you have any questions, feel free to reach out using the contact info provided.
                </p>
                
                <div className="pt-4 text-[#74928A]">
                  <p>Best Regards,</p>
                  <p>TogetherWeGrow</p>
                  <p>VIVA AMSA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentSection;