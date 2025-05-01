import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-amber-100">
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-gray-900/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/images/image6.avif')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-amber-100 mb-4 tracking-tight drop-shadow-lg animate-slide-in-left">
            About Hill Paradise Resort
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-amber-200 max-w-3xl mx-auto md:mx-0 leading-relaxed animate-slide-in-right delay-200">
            Uncover our legacy, values, and dedication to nature-inspired luxury.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-900 to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="\src\assets\images\image4.avif" 
                alt="Resort history" 
                className="rounded-xl shadow-2xl w-full object-cover h-64 sm:h-80 md:h-96 transform transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-amber-100 mb-6 tracking-wide">Our Story</h2>
              <p className="text-base sm:text-lg text-amber-200 mb-4 leading-relaxed">
                Established in 1985, Hill Paradise Resort began as a humble retreat with 10 rooms, rooted in a vision to blend luxury with nature’s embrace.
              </p>
              <p className="text-base sm:text-lg text-amber-200 mb-4 leading-relaxed">
                Over the years, we’ve evolved into a globally celebrated eco-luxury destination, staying true to our commitment to sustainable practices and authentic experiences.
              </p>
              <p className="text-base sm:text-lg text-amber-200 leading-relaxed">
                Now boasting 120 rooms, three farm-to-table restaurants, and a serene spa, our resort offers an unparalleled escape into nature’s splendor.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-12 md:py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-amber-100 mb-4 tracking-wide">Our Core Values</h2>
            <p className="text-base sm:text-lg text-amber-200 max-w-3xl mx-auto leading-relaxed">
              The principles that define our commitment to nature and hospitality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Exceptional Service",
                description: "Personalized care and attention to detail elevate every moment of your stay.",
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: "Environmental Stewardship",
                description: "Sustainable practices protect the pristine beauty of our natural surroundings.",
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Community Connection",
                description: "We celebrate local culture through authentic experiences and partnerships.",
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-emerald-900/50 p-6 rounded-xl shadow-lg border border-emerald-700/30 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/20">
                <div className="text-emerald-400 mb-4 flex justify-center transform transition-transform duration-300 hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center text-amber-100 mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-amber-200 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resort Map */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-amber-100 mb-4 tracking-wide">Resort Activity Map</h2>
            <p className="text-base sm:text-lg text-amber-200 max-w-3xl mx-auto leading-relaxed">
              Explore the adventures awaiting you at Hill Paradise Resort.
            </p>
          </div>
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full max-w-4xl h-auto">
              {/* Background */}
              <rect width="800" height="600" fill="#1a2a1f" />
              
              {/* Forest Background Texture */}
              <pattern id="forestPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                <rect width="100" height="100" fill="#1a2a1f" />
                <circle cx="20" cy="20" r="3" fill="#2e3d2b" opacity="0.7" />
                <circle cx="60" cy="40" r="4" fill="#2e3d2b" opacity="0.7" />
                <circle cx="30" cy="70" r="5" fill="#2e3d2b" opacity="0.7" />
                <circle cx="80" cy="80" r="3" fill="#2e3d2b" opacity="0.7" />
              </pattern>
              <rect width="800" height="600" fill="url(#forestPattern)" />
              
              {/* Hill Contours */}
              <path d="M150 350 Q300 200 450 250 Q600 300 700 250" stroke="#4a6b4d" stroke-width="3" fill="none" />
              <path d="M100 380 Q250 230 400 280 Q550 330 750 280" stroke="#4a6b4d" stroke-width="3" fill="none" />
              <path d="M50 400 Q200 250 350 300 Q500 350 800 300" stroke="#4a6b4d" stroke-width="3" fill="none" />
              
              {/* Resort Boundary */}
              <path d="M200 150 Q350 100 500 150 Q600 200 650 350 Q680 450 600 500 Q500 550 350 530 Q250 510 200 450 Q150 350 200 150" 
                    stroke="#8b7560" stroke-width="3" stroke-dasharray="10,5" fill="none" />
              
              <circle cx="400" cy="300" r="80" fill="#2e3d2b" opacity="0.4" />
              
              <rect x="370" y="270" width="60" height="40" fill="#6b5644" />
              <polygon points="370,270 430,270 400,240" fill="#4a3d2e" />
              <rect x="390" y="290" width="20" height="20" fill="#d3c7b8" /> 
              <rect x="380" y="280" width="10" height="10" fill="#d3c7b8" /> 
              <rect x="410" y="280" width="10" height="10" fill="#d3c7b8" />
              
              <path d="M400 550 Q400 450 400 310" stroke="#6b5644" stroke-width="15" fill="none" stroke-linecap="round" />
              <path d="M400 550 Q400 450 400 310" stroke="#8b7560" stroke-width="12" fill="none" stroke-linecap="round" />
              <path d="M400 550 Q400 450 400 310" stroke="#d3c7b8" stroke-width="2" stroke-dasharray="20,20" fill="none" />
              
              <circle cx="550" cy="200" r="40" fill="#3e5e41" opacity="0.6" />
              <path d="M550 170 Q560 185 550 200 Q540 185 550 170" fill="#567b57" />
              <path d="M545 200 Q555 215 545 230 Q535 215 545 200" fill="#567b57" />
              <ellipse cx="550" cy="240" rx="20" ry="10" fill="#3e5e41" />
              
              <path d="M410 270 Q480 235 550 200" stroke="#8b7560" stroke-width="5" fill="none" />
              <path d="M410 270 Q480 235 550 200" stroke="#d3c7b8" stroke-width="1" stroke-dasharray="5,5" fill="none" />
              
              <circle cx="260" cy="220" r="40" fill="#2e3d2b" opacity="0.5" />
              <rect x="245" y="215" width="30" height="18" rx="3" fill="#4a3d2e" />
              <rect x="252" y="205" width="15" height="10" rx="2" fill="#4a3d2e" />
              <circle cx="250" cy="233" r="5" fill="#1a2a1f" />
              <circle cx="270" cy="233" r="5" fill="#1a2a1f" />
              
              <path d="M370 270 Q315 245 260 220" stroke="#8b7560" stroke-width="5" fill="none" />
              <path d="M370 270 Q315 245 260 220" stroke="#d3c7b8" stroke-width="1" stroke-dasharray="5,5" fill="none" />
              
              <circle cx="300" cy="400" r="40" fill="#2e3d2b" opacity="0.5" />
              <polygon points="300,390 292,400 308,400" fill="#6b5644" />
              <path d="M296 390 Q300 380 304 390 Q307 383 310 390 Q304 380 296 390" fill="#e67e22" />
              <path d="M298 388 Q300 380 302 388 Q304 384 306 388 Q302 380 298 388" fill="#f39c12" />
              <rect x="280" y="410" width="15" height="5" rx="2" fill="#6b5644" />
              <rect x="305" y="410" width="15" height="5" rx="2" fill="#6b5644" />
              
              <path d="M380 310 Q340 355 300 400" stroke="#8b7560" stroke-width="5" fill="none" />
              <path d="M380 310 Q340 355 300 400" stroke="#d3c7b8" stroke-width="1" stroke-dasharray="5,5" fill="none" />
              
              <circle cx="500" cy="400" r="40" fill="#2e3d2b" opacity="0.5" />
              <rect x="485" y="390" width="30" height="15" rx="2" fill="#4a3d2e" />
              <circle cx="492" cy="398" r="4" fill="#1a2a1f" />
              <circle cx="508" cy="398" r="4" fill="#1a2a1f" />
              <rect x="495" y="385" width="10" height="10" fill="#6b5644" />
              <path d="M488 382 Q500 377 512 382" stroke="#1a2a1f" stroke-width="2" fill="none" />
              <rect x="485" y="410" width="30" height="20" rx="2" fill="#2e3d2b" opacity="0.7" />
              
              <path d="M420 310 Q460 355 500 400" stroke="#8b7560" stroke-width="5" fill="none" />
              <path d="M420 310 Q460 355 500 400" stroke="#d3c7b8" stroke-width="1" stroke-dasharray="5,5" fill="none" />
              
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
              
              <path d="M260 220 Q230 180 200 130 Q150 100 100 150 Q80 200 120 250" stroke="#8b7560" stroke-width="3" stroke-dasharray="5,5" fill="none" />
              <text x="150" cy="150" font-family="Arial" font-size="10" fill="#d3c7b8" transform="rotate(-20,150,150)">Safari Route</text>
              
              <circle cx="100" cy="100" r="30" fill="#2e3d2b" stroke="#8b7560" stroke-width="2" />
              <path d="M100 70 L100 130" stroke="#8b7560" stroke-width="2" />
              <path d="M70 100 L130 100" stroke="#8b7560" stroke-width="2" />
              <polygon points="100,75 105,95 100,90 95,95" fill="#8b7560" />
              <text x="98" y="85" font-family="Arial" font-size="12" fill="#d3c7b8">N</text>
              <text x="115" y="103" font-family="Arial" font-size="12" fill="#d3c7b8">E</text>
              <text x="98" y="123" font-family="Arial" font-size="12" fill="#d3c7b8">S</text>
              <text x="77" y="103" font-family="Arial" font-size="12" fill="#d3c7b8">W</text>
              
              <rect x="50" y="500" width="180" height="80" fill="#2e3d2b" fill-opacity="0.8" rx="5" ry="5" stroke="#8b7560" stroke-width="2" />
              <text x="60" y="520" font-family="Arial" font-size="12" font-weight="bold" fill="#d3c7b8">RESORT ACTIVITY MAP</text>
              
              <line x1="60" y1="535" x2="80" y2="535" stroke="#8b7560" stroke-width="4" />
              <text x="90" y="539" font-family="Arial" font-size="10" fill="#d3c7b8">Main Road</text>
              
              <line x1="60" y1="550" x2="80" y2="550" stroke="#8b7560" stroke-width="2" />
              <text x="90" y="554" font-family="Arial" font-size="10" fill="#d3c7b8">Activity Path</text>
              
              <circle cx="65" cy="565" r="5" fill="#4a6b4d" />
              <text x="75" y="568" font-family="Arial" font-size="10" fill="#d3c7b8">Forest Area</text>
              
              <text x="550" y="185" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3c7b8">PRIVATE WATERFALL</text>
              <text x="260" y="205" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3c7b8">JEEP SAFARI</text>
              <text x="300" y="385" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3c7b8">CAMP FIRE</text>
              <text x="500" y="385" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3c7b8">DJ MUSIC</text>
              <text x="400" y="320" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#d3c7b8">MAIN LODGE</text>
              
              <rect x="600" y="100" width="180" height="100" fill="#2e3d2b" fill-opacity="0.8" rx="5" ry="5" stroke="#8b7560" stroke-width="2" />
              <text x="690" y="120" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#d3c7b8">ACTIVITY SCHEDULE</text>
              <text x="610" y="140" font-family="Arial" font-size="10" fill="#d3c7b8">🌄 Jeep Safari: 5:30 AM - 8:00 AM</text>
              <text x="610" y="155" font-family="Arial" font-size="10" fill="#d3c7b8">💦 Private Waterfall: 10:00 AM - 1:00 PM</text>
              <text x="610" y="170" font-family="Arial" font-size="10" fill="#d3c7b8">🔥 Camp Fire: 6:00 PM - 8:00 PM</text>
              <text x="610" y="185" font-family="Arial" font-size="10" fill="#d3c7b8">🎵 DJ Music: 9:00 PM - 12:00 AM</text>
              
              <line x1="650" y1="550" x2="750" y2="550" stroke="#8b7560" stroke-width="2" />
              <line x1="650" y1="545" x2="650" y2="555" stroke="#8b7560" stroke-width="2" />
              <line x1="700" y1="545" x2="700" y2="555" stroke="#8b7560" stroke-width="2" />
              <line x1="750" y1="545" x2="750" y2="555" stroke="#8b7560" stroke-width="2" />
              <text x="690" y="540" font-family="Arial" font-size="10" text-anchor="middle" fill="#d3c7b8">100 m</text>
              <text x="740" y="540" font-family="Arial" font-size="10" text-anchor="middle" fill="#d3c7b8">200 m</text>
              
              <rect x="250" y="30" width="300" height="60" fill="#2e3d2b" fill-opacity="0.9" rx="10" ry="10" stroke="#8b7560" stroke-width="2" />
              <text x="400" y="60" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#d3c7b8">HILL PARADISE RESORT</text>
              <text x="400" y="80" font-family="Arial" font-size="14" text-anchor="middle" fill="#d3c7b8">Adventure Activities Map</text>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section className="py-12 md:py-16 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-amber-100 mb-4 tracking-wide">Awards & Recognition</h2>
            <p className="text-base sm:text-lg text-amber-200 max-w-3xl mx-auto leading-relaxed">
              Honored by industry leaders for our dedication to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Five-Star Rating - Global Luxury Travel Guide",
              "Best Luxury Resort - World Travel Awards",
              "Sustainable Tourism Excellence Award",
              "Top 10 Beachfront Resorts - Luxury Travel Magazine"
            ].map((award, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-emerald-700/30 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/20">
                <div className="text-emerald-400 mb-4">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-center font-medium text-amber-200">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;