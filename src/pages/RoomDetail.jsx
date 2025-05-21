import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Room database - in a real application this would come from your backend
const accommodationsData = [
  {
    id: 'clay-haven',
    name: 'Mudhouse - Clay Haven',
    type: 'mudhouse',
    description: 'Reflects the natural, grounding feel of mud architecture, offering an authentic, eco-conscious stay immersed in the serene beauty of the hills.',
    longDescription: 'Experience the timeless comfort of our Clay Haven mudhouse, where ancient building techniques meet modern amenities. This eco-friendly accommodation keeps cool in summer and warm in winter through its natural thermal properties. Handcrafted by local artisans using traditional methods, the walls are a blend of local clay, sand, and natural fibers creating a uniquely peaceful atmosphere that connects you to the surrounding landscape.',
    features: ['Nature view', 'Private balcony', 'Mudhouse', 'Sunset'],
    amenities: [
      { name: 'En-suite bathroom', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7m-4-4h18M7 7h10M7 11h10M7 15h10' },
      { name: 'Eco-friendly materials', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
      { name: 'Natural cooling', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
      { name: 'Wi-Fi available', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.143 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0' }
    ],
    additionalInfo: 'Our Clay Haven room is built from local mud and designed following sustainable principles, providing a perfect connection to nature.',
    price: 199,
    capacity: '2 Adults',
    size: '400 sq ft',
    bedType: 'Queen Size Bed',
    image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms1_jyorah.jpg',
    gallery: [
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms1_jyorah.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/mudhouses_ay8iom.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg'
    ]
  },
  {
    id: 'earth-nest',
    name: 'Mudhouse - Earth Nest',
    type: 'mudhouse',
    description: 'Immerse yourself in nature with our peaceful garden suite retreat.',
    longDescription: 'Nestled amidst lush gardens, the Earth Nest mudhouse offers a serene sanctuary surrounded by mango trees and native plants. This traditional mud dwelling features contemporary conveniences while maintaining authentic charm. Wake up to birdsong and enjoy morning tea on your private patio as you watch the sunrise illuminate the countryside around you.',
    features: ['Garden view', 'Peaceful living area', 'Mango Tree Treat', 'Nature Treat'],
    amenities: [
      { name: 'Garden patio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { name: 'Hammock', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
      { name: 'Outdoor dining', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
      { name: 'Organic toiletries', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' }
    ],
    additionalInfo: 'Earth Nest offers a perfect blend of rustic charm and comfort, with traditional mud construction that keeps the interior naturally cool.',
    price: 179,
    capacity: '2 Adults',
    size: '380 sq ft',
    bedType: 'Queen Size Bed',
    image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms2_gjl9qr.jpg',
    gallery: [
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms2_gjl9qr.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/mudhouses_ay8iom.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg'
    ]
  },
  {
    id: 'presidential-villa',
    name: 'Presidential Villa',
    type: 'rooms',
    description: 'The ultimate luxury experience with private pool and panoramic views.',
    longDescription: 'Our flagship accommodation, the Presidential Villa offers unparalleled luxury and privacy. Featuring a spacious living area, premium furnishings, and breathtaking views of the surrounding landscape, this villa is the epitome of elegance. Enjoy the private waterfall, listen to the soothing sounds of birds, and reconnect with nature without compromising on luxury and comfort.',
    features: ['Private waterfall', 'Nature view', 'Peace', 'Birds Sound'],
    amenities: [
      { name: 'King size bed', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7m-4-4h18M7 7h10M7 11h10M7 15h10' },
      { name: 'Private waterfall', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
      { name: 'Premium toiletries', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
      { name: 'Nature sounds', icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' }
    ],
    additionalInfo: 'The Presidential Villa offers our most exclusive experience with personalized service and premium amenities.',
    price: 399,
    capacity: '2 Adults',
    size: '850 sq ft',
    bedType: 'King Size Bed',
    image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms5_tw9h7u.jpg',
    gallery: [
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms5_tw9h7u.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms3_zhtdic.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg'
    ]
  },
  {
    id: 'clay-paradise',
    name: 'Mudhouse - Clay Paradise',
    type: 'mudhouse',
    description: 'Perfect for families with spacious accommodations and convenient amenities.',
    longDescription: 'Clay Paradise is our family-friendly mudhouse, offering a spacious layout ideal for families seeking an authentic experience without sacrificing comfort. The natural construction creates a peaceful atmosphere where children can connect with nature while parents enjoy well-deserved relaxation. With connecting rooms and family-oriented amenities, this accommodation ensures everyone has their space while staying together.',
    features: ['Connecting rooms', 'Gaming console', 'Children amenities', 'Family dining area'],
    amenities: [
      { name: 'Family space', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { name: 'Kids corner', icon: 'M12 14l9-5-9-5-9 5 9 5z' },
      { name: 'Board games', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
      { name: 'Extra beds', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7m-4-4h18M7 7h10M7 11h10M7 15h10' }
    ],
    additionalInfo: 'Clay Paradise is designed with families in mind, featuring connecting rooms and child-friendly amenities.',
    price: 249,
    capacity: '4 People (2 Adults + 2 Children)',
    size: '550 sq ft',
    bedType: 'Queen Size Bed + 2 Single Beds',
    image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/mudhouses_ay8iom.jpg',
    gallery: [
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/mudhouses_ay8iom.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms1_jyorah.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg'
    ]
  },
  {
    id: 'mango-house',
    name: 'Mango House',
    type: 'rooms',
    description: 'Steps from the sand with exclusive beach access and luxurious accommodations.',
    longDescription: 'Located in a serene corner of our property, Mango House offers a unique stay under the shade of ancient mango trees. This spacious room combines rustic charm with modern comforts, featuring an outdoor dining area where you can enjoy meals surrounded by nature. With direct access to walking trails and a private chef available on request, Mango House provides a truly immersive natural experience.',
    features: ['Direct beach access', 'Private pool', 'Outdoor dining area', 'Personal chef available'],
    amenities: [
      { name: 'Private dining', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
      { name: 'Chef on request', icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { name: 'Natural setting', icon: 'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' },
      { name: 'Walking trails', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
    ],
    additionalInfo: 'Mango House gets its name from the ancient mango trees surrounding it, providing natural shade and a unique ambiance.',
    price: 299,
    capacity: '2 Adults',
    size: '500 sq ft',
    bedType: 'King Size Bed',
    image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms3_zhtdic.jpg',
    gallery: [
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms3_zhtdic.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms5_tw9h7u.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg'
    ]
  },
  {
    id: 'tree-house',
    name: 'Tree House',
    type: 'tree house',
    description: 'Enjoy breathtaking mountain views from this well-appointed room.',
    longDescription: 'Perched among the branches of an ancient tree, our Tree House offers a truly unique stay experience. This handcrafted wooden dwelling combines rustic charm with essential comforts, featuring a wraparound balcony where you can observe wildlife and enjoy panoramic views. Fall asleep to the gentle rustling of leaves and wake up to birdsong in this remarkable accommodation that brings you closer to nature.',
    features: ['Mountain views', 'Green Sight', 'Nature leaf fall', 'Wood Steps'],
    amenities: [
      { name: 'Elevated views', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { name: 'Eco-bathroom', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7m-4-4h18M7 7h10M7 11h10M7 15h10' },
      { name: 'Sunset viewpoint', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { name: 'Birdwatching', icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' }
    ],
    additionalInfo: 'Our Tree House is built using sustainable practices and offers a unique opportunity to stay among the treetops.',
    price: 349,
    capacity: '2 Adults',
    size: '300 sq ft',
    bedType: 'Queen Size Bed',
    image: 'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/treehouse_dfnno4.jpg',
    gallery: [
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/treehouse_dfnno4.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/rooms2_gjl9qr.jpg',
      'https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg'
    ]
  }
];

const RoomDetail = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundRoom = accommodationsData.find(room => room.id === roomId);
    
    // Simulate loading
    setTimeout(() => {
      setRoom(foundRoom);
      setLoading(false);
    }, 500);
  }, [roomId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-white">Loading room details...</p>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Room Not Found</h2>
        <p className="text-gray-300 mb-8">We couldn't find the room you're looking for.</p>
        <Link
          to="/rooms"
          className="bg-teal-600 hover:bg-teal-500 text-white py-2 px-6 rounded-md transition-colors duration-300"
        >
          Return to Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-400">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <svg className="h-4 w-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <Link to="/rooms" className="hover:text-teal-400">Rooms</Link>
          <svg className="h-4 w-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-teal-400">{room.name}</span>
        </div>
      </div>

      {/* Room Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Image */}
          <div className="relative h-72 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src={room.gallery[activeImage]} 
              alt={room.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Room Information */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="bg-emerald-600/90 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-md inline-block mb-4">
              {room.type}
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              {room.name}
            </h1>
            
            <p className="text-gray-300 mb-6">
              {room.longDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <span className="text-teal-400 text-sm font-medium block mb-1">Price per night</span>
                <span className="text-white text-xl font-bold">${room.price}</span>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <span className="text-teal-400 text-sm font-medium block mb-1">Size</span>
                <span className="text-white">{room.size}</span>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <span className="text-teal-400 text-sm font-medium block mb-1">Capacity</span>
                <span className="text-white">{room.capacity}</span>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <span className="text-teal-400 text-sm font-medium block mb-1">Bed Type</span>
                <span className="text-white">{room.bedType}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                to="/contact"
                className="bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-lg font-bold transition-colors duration-300 inline-block w-full text-center"
              >
                Book This Room
              </Link>
            </div>
          </div>
        </div>
        
        {/* Thumbnail Gallery */}
        <div className="mt-6 flex space-x-4 overflow-x-auto pb-4 snap-x">
          {room.gallery.map((image, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-24 sm:w-32 h-20 rounded-lg overflow-hidden snap-start cursor-pointer transition-all duration-300 ${activeImage === index ? 'ring-2 ring-teal-500 scale-105' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => setActiveImage(index)}
            >
              <img src={image} alt={`${room.name} - view ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Features and Amenities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Room Features</h2>
            <div className="grid grid-cols-2 gap-4">
              {room.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Amenities */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Amenities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg 
                    className="flex-shrink-0 w-6 h-6 text-teal-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d={amenity.icon} 
                    />
                  </svg>
                  <div>
                    <h3 className="text-white font-medium">{amenity.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Additional Information</h2>
          <p className="text-gray-300 mb-6">{room.additionalInfo}</p>
          
          <div className="mt-6">
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-lg font-bold transition-colors duration-300 inline-block"
            >
              Contact Us for More Details
            </Link>
          </div>
        </div>
      </div>

      {/* Related Rooms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">You May Also Like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodationsData
            .filter(r => r.id !== room.id && r.type === room.type)
            .slice(0, 3)
            .map(relatedRoom => (
              <div key={relatedRoom.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 transition-transform duration-300 hover:scale-105">
                <Link to={`/rooms/${relatedRoom.id}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedRoom.image} 
                      alt={relatedRoom.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{relatedRoom.name}</h3>
                      <span className="text-teal-400 font-bold">${relatedRoom.price}</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{relatedRoom.description}</p>
                    
                    <div className="flex items-center text-teal-400 text-sm">
                      <span>View Details</span>
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;