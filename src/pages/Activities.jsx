import React, { useState, useEffect } from 'react';

const ActivityMapPage = () => {
  const [activeSchedule, setActiveSchedule] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const packageDetails = [
    {
      time: "Check In",
      activity: "2:00 PM",
      icon: "🏠",
      image: "https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg",
      description: "Begin your adventure at our reception area with a warm welcome from our staff."
    },
    {
      time: "Night Dinner (Non-VEG)",
      activity: "8:00 PM",
      icon: "🍖",
      image: "https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/barbeque_oh8wwn.jpg",
      description: "Enjoy a delicious BBQ dinner with local delicacies under the starry sky."
    },
    {
      time: "Camp Fire",
      activity: "8:00-10:00 PM",
      icon: "🔥",
      image: "https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/firecamp_wmm1xw.jpg",
      description: "Gather around the campfire for stories, music and marshmallow roasting."
    },
    {
      time: "Mud-House Stay",
      activity: "Overnight",
      icon: "🛏️",
      image: "https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/WhatsApp_Image_2025-05-15_at_5.09.13_PM_b86mzi.jpg",
      description: "Experience traditional living in our comfortable, eco-friendly mud houses."
    },
    {
      time: "Morning Breakfast",
      activity: "8:00 AM",
      icon: "🍳",
      image: "https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/tentclient_2_ahxivw.jpg",
      description: "Start your day with a hearty breakfast with local and continental options."
    },
    {
      time: "View Point Trekking",
      activity: "9:00 AM",
      icon: "🥾",
      image: "https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/trekking_bjbwov.jpg",
      description: "Trek to our scenic viewpoint for breathtaking panoramic views of the valley."
    },
    {
      time: "Off-Road Jeep Safari",
      activity: "10:00 AM (2 Kms)",
      icon: "🚙",
      image: "https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/ofroadjeefsafari_cfnofd.jpg",
      description: "Hold tight for an exciting off-road journey through rugged forest trails."
    },
    {
      time: "Check Out",
      activity: "11:00 AM",
      icon: "👋",
      image: "https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms5_tw9h7u.jpg",
      description: "Bid farewell to the wilderness with memories to cherish forever."
    }
  ];

  const handleActivityClick = (index) => {
    setActiveSchedule(activeSchedule === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main>
        <div className="relative pt-32 pb-16 md:pb-32">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-black/80 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg')" }}
          />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Resort Activity Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore the adventures awaiting you at Hill Paradise Resort.
              {isMobile && <span className="block text-sm text-teal-200">Optimized for mobile view</span>}
            </p>
          </div>
        </div>

        <div>
          <section className="py-12 md:py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-wide">Resort Activity Map</h2>
                <p className="text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
                  Explore the adventures awaiting you at Hill Paradise Resort.
                </p>
              </div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full max-w-4xl h-auto">
                  <rect width="800" height="600" fill="#1a2a1f" />
                  <pattern id="forestPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                    <rect width="100" height="100" fill="#1a2a1f" />
                    <circle cx="20" cy="20" r="3" fill="#2e3d2b" opacity="0.7" />
                    <circle cx="60" cy="40" r="4" fill="#2e3d2b" opacity="0.7" />
                    <circle cx="30" cy="70" r="5" fill="#2e3d2b" opacity="0.7" />
                    <circle cx="80" cy="80" r="3" fill="#2e3d2b" opacity="0.7" />
                  </pattern>
                  <rect width="800" height="600" fill="url(#forestPattern)" />
                  <path d="M150 350 Q300 200 450 250 Q600 300 700 250" stroke="#4a6b4d" strokeWidth="3" fill="none" />
                  <path d="M100 380 Q250 230 400 280 Q550 330 750 280" stroke="#4a6b4d" strokeWidth="3" fill="none" />
                  <path d="M50 400 Q200 250 350 300 Q500 350 800 300" stroke="#4a6b4d" strokeWidth="3" fill="none" />
                  <path d="M200 150 Q350 100 500 150 Q600 200 650 350 Q680 450 600 500 Q500 550 350 530 Q250 510 200 450 Q150 350 200 150"
                        stroke="#8b7560" strokeWidth="3" strokeDasharray="10,5" fill="none" />
                  <circle cx="400" cy="300" r="80" fill="#2e3d2b" opacity="0.4" />
                  <rect x="370" y="270" width="60" height="40" fill="#6b5644" />
                  <polygon points="370,270 430,270 400,240" fill="#4a3d2e" />
                  <rect x="390" y="290" width="20" height="20" fill="#d3c7b8" />
                  <rect x="380" y="280" width="10" height="10" fill="#d3c7b8" />
                  <rect x="410" y="280" width="10" height="10" fill="#d3c7b8" />
                  <path d="M400 550 Q400 450 400 310" stroke="#6b5644" strokeWidth="15" fill="none" strokeLinecap="round" />
                  <path d="M400 550 Q400 450 400 310" stroke="#8b7560" strokeWidth="12" fill="none" strokeLinecap="round" />
                  <path d="M400 550 Q400 450 400 310" stroke="#d3c7b8" strokeWidth="2" strokeDasharray="20,20" fill="none" />
                  <circle cx="550" cy="200" r="40" fill="#3e5e41" opacity="0.6" />
                  <path d="M550 170 Q560 185 550 200 Q540 185 550 170" fill="#567b57" />
                  <path d="M545 200 Q555 215 545 230 Q535 215 545 200" fill="#567b57" />
                  <ellipse cx="550" cy="240" rx="20" ry="10" fill="#3e5e41" />
                  <path d="M410 270 Q480 235 550 200" stroke="#8b7560" strokeWidth="5" fill="none" />
                  <path d="M410 270 Q480 235 550 200" stroke="#d3c7b8" strokeWidth="1" strokeDasharray="5,5" fill="none" />
                  <circle cx="260" cy="220" r="40" fill="#2e3d2b" opacity="0.5" />
                  <rect x="245" y="215" width="30" height="18" rx="3" fill="#4a3d2e" />
                  <rect x="252" y="205" width="15" height="10" rx="2" fill="#4a3d2e" />
                  <circle cx="250" cy="233" r="5" fill="#1a2a1f" />
                  <circle cx="270" cy="233" r="5" fill="#1a2a1f" />
                  <path d="M370 270 Q315 245 260 220" stroke="#8b7560" strokeWidth="5" fill="none" />
                  <path d="M370 270 Q315 245 260 220" stroke="#d3c7b8" strokeWidth="1" strokeDasharray="5,5" fill="none" />
                  <circle cx="300" cy="400" r="40" fill="#2e3d2b" opacity="0.5" />
                  <path d="M296 390 Q300 380 304 390 Q307 383 310 390" fill="#e67e22" />
                  <path d="M298 388 Q300 380 302 388 Q304 384 306 388" fill="#f39c12" />
                  <rect x="280" y="410" width="15" height="5" rx="2" fill="#6b5644" />
                  <rect x="305" y="410" width="15" height="5" rx="2" fill="#6b5644" />
                  <path d="M380 310 Q340 355 300 400" stroke="#8b7560" strokeWidth="5" fill="none" />
                  <path d="M380 310 Q340 355 300 400" stroke="#d3c7b8" strokeWidth="1" strokeDasharray="5,5" fill="none" />
                  <circle cx="500" cy="400" r="40" fill="#2e3d2b" opacity="0.5" />
                  <rect x="485" y="390" width="30" height="15" rx="2" fill="#4a3d2e" />
                  <circle cx="492" cy="398" r="4" fill="#1a2a1f" />
                  <circle cx="508" cy="398" r="4" fill="#1a2a1f" />
                  <rect x="495" y="385" width="10" height="10" fill="#6b5644" />
                  <path d="M488 382 Q500 377 512 382" stroke="#1a2a1f" strokeWidth="2" fill="none" />
                  <rect x="485" y="410" width="30" height="20" rx="2" fill="#2e3d2b" opacity="0.7" />
                  <path d="M420 310 Q460 355 500 400" stroke="#8b7560" strokeWidth="5" fill="none" />
                  <path d="M420 310 Q460 355 500 400" stroke="#d3c7b8" strokeWidth="1" strokeDasharray="5,5" fill="none" />
                  <g opacity="0.9">
                    <circle cx="180" cy="180" r="20" fill="#3e5e41" />
                    <circle cx="150" cy="200" r="15" fill="#4a6b4d" />
                    <circle cx="200" cy="210" r="18" fill="#567b57" />
                    <circle cx="170" cy="160" r="12" fill="#638663" />
                  </g>
                  <g opacity="0.9">
                    <circle cx="620" cy="180" r="15" fill="#3e5e41" />
                    <circle cx="650" cy="160" r="20" fill="#4a6b4d" />
                    <circle cx="600" cy="150" r="12" fill="#567b57" />
                    <circle cx="630" cy="130" r="18" fill="#638663" />
                  </g>
                  <g opacity="0.9">
                    <circle cx="200" cy="450" r="18" fill="#3e5e41" />
                    <circle cx="230" cy="470" r="15" fill="#4a6b4d" />
                    <circle cx="180" cy="480" r="20" fill="#567b57" />
                    <circle cx="210" cy="430" r="12" fill="#638663" />
                  </g>
                  <g opacity="0.9">
                    <circle cx="600" cy="450" r="20" fill="#3e5e41" />
                    <circle cx="630" cy="430" r="15" fill="#4a6b4d" />
                    <circle cx="580" cy="470" r="18" fill="#567b57" />
                    <circle cx="610" cy="480" r="12" fill="#638663" />
                  </g>
                  <g>
                    <circle cx="350" cy="200" r="8" fill="#4a6b4d" />
                    <circle cx="450" cy="200" r="10" fill="#567b57" />
                    <circle cx="320" cy="320" r="9" fill="#3e5e41" />
                    <circle cx="480" cy="320" r="7" fill="#638663" />
                    <circle cx="350" cy="400" r="8" fill="#4a6b4d" />
                    <circle cx="450" cy="400" r="9" fill="#3e5e41" />
                    <circle cx="350" cy="150" r="7" fill="#567b57" />
                    <circle cx="450" cy="150" r="8" fill="#638663" />
                    <circle cx="300" cy="250" r="9" fill="#4a6b4d" />
                    <circle cx="500" cy="250" r="7" fill="#567b57" />
                    <circle cx="350" cy="450" r="8" fill="#3e5e41" />
                    <circle cx="450" cy="450" r="9" fill="#638663" />
                  </g>
                  <path d="M260 220 Q230 180 200 130 Q150 100 100 150 Q80 200 120 250" stroke="#8b7560" strokeWidth="3" strokeDasharray="5,5" fill="none" />
                  <text x="150" y="150" fontFamily="Arial" fontSize="10" fill="#d3c7b8" transform="rotate(-20,150,150)">Safari Route</text>
                  <circle cx="100" cy="100" r="30" fill="#2e3d2b" stroke="#8b7560" strokeWidth="2" />
                  <path d="M100 70 L100 130" stroke="#8b7560" strokeWidth="2" />
                  <path d="M70 100 L130 100" stroke="#8b7560" strokeWidth="2" />
                  <polygon points="100,75 105,95 100,90 95,95" fill="#8b7560" />
                  <text x="98" y="85" fontFamily="Arial" fontSize="12" fill="#d3c7b8">N</text>
                  <text x="115" y="103" fontFamily="Arial" fontSize="12" fill="#d3c7b8">E</text>
                  <text x="98" y="123" fontFamily="Arial" fontSize="12" fill="#d3c7b8">S</text>
                  <text x="77" y="103" fontFamily="Arial" fontSize="12" fill="#d3c7b8">W</text>
                  <rect x="50" y="500" width="180" height="80" fill="#2e3d2b" fillOpacity="0.8" rx="5" ry="5" stroke="#8b7560" strokeWidth="2" />
                  <text x="60" y="520" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#d3c7b8">RESORT ACTIVITY MAP</text>
                  <line x1="60" y1="535" x2="80" y2="535" stroke="#8b7560" strokeWidth="4" />
                  <text x="90" y="539" fontFamily="Arial" fontSize="10" fill="#d3c7b8">Main Road</text>
                  <line x1="60" y1="550" x2="80" y2="550" stroke="#8b7560" strokeWidth="2" />
                  <text x="90" y="554" fontFamily="Arial" fontSize="10" fill="#d3c7b8">Activity Path</text>
                  <circle cx="65" cy="565" r="5" fill="#4a6b4d" />
                  <text x="75" y="568" fontFamily="Arial" fontSize="10" fill="#d3c7b8">Forest Area</text>
                  <text x="550" y="185" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#d3c7b8">PRIVATE WATERFALL</text>
                  <text x="260" y="205" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#d3c7b8">JEEP SAFARI</text>
                  <text x="300" y="385" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#d3c7b8">CAMP FIRE</text>
                  <text x="500" y="385" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#d3c7b8">DJ MUSIC</text>
                  <text x="400" y="320" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#d3c7b8">Main Area</text>
                  <rect x="600" y="100" width="180" height="100" fill="#2e3d2b" fillOpacity="0.8" rx="5" ry="5" stroke="#8b7560" strokeWidth="2" />
                  <text x="690" y="120" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#d3c7b8">ACTIVITY SCHEDULE</text>
                  <text x="610" y="140" fontFamily="Arial" fontSize="10" fill="#d3c7b8">🌄 Jeep Safari: 2Kms</text>
                  <text x="610" y="155" fontFamily="Arial" fontSize="10" fill="#d3c7b8">💦 Private Waterfall: 10:00 AM - 1:00 PM</text>
                  <text x="610" y="170" fontFamily="Arial" fontSize="10" fill="#d3c7b8">🔥 Camp Fire: 8:00 PM - 10:00 PM</text>
                  <text x="610" y="185" fontFamily="Arial" fontSize="10" fill="#d3c7b8">🎵 DJ Music: 9:00 PM - 12:00 AM</text>
                  <line x1="650" y1="550" x2="750" y2="550" stroke="#8b7560" strokeWidth="2" />
                  <line x1="650" y1="545" x2="650" y2="555" stroke="#8b7560" strokeWidth="2" />
                  <line x1="700" y1="545" x2="700" y2="555" stroke="#8b7560" strokeWidth="2" />
                  <line x1="750" y1="545" x2="750" y2="555" stroke="#8b7560" strokeWidth="2" />
                  <text x="690" y="540" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#d3c7b8">100 m</text>
                  <text x="740" y="540" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#d3c7b8">200 m</text>
                  <rect x="250" y="30" width="300" height="60" fill="#2e3d2b" fillOpacity="0.9" rx="10" ry="10" stroke="#8b7560" strokeWidth="2" />
                  <text x="400" y="60" fontFamily="Arial" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#d3c7b8">HILL PARADISE RESORT</text>
                  <text x="400" y="80" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#d3c7b8">Adventure Activities Map</text>
                </svg>
              </div>
            </div>
          </section>
        </div>

        <section className="py-12 md:py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-forest-pattern opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Adventure Roadmap
              </h2>
              <p className="text-teal-200 max-w-2xl mx-auto">
                Follow this exciting journey through our resort's activities
              </p>
            </div>
            <div className="relative">
              {/* Wrap timeline items in a container to control line height */}
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-2 bg-gradient-to-b from-teal-600 to-amber-600 rounded-full transform -translate-x-1/2"></div>
                <div className="md:hidden absolute left-8 top-0 h-full w-2 bg-gradient-to-b from-teal-600 to-amber-600 rounded-full"></div>
                <div className="relative z-10">
                  {packageDetails.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const isActive = activeSchedule === index;
                    const mobileClasses = "md:hidden flex flex-col ml-16 mb-12";
                    const desktopClasses = `hidden md:flex items-center mb-16 ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`;
                    return (
                      <div key={index}>
                        <div className={mobileClasses}>
                          <div className="absolute left-7 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center border-4 border-gray-900 text-gray-900 font-bold">
                            {index + 1}
                          </div>
                          <div
                            className={`bg-green-900/40 rounded-lg overflow-hidden border-2 border-teal-800 shadow-lg hover:shadow-teal-700/30 transition-all duration-300 cursor-pointer ${
                              isActive ? 'ring-2 ring-amber-500' : ''
                            }`}
                            onClick={() => handleActivityClick(index)}
                          >
                            <img
                              src={item.image}
                              alt={item.time}
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <div className="flex items-center mb-2">
                                <span className="text-2xl mr-2">{item.icon}</span>
                                <h3 className="text-lg font-bold text-amber-300">{item.time}</h3>
                              </div>
                              <p className="text-white text-sm">{item.activity}</p>
                              <p className="text-gray-300 text-xs mt-2">{item.description}</p>
                              {isActive && (
                                <div className="mt-3 p-2 bg-teal-900/50 rounded">
                                  <p className="text-teal-200 text-xs">✓ Activity Selected</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className={desktopClasses}>
                          <div className="absolute left-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center border-4 border-gray-900 transform -translate-x-1/2 text-gray-900 font-bold">
                            {index + 1}
                          </div>
                          <div className={`w-2/5 ${isEven ? "pr-8 text-right" : "pl-8"}`}>
                            <h3 className="text-xl font-bold text-amber-300 mb-1 flex items-center justify-end">
                              {isEven ? (
                                <>
                                  {item.time} <span className="text-2xl ml-2">{item.icon}</span>
                                </>
                              ) : (
                                <>
                                  <span className="text-2xl mr-2">{item.icon}</span> {item.time}
                                </>
                              )}
                            </h3>
                            <p className={`text-white text-lg ${isEven ? "text-right" : "text-left"}`}>
                              {item.activity}
                            </p>
                            <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                            {isActive && (
                              <div className="mt-3 p-2 bg-teal-900/50 rounded">
                                <p className="text-teal-200 text-xs">✓ Activity Selected</p>
                              </div>
                            )}
                          </div>
                          <div className="w-1/5 flex justify-center">
                            <div className={`w-12 h-2 bg-amber-500 mt-4 ${isEven ? "-mr-1" : "-ml-1"}`}></div>
                          </div>
                          <div className="w-2/5">
                            <div className={`${isEven ? "pl-8" : "pr-8"}`}>
                              <div
                                className={`overflow-hidden rounded-lg border-2 border-teal-800 shadow-lg hover:shadow-teal-700/30 transition-all duration-300 cursor-pointer ${
                                  isActive ? 'ring-2 ring-amber-500' : ''
                                }`}
                                onClick={() => handleActivityClick(index)}
                              >
                                <img
                                  src={item.image}
                                  alt={item.time}
                                  className="w-full h-48 object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <div className="bg-amber-500 text-gray-900 px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                  Your Adventure Ends Here
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-green-900/40 rounded-xl shadow-2xl overflow-hidden p-6 md:p-8 border-2 border-teal-800">
              <div className="flex items-start flex-col md:flex-row">
                <div className="bg-amber-500 rounded-full p-3 md:p-4 mr-4 mb-4 md:mb-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Adventure Essentials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <p>Comfortable trekking shoes with good grip</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <p>Water bottle and light snacks</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <p>Insect repellent and sunscreen</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <p>Camera for capturing memories</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <p>Light jacket for evening activities</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <p>Swimwear for waterfall activities</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-teal-700">
                    <p className="text-teal-200 italic">
                      "The adventure you seek is waiting just beyond your comfort zone."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ActivityMapPage;