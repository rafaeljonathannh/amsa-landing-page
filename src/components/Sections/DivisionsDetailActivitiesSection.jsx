
const DivisionsDetailActivitiesSection = ({ activities }) => {
  if (!activities || activities.length === 0) return null;
  
  // Group activities into pairs for grid display
  const activityPairs = [];
  for (let i = 0; i < activities.length; i += 2) {
    activityPairs.push(activities.slice(i, i + 2));
  }
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {activityPairs.map((pair, pairIndex) => (
            <div key={pairIndex} className="grid md:grid-cols-2 gap-8 mb-8">
              {pair.map((activity) => (
                <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsDetailActivitiesSection;