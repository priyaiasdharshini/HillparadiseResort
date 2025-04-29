import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Elegant Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/loordhujeyakumar-cloudinary/video/upload/f_auto:video,q_auto/v3cvjpzq31xduousvhnk" type="video/mp4" />
          <img 
            src="/images/resort-hero-fallback.jpg" 
            alt="Luxury resort backdrop" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Hero content - centered with better spacing */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <div className={`max-w-4xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span className="block">Discover</span>
            <span className="text-teal-300">Paradise</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled luxury where pristine beaches meet world-class service and accommodations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/rooms" 
              className="inline-flex items-center justify-center bg-white text-teal-900 hover:bg-teal-50 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[180px]"
            >
              View Rooms
            </Link>
            <Link 
              to="/experience" 
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/20 text-white border border-white py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[180px]"
            >
              Experiences
            </Link>
          </div>
        </div>
      </div>
      
      {/* Redesigned scrolling indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-white text-sm uppercase tracking-widest opacity-80 mb-2">Explore</span>
          <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center">
            <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Single feature component with hover effect
const Feature = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px] group">
    <div className="w-16 h-16 mb-6 text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Room card with improved visuals
const RoomCard = ({ name, description, price, image, highlight }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-xl group">
    <div className="relative h-72 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      
      {highlight && (
        <div className="absolute top-4 right-4 bg-white text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {highlight}
        </div>
      )}
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
          {price}
        </span>
      </div>
      <p className="text-gray-600 mb-5 text-sm">{description}</p>
      <Link 
        to="/rooms" 
        className="inline-flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg transition-all duration-300"
      >
        <span>Explore</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </div>
);

// Testimonial card with improved design
const TestimonialCard = ({ quote, author, location, rating, avatar }) => (
  <div className="bg-white rounded-xl p-8 shadow-xl relative">
    <div className="flex mb-6">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    
    <p className="text-gray-700 mb-8 text-lg font-light italic">"{quote}"</p>
    
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={avatar} alt={author} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-bold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
    
    <div className="absolute top-8 right-8 text-teal-200 opacity-20">
      <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
  </div>
);

const Home = () => {
  const [isIntersecting, setIsIntersecting] = useState({
    features: false,
    accommodations: false,
    testimonials: false,
    cta: false
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.25,
      rootMargin: "0px"
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersecting(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['features', 'accommodations', 'testimonials', 'cta'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden bg-gray-50">
      <Hero />
      
      {/* Features section - minimalist with animation */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block text-teal-600 text-sm font-semibold mb-4 uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Exceptional Experiences
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Paradise Resort is the ultimate luxury destination for discerning travelers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Breathtaking Location",
                description: "Set in a pristine location with panoramic ocean views and private beaches for the ultimate escape.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Luxury Accommodations",
                description: "Exquisitely designed rooms and suites with premium amenities and stunning views for ultimate comfort.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              {
                title: "World-Class Dining",
                description: "Experience culinary excellence with our renowned chefs creating unforgettable gastronomic journeys.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`transition-all duration-1000 delay-${index * 200} ${isIntersecting.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <Feature {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Accommodations with improved visual hierarchy */}
      <section id="accommodations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-1000 ${isIntersecting.accommodations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="md:max-w-2xl mb-8 md:mb-0">
              <span className="inline-block text-teal-600 text-sm font-semibold mb-4 uppercase tracking-wider">Luxury Accommodations</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Your Perfect Escape
              </h2>
              <div className="w-24 h-1 bg-teal-500 mb-6"></div>
              <p className="text-xl text-gray-600">
                Find your ideal sanctuary from our collection of exquisite rooms and suites
              </p>
            </div>
            <Link 
              to="/rooms" 
              className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors duration-300 self-start md:self-auto"
            >
              <span className="font-medium">View All Accommodations</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ocean Suite',
                description: 'Luxurious suite with panoramic ocean views, private balcony, and premium amenities.',
                price: 'From $399/night',
                image: '/src/assets/images/pic5.jpg',
                highlight: 'BESTSELLER'
              },
              {
                name: 'Garden Villa',
                description: 'Secluded villa surrounded by lush tropical gardens with private plunge pool.',
                price: 'From $599/night',
                image: 'src/assets/images/images-1.PNG',
                highlight: 'NEW'
              },
              {
                name: 'Presidential Suite',
                description: 'Ultimate luxury experience with private pool, butler service, and panoramic views.',
                price: 'From $999/night',
                image: '/src/assets/images/ungasan_ocean-view-plunge-pool_villa-chintamani_rgb-1.jpg',
                highlight: 'EXCLUSIVE'
              }
            ].map((room, index) => (
              <div 
                key={index} 
                className={`transition-all duration-1000 delay-${index * 200} ${isIntersecting.accommodations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <RoomCard {...room} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials with improved design */}
      <section id="testimonials" className="py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block text-teal-600 text-sm font-semibold mb-4 uppercase tracking-wider">Guest Stories</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Memorable Experiences
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our valued guests have to say about their stay at Paradise Resort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Our stay exceeded all expectations. The attention to detail and personalized service made us feel like royalty.",
                author: "Stephen Raj",
                location: "Chennai, Tamil Nadu",
                rating: 5,
                avatar: "/avatars/avatar-1.jpg"
              },
              {
                quote: "Paradise Resort truly lives up to its name. The breathtaking views and world-class amenities created an unforgettable experience.",
                author: "Mariyam John",
                location: "Kakkanad, Kerala",
                rating: 5,
                avatar: "/avatars/avatar-2.jpg"
              },
              {
                quote: "From the culinary delights to the spa treatments, every moment at Paradise Resort was pure bliss. We're already planning our return.",
                author: "Shibuna",
                location: "Tirunelveli, Tamil Nadu",
                rating: 5,
                avatar: "/avatars/avatar-3.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`transition-all duration-1000 delay-${index * 200} ${isIntersecting.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section with improved design */}
      <section id="cta" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${isIntersecting.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img 
                  src="\src\assets\images\beautiful-nature-scenery-free-photo-2210x1473.jpg" 
                  alt="Resort view" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 px-6 py-4 rounded-lg shadow-lg transform rotate-3">
                    <span className="text-teal-800 font-bold text-lg">Limited Time Offer</span>
                  </div>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Book Your Escape Today
                </h2>
                <p className="text-teal-100 mb-8 text-lg">
                  Take advantage of our exclusive offers and start planning your perfect getaway at Paradise Resort.
                </p>
                <div className="space-y-4 md:flex md:space-y-0 md:space-x-4">
                  <Link 
                    to="/book" 
                    className="block w-full md:w-auto text-center bg-white hover:bg-gray-100 text-teal-900 py-4 px-8 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                  >
                    Book Now
                  </Link>
                  <Link 
                    to="/offers" 
                    className="block w-full md:w-auto text-center bg-transparent hover:bg-white/20 text-white border border-white py-4 px-8 rounded-lg font-semibold transition-all duration-300"
                  >
                    View Offers
                  </Link>
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