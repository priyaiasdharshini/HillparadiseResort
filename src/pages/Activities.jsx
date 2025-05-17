import React, { useState, useEffect } from 'react';

const ActivityMapPage = () => {
  const [activeActivity, setActiveActivity] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const packageDetails = [
    { time: "Check In", activity: "2:00 PM", icon: "🏠" },
    { time: "Welcome Drink", activity: "3:00 PM", icon: "🥤" },
    { time: "Sliding Waterfalls Visit", activity: "4:00 PM", icon: "💦" },
    { time: "Night Dinner (Non-VEG)", activity: "8:00 PM", icon: "🍖" },
    { time: "Camp Fire", activity: "8:00-10:00 PM", icon: "🔥" },
    { time: "Mud-House Stay", activity: "Overnight", icon: "🛏️" },
    { time: "Morning Breakfast", activity: "8:00 AM", icon: "🍳" },
    { time: "View Point Trekking", activity: "9:00 AM", icon: "🥾" },
    { time: "Off-Road Jeep Safari", activity: "10:00 AM (2 Kms)", icon: "🚙" },
    { time: "Check Out", activity: "11:00 AM", icon: "👋" }
  ];

  const activityLocations = [
    { name: "JEEP SAFARI", x: 30, y: 35, icon: "🚙" },
    { name: "PRIVATE WATERFALL", x: 80, y: 35, icon: "💦" },
    { name: "CAMP FIRE", x: 40, y: 65, icon: "🔥" },
    { name: "DJ MUSIC", x: 70, y: 65, icon: "🎵" },
    { name: "MAIN AREA", x: 50, y: 50, icon: "🏡" },
  ];

  const activitySchedule = [
    { activity: "Jeep Safari: 2 Kms", icon: "🚙" },
    { activity: "Private Waterfall: 10:00 AM - 1:00 PM", icon: "💦" },
    { activity: "Camp Fire: 8:00 PM - 10:00 PM", icon: "🔥" },
    { activity: "DJ Music: 10:00 PM - 12:00 AM", icon: "🎵" }
  ];

  const highlightActivity = (name) => {
    setActiveActivity(name);
    setTimeout(() => setActiveActivity(null), 2000);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Main Content */}
      <main>
        {/* Hero Banner - Matching Gallery Style */}
        <div className="relative pt-32 pb-16 md:pb-32">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-black/80 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/images/IMG_5799.JPG')" }}
          />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Resort Activity Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore the adventures awaiting you at Hill Paradise Resort.
            </p>
          </div>
        </div>
        
        {/* Map Section */}
        <section className="py-8 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            {/* Map container with responsive height */}
            <div className="relative w-full aspect-square md:aspect-auto md:h-[550px] bg-forest-green rounded-lg overflow-hidden border-4 border-amber-900/50 shadow-2xl">
              {/* Map background */}
              <div 
                className="absolute inset-0 bg-teal-900"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(23, 81, 23, 0.9) 0%, rgba(18, 41, 18, 1) 100%)',
                  backgroundSize: 'cover'
                }}
              >
                {/* Forest decoration */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-4 md:w-8 h-4 md:h-8 rounded-full bg-teal-600/60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      transform: `scale(${0.5 + Math.random() * 1.5})`
                    }}
                  />
                ))}
                
                {/* Compass - smaller on mobile */}
                <div className="absolute left-2 md:left-8 top-2 md:top-8 w-10 md:w-16 h-10 md:h-16 rounded-full bg-amber-900/60 flex items-center justify-center text-amber-200 border border-amber-700">
                  <div className="relative w-8 md:w-12 h-8 md:h-12">
                    <div className="absolute inset-0 flex items-center justify-center text-sm md:text-lg font-bold">N</div>
                    <div className="absolute inset-0 flex items-center justify-center rotate-90 text-sm md:text-lg font-bold">E</div>
                    <div className="absolute inset-0 flex items-center justify-center rotate-180 text-sm md:text-lg font-bold">S</div>
                    <div className="absolute inset-0 flex items-center justify-center rotate-270 text-sm md:text-lg font-bold">W</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-amber-200"></div>
                    </div>
                  </div>
                </div>
                
                {/* Resort Title - responsive font size and position */}
                <div className="absolute left-1/2 top-2 md:top-6 transform -translate-x-1/2 px-4 md:px-8 py-2 md:py-4 border-2 border-amber-700 rounded-lg bg-amber-900/50 text-center">
                  <h2 className="text-lg md:text-2xl font-bold text-amber-200">HILL PARADISE RESORT</h2>
                  <p className="text-xs md:text-base text-amber-300/80">Adventure Activities Map</p>
                </div>
                
                {/* Activity Schedule - repositioned for mobile */}
                <div className={`absolute ${isMobile ? 'left-1/2 -translate-x-1/2 bottom-2' : 'right-6 top-24'} w-64 bg-amber-900/70 border-2 border-amber-700 rounded-lg p-3 md:p-4 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                  <h3 className="text-center font-bold text-amber-200 mb-2 md:mb-3">ACTIVITY SCHEDULE</h3>
                  <div className="space-y-1 md:space-y-2">
                    {activitySchedule.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="mr-2">{item.icon}</span>
                        <span className="text-amber-100">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Map Legend - hidden on mobile */}
                {!isMobile && (
                  <div className="absolute left-6 bottom-6 w-52 bg-amber-900/70 border-2 border-amber-700 rounded-lg p-4">
                    <h3 className="text-center font-bold text-amber-200 mb-3">RESORT ACTIVITY MAP</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-8 h-1 bg-amber-400"></div>
                        <span className="ml-2 text-sm text-amber-100">Main Road</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-1 bg-teal-400"></div>
                        <span className="ml-2 text-sm text-amber-100">Activity Path</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-teal-600/60"></div>
                        <span className="ml-2 text-sm text-amber-100">Forest Area</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Scale - hidden on mobile */}
                {!isMobile && (
                  <div className="absolute right-6 bottom-6 flex items-center">
                    <div className="h-1 w-16 bg-white"></div>
                    <div className="h-1 w-16 bg-white ml-1"></div>
                    <div className="ml-2 text-white text-xs">
                      <div>100 m</div>
                      <div>200 m</div>
                    </div>
                  </div>
                )}
                
                {/* Circular path around main area */}
                <div className="absolute left-1/2 top-1/2 w-[90%] h-[90%] md:w-[500px] md:h-[500px] -translate-x-[45%] -translate-y-[45%] md:-translate-x-[250px] md:-translate-y-[250px] rounded-full border-2 border-amber-700/30 border-dashed"></div>
                
            
                
                {/* Activity Locations */}
                {activityLocations.map((location, index) => {
                  const isMain = location.name === "MAIN AREA";
                  const isActive = activeActivity === location.name;
                  
                  return (
                    <React.Fragment key={index}>
                      {/* Add connecting paths */}
                      {!isMain && (
                        <div 
                          className="absolute h-1 bg-teal-400 origin-left"
                          style={{
                            width: `${Math.sqrt(Math.pow(location.x - 50, 2) + Math.pow(location.y - 50, 2)) * 5}px`,
                            left: '50%',
                            top: '50%',
                            transform: `rotate(${Math.atan2(location.y - 50, location.x - 50) * (180 / Math.PI)}deg)`,
                          }}
                        />
                      )}
                      
                      {/* Location marker - smaller on mobile */}
                      <div 
                        className={`absolute cursor-pointer transition-all duration-300 ${isActive ? 'scale-125' : ''}`}
                        style={{
                          left: `${location.x}%`,
                          top: `${location.y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        onClick={() => highlightActivity(location.name)}
                      >
                        <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${isMain ? 'bg-amber-800' : 'bg-green-800'} border-2 ${isActive ? 'border-yellow-300 animate-pulse' : 'border-amber-700'}`}>
                          <span className="text-base md:text-xl">{location.icon}</span>
                        </div>
                        <div className="mt-1 text-center font-bold text-[10px] md:text-xs whitespace-nowrap text-amber-200">
                          {isMobile && location.name.length > 10 ? location.name.split(' ')[0] : location.name}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        
        {/* Itinerary Roadmap Section */}
        <section className="py-8 md:py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 md:mb-4">Package Itinerary</h2>
              <p className="text-teal-200">Your adventure schedule from check-in to check-out</p>
            </div>
            
            <div className="bg-green-900/40 rounded-xl shadow-2xl overflow-hidden p-4 md:p-8 border-2 border-teal-800">
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-2">ADVENTURE ACTIVITY MAP</h3>
                <button className="bg-teal-600 hover:bg-amber-700 text-white py-1 md:py-2 px-4 md:px-6 rounded-full transition-all duration-300 inline-flex items-center">
                  Join here
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-3 md:pl-6 ml-2 md:ml-4 py-2 md:py-4 space-y-4 md:space-y-8">
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">ACTIVITY SCHEDULE</h4>
                  <div className="space-y-2 md:space-y-4">
                    {packageDetails.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-7 md:-left-9 top-1 w-4 h-4 md:w-6 md:h-6 rounded-full bg-amber-500 border-4 border-teal-900 flex items-center justify-center text-green-900 font-bold text-xs md:text-sm">
                          {index + 1}
                        </div>
                        <div className="bg-teal-800/70 rounded-lg p-2 md:p-4 shadow-md">
                          <div className="block w-full">
                            <div className="flex items-center mb-1">
                              <span className="text-xl md:text-2xl mr-2 md:mr-3">{item.icon}</span>
                              <div className="text-amber-300 font-medium text-sm md:text-base">{item.time}</div>
                            </div>
                            <div className="text-white text-sm md:text-base pl-8">{item.activity}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 md:pt-4">
                  <div className="bg-teal-800/70 rounded-lg p-3 md:p-4 shadow-md flex items-start md:items-center flex-col md:flex-row">
                    <div className="bg-amber-500 rounded-full p-2 mr-3 mb-2 md:mb-0">
                      <svg className="w-4 h-4 md:w-6 md:h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white">PACK ESSENTIALS</h4>
                      <p className="text-green-100 text-sm md:text-base">Remember to bring comfortable shoes, water bottles, insect repellent, and cameras.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 text-center">
                <span className="inline-block bg-amber-500 text-teal-900 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">FOREST ADVENTURE</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ActivityMapPage;