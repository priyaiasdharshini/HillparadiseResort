import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'mudhouse', 'rooms', 'tree house'];
  
  const accommodations = [
    {
      name: 'Mudhouse - Clay Haven',
      type: 'mudhouse',
      description: 'Reflects the natural, grounding feel of mud architecture, offering an authentic, eco-conscious stay immersed in the serene beauty of the hills.',
      features: ['Nature view', 'Private balcony', 'Mudhouse', 'Sunset'],
      image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms1_jyorah.jpg'
    },
    {
      name: 'Mudhouse - Earth Nest',
      type: 'mudhouse',
      description: 'Immerse yourself in nature with our peaceful garden suite retreat.',
      features: ['Garden view', 'Peaceful living area', 'Mango Tree Treat', 'Nature Treat'],
      image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms2_gjl9qr.jpg'
    },
    {
      name: 'Presidential Villa',
      type: 'rooms',
      description: 'The ultimate luxury experience with private pool and panoramic views.',
      features: ['Private waterfall', 'nature view', 'Peace', 'Birds Sound'],
      image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms5_tw9h7u.jpg'
    },
    {
      name: 'Mudhouse - Clay Paradise',
      type: 'mudhouse',
      description: 'Perfect for families with spacious accommodations and convenient amenities.',
      features: ['Connecting rooms', 'Gaming console', 'Children amenities', 'Family dining area'],
      image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/mudhouses_ay8iom.jpg'
    },
    {
      name: 'Mango House',
      type: 'rooms',
      description: 'Steps from the sand with exclusive beach access and luxurious accommodations.',
      features: ['Direct beach access', 'Private pool', 'Outdoor dining area', 'Personal chef available'],
      image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms3_zhtdic.jpg'
    },
    {
      name: 'Tree House',
      type: 'tree house',
      description: 'Enjoy breathtaking mountain views from this well-appointed room.',
      features: ['Mountain views', 'Green Sight', 'Nature leaf fall', 'Wood Steps'],
      image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/treehouse_dfnno4.jpg'
    }
  ];
  
  const filteredAccommodations = activeFilter === 'all' 
    ? accommodations 
    : accommodations.filter(room => room.type === activeFilter);
  
  // Unified card style for all rooms
  const RoomCard = ({ room }) => {
    return (
      <div className="group relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-500/30 transition-all duration-500 transform hover:-translate-y-2">
        {/* Image with overlay */}
        <div className="absolute inset-0">
          <img 
            src={room.image} 
            alt={room.name} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {/* Room type badge */}
            <div className="bg-emerald-600/90 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-md inline-block mb-3">
              {room.type}
            </div>
            
            {/* Room name */}
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
              {room.name}
            </h3>
            
            {/* Description - hidden until hover */}
            <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {room.description}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {room.features.map((feature, idx) => (
                <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link
              to="/RoomDetail"
              className="mt-4 bg-teal-600 hover:bg-teal-500 text-white py-2 px-4 rounded-md transition-colors duration-300 inline-block transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
            >
              Discover
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative pt-28 pb-16 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-gray-900/80 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            Your Sanctuary <span className="text-teal-400">Awaits</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl leading-relaxed">
            Discover our collection of luxurious accommodations nestled in the heart of nature.
          </p>
        </div>
      </div>
      
      {/* Accommodations */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800 rounded-full p-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-6 py-2 rounded-full capitalize text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Accommodations Grid - Using unified card style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((room, index) => (
              <div key={index}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 tracking-wide">
              The <span className="text-teal-400">Complete</span> Experience
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              Every accommodation includes thoughtful amenities designed for your ultimate comfort and relaxation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-teal-900/30 hover:border-teal-500/40 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-teal-400 mb-5 group-hover:scale-110 transform transition-transform duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h14a2 2 0 012 2v12a4 4 0 01-4 4H7m-4-4v4h18v-4M7 7h10M7 11h10M7 15h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">Bespoke Design</h3>
              <p className="text-gray-300">Each room features unique design elements that blend local culture with modern luxury for an authentic experience.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-teal-900/30 hover:border-teal-500/40 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-teal-400 mb-5 group-hover:scale-110 transform transition-transform duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-11c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7h-3l4 4 4-4h-3c0-4.97-4.03-9-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">Personalized Service</h3>
              <p className="text-gray-300">Our attentive staff anticipates your needs, ensuring a seamless and unforgettable stay tailored to your preferences.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-teal-900/30 hover:border-teal-500/40 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-teal-400 mb-5 group-hover:scale-110 transform transition-transform duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">Immersive Experience</h3>
              <p className="text-gray-300">Connect with nature and local culture through curated experiences that transform your stay into a journey of discovery.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rest of the page remains unchanged */}
      {/* Booking CTA */}
      <section className="py-16 md:py-24 bg-emerald-950 relative">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-gray-900/90 to-emerald-900/80 p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-serif font-bold text-white mb-4 tracking-wide">
                  Begin Your <span className="text-teal-400">Journey</span> Today
                </h2>
                <p className="text-lg text-white mb-0 leading-relaxed">
                  Book your stay now to experience the perfect blend of luxury, nature, and authentic local culture.
                </p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-emerald-900 hover:bg-teal-50 px-8 py-4 rounded-lg font-bold shadow-lg transition-colors duration-300 text-center"
                >
                  Book Your Experience
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600/20 text-teal-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Exclusive Experiences</h3>
              <p className="text-gray-300">Access to unique cultural and adventure activities only available to our guests.</p>
            </div>
            
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600/20 text-teal-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Flexible Booking</h3>
              <p className="text-gray-300">Hassle-free reservation changes and 24/7 support for your peace of mind.</p>
            </div>
            
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600/20 text-teal-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Best Rate Promise</h3>
              <p className="text-gray-300">Guaranteed lowest rates when you book directly through our website.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 tracking-wide">
              Guest <span className="text-teal-400">Stories</span>
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              Authentic experiences shared by those who've called our accommodations home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "MALATHY",
                location: "Tirunelveli, Tamilnadu",
                quote: "The Presidential Villa exceeded all our expectations. The private falls and sun sets were breathtaking, and the staff went above and beyond to make our anniversary special.",
                avatar: "/src/assets/images/lighthouse.jpeg"
              },
              {
                name: "SURAV",
                location: "Kochin, Kerala",
                quote: "Our family had an amazing time in the Family Suite. The children's amenities were thoughtful, and the connecting rooms gave everyone their own space while keeping us together.",
                avatar: "/src/assets/images/tentclient.jpeg"
              },
              {
                name: "MANIRAM",
                location: "Chennai, Tamilnadu",
                quote: "My stay in the Deluxe sun set Room was the perfect escape. Waking up to those stunning views every morning was the highlight of my trip.",
                avatar: "/src/assets/images/trekking.jpeg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-white/5 hover:border-teal-500/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <img className="h-12 w-12 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-teal-400">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other sections remain unchanged */}
    </div>
  );
};

export default Rooms;