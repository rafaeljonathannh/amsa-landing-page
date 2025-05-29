const DivisionsDetailActivitiesSection = ({ activities }) => {
  if (!activities || activities.length === 0) return null;

  // Group activities into pairs for two-column layout
  const activityPairs = [];
  for (let i = 0; i < activities.length; i += 2) {
    activityPairs.push(activities.slice(i, i + 2));
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {activityPairs.map((pair, pairIndex) => (
            <div
              key={pairIndex}
              className={`grid gap-8 mb-8 ${
                pair.length === 1
                  ? 'grid-cols-1 justify-items-center'
                  : 'md:grid-cols-2'
              }`}
            >
              {pair.map((activity) => {
                const Wrapper = activity.link && activity.link.trim() !== "" ? 'a' : 'div';
                const wrapperProps = activity.link && activity.link.trim() !== ""
                  ? { href: activity.link, target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <div
                    key={activity.id}
                    className={pair.length === 1 ? 'max-w-[576px] w-full' : ''}
                  >
                    <Wrapper
                      {...wrapperProps}
                      className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 no-underline"
                      style={activity.link && activity.link.trim() !== "" ? { cursor: 'pointer' } : {}}
                    >
                      {/* Image container with fixed height and zoom on hover */}
                      <div className="overflow-hidden h-48 transition-transform duration-1000 group-hover:scale-105">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                          {activity.title}
                        </h3>

                        {/* Description with expandable max height on hover */}
                        <div className="relative overflow-hidden max-h-20 group-hover:max-h-96 transition-all duration-300 ease-in-out">
                          <p className="text-gray-600 text-sm">
                            {activity.description || "Description coming soon..."}
                          </p>
                          {/* Gradient fade to indicate overflow */}
                          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </Wrapper>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsDetailActivitiesSection;
