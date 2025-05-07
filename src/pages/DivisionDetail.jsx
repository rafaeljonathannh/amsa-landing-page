// src/pages/DivisionDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';

const DivisionDetail = () => {
  const { divisionId } = useParams();
  const [division, setDivision] = useState(null);
  
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
    
    // Fetch division data based on divisionId
    const divisionsData = {
      academics: {
        id: 'academics',
        title: 'Academics Division',
        tagline: 'diverbiar iluar',
        coverImage: '/src/assets/images/academics.jpg',
        logo: '/src/assets/images/acads-logo.png', // Perlu menyediakan logo divisi
        activities: [
          {
            id: 'workshop',
            title: 'Academic Workshop',
            image: '/src/assets/images/academic-workshop.jpg',
            description: 'Offline workshops and training sessions focused on knowledge and insights for scientific papers, public/scientific posters, and competitions available within AMSA.'
          },
          {
            id: 'isat',
            title: 'ISAT 2024',
            image: '/src/assets/images/isat-2024.jpg',
            description: 'abcde'
          },
          {
            id: 'rpcp',
            title: 'RPCP',
            image: '/src/assets/images/rpcp.jpg',
            description: 'The event consists of webinars and workshops that provide knowledge and insights as preparation for participating in the National Research Proposal Competition.'
          },
          {
            id: 'price',
            title: 'PRICE EAMSC 2025',
            image: '/src/assets/images/price-eamsc.jpg',
            description: 'An in-depth exploration of FCC EAMSC through webinars and online workshops to prepare participants who wish to compete in the FCC EAMSC competition.'
          },
          {
            id: 'activity5',
            title: 'abcde',
            image: '/src/assets/images/placeholder.jpg',
            description: 'abcde'
          },
          {
            id: 'activity6',
            title: 'abcde',
            image: '/src/assets/images/placeholder.jpg',
            description: 'abcde'
          }
        ]
      },
      exchange: {
        id: 'exchange',
        title: 'Asian Medical Students Exchange Program',
        tagline: 'Your gateway to global medical education',
        coverImage: '/src/assets/images/exchange.jpg',
        activities: [/* ... */]
      },
      outreach: {
        id: 'outreach',
        title: 'Community Outreach',
        tagline: 'Making healthcare accessible to all',
        coverImage: '/src/assets/images/outreach.jpg',
        activities: [/* ... */]
      },
      membership: {
        id: 'membership',
        title: 'Membership and Development',
        tagline: 'Growing together as medical professionals',
        coverImage: '/src/assets/images/membership.jpg',
        activities: [/* ... */]
      },
      relations: {
        id: 'relations',
        title: 'Public Relation and Delegation',
        tagline: 'Building bridges in healthcare',
        coverImage: '/src/assets/images/relations.jpg',
        activities: [/* ... */]
      },
      publication: {
        id: 'publication',
        title: 'Publication and Promotion',
        tagline: 'Sharing knowledge, inspiring change',
        coverImage: '/src/assets/images/publication.jpg',
        activities: [/* ... */]
      },
      recruitment: {
        id: 'recruitment',
        title: 'Recruitment',
        tagline: 'Join us in shaping the future of medicine',
        coverImage: '/src/assets/images/recruitment.jpg',
        activities: [/* ... */]
      }
    };
    
    setDivision(divisionsData[divisionId]);
  }, [divisionId]);
  
  if (!division) {
    return <div className="pt-24 text-center">Loading...</div>;
  }

  // Group activities into pairs for grid display
  const activityPairs = [];
  for (let i = 0; i < division.activities.length; i += 2) {
    activityPairs.push(division.activities.slice(i, i + 2));
  }

  return (
    <div className="pt-16">
      {/* Hero section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={division.coverImage} 
            alt={division.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Together We Grow logo in top left */}
        <div className="absolute top-36 left-24 z-20">
          <img 
            src="/src/assets/images/together-we-grow.png" 
            alt="Together We Grow" 
            className="h-7"
          />
        </div>
        
        {/* Division logo in center */}
        {division.logo && (
          <div className="absolute bottom-1/3 transform translate-y-1/2 z-20">
            <img 
              src={division.logo} 
              alt={`${division.title} Logo`} 
              className="h-32 w-32"
            />
          </div>
        )}
      </section>

      {/* Division title */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800">{division.title}</h1>
            <p className="text-lg text-gray-600 mt-4 italic">{division.tagline}</p>
          </div>
        </div>
      </section>

      {/* Activities grid */}
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
    </div>
  );
};

export default DivisionDetail;