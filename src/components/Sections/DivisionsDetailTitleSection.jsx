
const DivisionsDetailTitleSection = ({ division }) => {
  if (!division) return null;
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">{division.title}</h1>
          <p className="text-lg text-gray-600 mt-4 italic">{division.tagline}</p>
        </div>
      </div>
    </section>
  );
};

export default DivisionsDetailTitleSection;