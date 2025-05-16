import React, { useState, useEffect, useRef } from 'react';

const PackageCard = ({ title, description, image, isActive }) => (
  <div className={`relative rounded-xl overflow-hidden transition-all duration-500 ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'}`}>
    <img 
      src={image} 
      alt={title} 
      className="w-full h-64 md:h-80 object-cover brightness-75 hover:brightness-90 transition-all duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{description}</p>
      <button className="self-start bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
        View Details
      </button>
    </div>
  </div>
);

const PackagePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const carouselRef = useRef(null);
  
  const packageItems = [
    {
      title: "Mud House Stay",
      description: "Experience authentic rural living in our traditional mud houses with modern comforts.",
      image: "/src/assets/images/mudhouse2.jpeg"
    },
    {
      title: "Off-Road Jeep Safari",
      description: "2km thrilling adventure through rugged terrain and breathtaking landscapes.",
      image: "/src/assets/images/ofroadjeefsafari.jpeg"
    },
    {
      title: "View Point Trekking",
      description: "Guided trek to panoramic viewpoints with spectacular scenery.",
      image: "/src/assets/images/trekking.jpeg"
    },
      {
      title: "Sliding Water Falls",
      description: "Perfect for scenic views and thrilling slides, they’re often found in lush, eroded landscapes.",
      image: "/src/assets/images/guestatwaterfall.jpeg"
    },
         {
      title: "Fire Camp",
      description: "The Fire Camp at Hill Paradise offers a thrilling evening under the stars with cozy campfires and guided nature activities.",
      image: "/src/assets/images/firecamp.jpeg"
    }
  ];

  const packageDetails = [
    { time: "2:00 PM", activity: "Check In" },
    { time: "3:00 PM", activity: "Welcome Drink" },
    { time: "4:00 PM", activity: "Sliding Waterfalls Visit" },
    { time: "8:00 PM", activity: "Night Dinner (Non-VEG)" },
    { time: "8:00-10:00 PM", activity: "Camp Fire" },
    { time: "Overnight", activity: "Mud-House Stay" },
    { time: "8:00 AM", activity: "Morning Breakfast" },
    { time: "9:00 AM", activity: "View Point Trekking" },
    { time: "10:00 AM", activity: "Off-Road Jeep Safari (2 Kms)" },
    { time: "11:00 AM", activity: "Check Out" }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => 
        prev === packageItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev === packageItems.length - 1 ? 0 : prev + 1
    );
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 ? packageItems.length - 1 : prev - 1
    );
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-teal-900/70 to-gray-900/90 z-10" />
        <img 
          src="\src\assets\images\IMG_5799.JPG"
          alt="Adventure background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Nature Adventure Package
          </h1>
          <div className="bg-teal-600/90 inline-block px-6 py-2 rounded-full text-xl font-medium mb-6">
            Only ₹1500/- per person
          </div>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Experience the perfect blend of adventure and relaxation in the heart of Idukki's wilderness
          </p>
        </div>
      </div>
      
      {/* 3D Carousel Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Package Highlights
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="relative h-[500px] perspective-1000">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Carousel Items */}
            <div 
              ref={carouselRef}
              className="relative w-full h-full flex items-center justify-center"
            >
              {packageItems.map((item, index) => {        
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % packageItems.length;
                const isPrev = index === (currentIndex - 1 + packageItems.length) % packageItems.length;
                
                let transform = '';
                let zIndex = 0;
                let opacity = 0.5;
                
                if (isActive) {
                  transform = 'translateX(0) scale(1)';
                  zIndex = 10;
                  opacity = 1;
                } else if (isNext) {
                  transform = 'translateX(30%) scale(0.9)';
                  zIndex = 5;
                  opacity = 0.8;
                } else if (isPrev) {
                  transform = 'translateX(-30%) scale(0.9)';
                  zIndex = 5;
                  opacity = 0.8;
                } else {
                  transform = 'translateX(0) scale(0.7)';
                  opacity = 0.3;
                }
                
                return (
                  <div
                    key={index}
                    className={`absolute w-3/4 md:w-2/3 transition-all duration-700 ease-in-out`}
                    style={{
                      transform: transform,
                      zIndex: zIndex,
                      opacity: opacity
                    }}
                  >
                    <PackageCard 
                      {...item} 
                      isActive={isActive}
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {packageItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoRotating(false);
                    setTimeout(() => setIsAutoRotating(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-teal-500 w-6' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Package Itinerary
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Package Itinerary</h2>
            <p className="text-xl text-teal-200 max-w-3xl mx-auto">
              Your adventure schedule from check-in to check-out
            </p>
          </div>
          
          <div className="bg-gray-700 rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-teal-700 text-white text-left font-bold">Time</th>
                    <th className="py-4 px-6 bg-teal-700 text-white text-left font-bold">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {packageDetails.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
                      <td className="py-3 px-6 text-teal-400 font-medium">{item.time}</td>
                      <td className="py-3 px-6 text-white">{item.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}
      {/* Package Itinerary - Roadmap Style */}
<section className="py-16 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-serif font-bold text-white mb-4">Package Itinerary</h2>
      <p className="text-xl text-teal-200 max-w-3xl mx-auto">
        Your adventure schedule from check-in to check-out
      </p>
    </div>
    
    <div className="bg-gray-700/50 rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto p-6 md:p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-teal-400 mb-2">ADVENTURE ACTIVITY MAP</h3>
        <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full transition-all duration-300 inline-flex items-center">
          Join here
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
      
      <div className="border-l-4 border-teal-500 pl-6 ml-4 py-4 space-y-8">
        <div>
          <h4 className="text-lg font-bold text-white mb-3">ACTIVITY SCHEDULE</h4>
          <div className="space-y-4">
            {packageDetails.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-teal-500 border-4 border-gray-800 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-start">
                    <div className="text-teal-400 font-medium">{item.time}</div>
                    <div className="text-white ml-4">{item.activity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
       
        <div className="pt-4">
          <div className="bg-gray-800 rounded-lg p-4 shadow-md flex items-center">
            <div className="bg-teal-500 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">CARRY!</h4>
              <p className="text-gray-300">Remember to bring comfortable shoes, water bottles, and cameras.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <span className="inline-block bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">NEW!</span>
      </div>
    </div>
  </div>
</section>
      
      {/* Booking Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-teal-700 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Ready for Adventure?</h2>
                <p className="text-xl text-teal-100 mb-6">
                  Book your Nature Adventure Package today and experience the best of Idukki's wilderness.
                </p>
                <div className="text-4xl font-bold text-white mb-6">₹1500/- per person</div>
                <div className="space-y-2 text-teal-100">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Includes all activities listed
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Non-vegetarian dinner included
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Morning breakfast provided
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Contact for Booking</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white">8848356964</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white">9446449526</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-teal-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-white">
                      No 841, Oilavayal, Keezhanthoor,<br />
                      Kanthallur, Idukki-685620
                    </span>
                  </div>
                </div>
                <button className="mt-8 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium">
                  WhatsApp Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagePage;