// src/components/Sections/DivisionsCTASection.jsx

const DivisionsCTASection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6" data-aos="fade-up">Find Your Place in AMSA</h2>
          <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
            With multiple divisions focusing on different aspects of medical education and community service, there's a place for everyone to contribute their unique talents and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors">
              Apply for Membership
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-full transition-colors">
              Contact Division Leaders
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsCTASection;