import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Keyframes for Ken Burns and slow zoom animations
const kenBurnsStyle = `
  @keyframes kenBurns {
    0% {
      transform: scale(1.0) translate(0px, 0px);
    }
    25% {
      transform: scale(1.1) translate(-10px, 10px);
    }
    50% {
      transform: scale(1.15) translate(10px, -10px);
    }
    75% {
      transform: scale(1.1) translate(-10px, -10px);
    }
    100% {
      transform: scale(1.2) translate(0px, 0px);
    }
  }
  
  @keyframes slowZoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      image:
        '/src/assets/images/rooms1.JPG',
      title: 'Discover Hill Paradise',
      subtitle: 'Where luxury meets natural beauty',
    },
    {
      image:
        '/src/assets/images/rooms2.JPG',
      title: 'Unforgettable Experiences',
      subtitle: 'Create memories that last a lifetime',
    },
    {
      image:
        '/src/assets/images/rooms3.JPG',
      title: 'Exclusive Retreat At Hill Paradise',
      subtitle: 'Your private sanctuary awaits',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-950">
      {/* Add style tag for animations */}
      <style dangerouslySetInnerHTML={{ __html: kenBurnsStyle }} />
      {/* Enhanced Background Image Slideshow with Ken Burns Effect */}
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gray-900/30 z-10" />
            <div
              className="w-full h-full bg-cover bg-center animate-ken-burns"
              style={{
                backgroundImage: `url(${slide.image})`,
                animation: `kenBurns 20s ease-in-out infinite alternate ${index * 5}s`,
              }}
            ></div>
          </div>
        ))}
      </div>

   

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col pt-20 pb-16 md:pt-24">
        {/* Center content */}
        <div className="flex-grow flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-4xl w-full text-center">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-100 mb-4 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 font-light">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/rooms"
                  className="bg-teal-500 hover:bg-teal-600 text-gray-100 py-2 px-6 sm:px-8 rounded-md text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Book Now
                </Link>
                <Link
                  to="/rooms"
                  className="bg-transparent hover:bg-teal-900/20 text-gray-100 border border-gray-300 py-2 px-6 sm:px-8 rounded-md text-base sm:text-lg font-medium transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
                >
                  Explore Experiences
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Booking bar */}
        <div className="px-4 sm:px-6 mt-8 md:mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900/30 backdrop-blur-md rounded-xl p-4 md:p-6 border border-gray-700/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <div className="flex items-center text-gray-100 mb-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                    </svg>
                    <span>Check-in</span>
                  </div>
                  <input
                    type="date"
                    className="w-full bg-gray-900/20 rounded-lg p-3 text-gray-100 border border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <div className="flex items-center text-gray-100 mb-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                    </svg>
                    <span>Check-out</span>
                  </div>
                  <input
                    type="date"
                    className="w-full bg-gray-900/20 rounded-lg p-3 text-gray-100 border border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <div className="flex items-center text-gray-100 mb-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Guests</span>
                  </div>
                  <select
                    className="w-full bg-gray-900/20 rounded-lg p-3 text-gray-100 border border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">2 Adults, 1 Child</option>
                    <option value="4">2 Adults, 2 Children</option>
                  </select>
                  <svg
                    className="absolute right-3 bottom-3 w-5 h-5 text-gray-100 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-teal-500 hover:bg-teal-600 text-gray-100 py-3 px-4 rounded-lg transition-colors duration-300 font-medium flex items-center justify-center">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="animate-bounce bg-gray-900/30 backdrop-blur-sm rounded-full p-2 hover:bg-gray-900/50 transition-colors duration-300"
            aria-label="Scroll to content"
          >
            <svg
              className="w-6 h-6 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider navigation */}
      <div className="absolute bottom-24 right-4 sm:right-8 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-gray-100 w-6' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Feature = ({ title, description, icon }) => (
  <div className="relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-teal-500/30 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-teal-500/20">
    <div className="text-teal-400 mb-4 transform transition-transform duration-300 hover:scale-110">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-white tracking-wide">{title}</h3>
    <p className="text-gray-200 leading-relaxed">{description}</p>
    <div className="absolute inset-0 bg-teal-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
  </div>
);

const Home = () => {
  return (
    <div className="bg-gray-950 text-gray-100">
      <EnhancedHero />

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Why Hill Paradise Resort Stands Out
            </h2>
            <p className="text-xl text-teal-200 max-w-3xl mx-auto leading-relaxed">
              Unmatched luxury and exceptional service await you in our tropical haven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              title="Exquisite Accommodations"
              description="Unwind in our meticulously designed rooms with panoramic views."
              icon={
                <svg
                  className="w-14 h-14"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
            />
            <Feature
              title="Culinary Excellence"
              description="Delight in gourmet dishes crafted from the finest local ingredients."
              icon={
                <svg
                  className="w-14 h-14"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M6 11h12M4 14h16M5 17h14" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                </svg>
              }
            />
            <Feature
              title="Spa & Serenity"
              description="Rejuvenate with bespoke treatments in our tranquil spa sanctuary."
              icon={
                <svg
                  className="w-14 h-14"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Highlighted Rooms */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(20,_184,_166,_0.1),_transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Signature Accommodations
            </h2>
            <p className="text-xl text-teal-200 max-w-3xl mx-auto leading-relaxed">
              Explore our curated selection of rooms and suites for an unforgettable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Clay Haven',
                description: 'Elegant Mudhouse with mesmerizing Nature vistas and premium comforts.',
                price: 'From 1500 per night',
                image:
                  '/src/assets/images/rooms1.JPG',
              },
              {
                name: 'Mudhouse Paradise',
                description: 'A serene retreat surrounded by lush tropical gardens.',
                price: 'From 1500 per night',
                image:
                  '/src/assets/images/rooms2.JPG',
              },
              {
                name: 'Presidential Villa',
                description: 'Unparalleled nature with a private WaterFall and sweeping views.',
                price: 'From 1500 per night',
                image:
                  '/src/assets/images/rooms3.JPG',
              },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-teal-500/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-teal-500/30"
              >
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white tracking-wide">{room.name}</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{room.description}</p>
                  <p className="text-teal-400 font-medium mb-4">{room.price}</p>
                  <Link
                    to="/rooms"
                    className="block text-center bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-block bg-gray-800 text-teal-400 hover:bg-gray-700 py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 border border-teal-400 transform hover:scale-105"
            >
              View All Accommodations
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Guest Experiences
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Hear from our guests about their unforgettable stays at Paradise Resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "An extraordinary experience! The staff's dedication made our stay truly magical.",
                author: 'Johana',
                location: 'Munnar, Kerala',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
              },
              {
                quote: 'Beyond our wildest dreams. The views and amenities are simply spectacular.',
                author: 'John Mathew',
                location: 'Kochin, Kerala',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
              },
              {
                quote: 'Felt like royalty from start to finish. The service and attention to detail are unmatched.',
                author: 'Malathy',
                location: 'Tirunelveli, Tamilnadu',
                avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-teal-800/50 rounded-2xl p-6 shadow-xl border border-teal-600/30 transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-teal-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-6 italic text-white leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-teal-400"
                  />
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-teal-300">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-teal-900 rounded-2xl shadow-2xl overflow-hidden border border-teal-500/30">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/src/assets/images/IMG_5793.JPG"
                  alt="Resort view"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">
                    Plan Your Luxury Escape Now
                  </h2>
                  <p className="text-lg text-teal-200 mb-8 leading-relaxed">
                    Secure exclusive offers and create memories that last a lifetime.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/rooms"
                      className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;