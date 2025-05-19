import React, { useState, useEffect, useRef } from 'react';

const ResortGallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const photoCategories = ['all', 'mudhouse', 'rooms', 'activities'];
  const videoCategories = ['all', 'mudhouse', 'rooms', 'activities'];

  const photoItems = [
    { src: '/src/assets/images/rooms1.JPG', category: 'mudhouse', title: 'Traditional Mud House Clay Haven' },
    { src: '/src/assets/images/rooms2.JPG', category: 'mudhouse', title: 'Mud House Interior Suite' },
    { src: '/src/assets/images/mudhouse2.jpeg', category: 'mudhouse', title: 'Mud House Courtyard' },
    { src: '/src/assets/images/IMG_5796.JPG', category: 'rooms', title: 'Deluxe Nature View Room' },
    { src: '/src/assets/images/rooms3.JPG', category: 'rooms', title: 'Presidential Suite' },

    { src: '/src/assets/images/WhatsApp Image 2025-05-15 at 5.09.13 PM.jpeg', category: 'rooms', title: 'Garden Suite' },
    { src: '/src/assets/images/falls.jpeg', category: 'activities', title: 'Waterfall' },
    { src: '/src/assets/images/ofroadjeefsafari.jpeg', category: 'activities', title: 'Nature Hiking Trail' },
    { src: '/src/assets/images/trekking.jpeg', category: 'activities', title: 'View Point Trekking' },
    { src: 'src/assets/images/ofroadjeefsafari.jpeg', category: 'activities', title: 'Off road Safari' },
    { src: '/src/assets/images/guestatwaterfall.jpeg', category: 'activities', title: 'waterfall' },
    { src: '/src/assets/images/firecamp.jpeg', category: 'activities', title: 'FireCamp' },
    { src: '/src/assets/images/tentclient.jpeg', category: 'activities', title: 'tent stay' },
    { src: '/src/assets/images/music dj.jpeg', category: 'activities', title: 'Dj Music' },
    { src: '/src/assets/images/barbeque.jpeg', category: 'activities', title: 'Barbeque' },
    { src: '/src/assets/images/rooms4.jpeg', category: 'rooms', title: 'Nature Treat' },
    { src: '/src/assets/images/rooms5.jpeg', category: 'rooms', title: 'Villa' },
    { src: '/src/assets/images/IMG_5783.JPG', category: 'rooms', title: 'Room' },
    { src: '/src/assets/images/IMG_5784.JPG', category: 'rooms', title: 'Room' },
    { src: '/src/assets/images/tentclient (2).jpeg', category: 'activities', title: 'Tent Stay' }

  ];

  const videoItems = [
    {
      src: '/src/assets/images/IMG_8506.MP4',
      poster: '/images/video-poster.jpg',
      category: 'activities',
      title: 'Resort Aerial View',
      description: 'Beautiful aerial footage of our resort and surrounding nature',
    },
      {
      src: '/src/assets/images/Dji 0333.mp4',
      poster: '/images/video-poster.jpg',
      category: 'mudhouse',
      title: 'Mud house Aerial View',
      description: 'Beautiful aerial footage of our resort and surrounding nature',
    },
    {
      src: '/src/assets/images/trekking video.mp4',
      poster: '/images/trekking-poster.jpg',
      category: 'activities',
      title: 'Nature Trekking',
      description: 'Guided trekking through our scenic nature trails',
    },
    {
      src: '/src/assets/images/Dji 0339.mp4',
      poster: '/images/trekking-poster.jpg',
      category: 'rooms',
      title: 'Mango House',
      description: 'A house under the Naturic Mango Tree',
    },
     {
      src: '/src/assets/images/waterfallslidingvideo.mp4',
      poster: '/images/trekking-poster.jpg',
      category: 'activities',
      title: 'Sliding WaterFall',
      description: 'Sliding waterFall from our Hill paradise Location',
    },
  ];
  const getFilteredItems = () => {
    const items = activeTab === 'photos' ? photoItems : videoItems;
    return activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory);
  };

  const filteredItems = getFilteredItems();

  // Autoplay effect for photos
  useEffect(() => {
    let interval;
    if (activeTab === 'photos' && isAutoplay && !activeLightbox) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [activeTab, isAutoplay, filteredItems.length, activeLightbox]);

  // Reset index when category or tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, activeTab]);

  const openLightbox = (index) => {
    setActiveLightbox(filteredItems[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    // Pause any playing videos when closing lightbox
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
    setActiveLightbox(null);
  };

  const navigateLightbox = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + filteredItems.length) % filteredItems.length;
      setActiveLightbox(filteredItems[newIndex]);
      return newIndex;
    });
  };

  const playVideo = (index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });

    // Play the selected video
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-12">
      {/* Hero Banner */}
      <div className="relative pt-32 pb-16 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-black/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/images/IMG_5799.JPG')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Resort Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore the beauty and tranquility of our resort through photos and videos showcasing our unique mud houses, rooms, and activities.
          </p>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-xl shadow-xl">
            <div className="flex space-x-1">
              <button
                className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                  activeTab === 'photos'
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('photos')}
              >
                Photos
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                  activeTab === 'videos'
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('videos')}
              >
                Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(activeTab === 'photos' ? photoCategories : videoCategories).map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white shadow-lg ring-2 ring-teal-400'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-teal-400 shadow-md'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {activeTab === 'photos' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="mb-8">
              {/* Featured Photo */}
              <div className="mb-6">
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800 h-96 lg:h-[500px] group">
                  <img
                    src={filteredItems[currentIndex].src}
                    alt={filteredItems[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {filteredItems[currentIndex].title}
                      </h3>
                      <span className="inline-block bg-teal-600 px-3 py-1 rounded-full text-sm text-white capitalize">
                        {filteredItems[currentIndex].category}
                      </span>
                    </div>
                  </div>
                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    onClick={() => {
                      setIsAutoplay(false);
                      setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    onClick={() => {
                      setIsAutoplay(false);
                      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    className="absolute top-4 right-4 bg-black/50 hover:bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    onClick={() => openLightbox(currentIndex)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Gallery Controls */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <button
                    className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
                      isAutoplay ? 'bg-teal-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                    onClick={() => setIsAutoplay(!isAutoplay)}
                  >
                    {isAutoplay ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </button>
                  <span className="text-gray-400 text-sm">
                    {currentIndex + 1} / {filteredItems.length}
                  </span>
                </div>

                <div className="flex space-x-1">
                  {filteredItems.length > 5 ? (
                    <div className="flex space-x-1">
                      {[...Array(Math.min(5, filteredItems.length))].map((_, i) => {
                        const dotIndex =
                          currentIndex < 2
                            ? i
                            : currentIndex > filteredItems.length - 3
                            ? filteredItems.length - 5 + i
                            : currentIndex - 2 + i;
                        return (
                          <button
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${
                              dotIndex === currentIndex ? 'bg-teal-500 w-4' : 'bg-gray-600'
                            }`}
                            onClick={() => {
                              setIsAutoplay(false);
                              setCurrentIndex(dotIndex);
                            }}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex space-x-1">
                      {filteredItems.map((_, i) => (
                        <button
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentIndex ? 'bg-teal-500 w-4' : 'bg-gray-600'
                          }`}
                          onClick={() => {
                            setIsAutoplay(false);
                            setCurrentIndex(i);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative rounded-lg overflow-hidden cursor-pointer group aspect-video ${
                      index === currentIndex ? 'ring-2 ring-teal-500' : ''
                    }`}
                    onClick={() => {
                      setIsAutoplay(false);
                      setCurrentIndex(index);
                    }}
                  >
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                      <span className="text-white font-medium text-sm">{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-gray-400">No photos available for this category.</p>
            </div>
          )}
        </div>
      )}

      {/* Video Gallery */}
      {activeTab === 'videos' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((video, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-teal-900/30 hover:scale-105"
                >
                  <div className="relative aspect-video">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      poster={video.poster}
                      className="w-full h-full object-cover"
                      onClick={() => playVideo(index)}
                      controls
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-all duration-300">
                      <button
                        className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-all duration-300"
                        onClick={() => playVideo(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                    <span className="inline-block bg-teal-600 px-3 py-1 rounded-full text-sm text-white capitalize mb-4">
                      {video.category}
                    </span>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-gray-400">No videos available for this category.</p>
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {activeLightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 p-4 md:p-10 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-teal-600 text-white rounded-full p-2 transition-all duration-300"
              onClick={closeLightbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {activeTab === 'photos' ? (
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />
            ) : (
              <video
                controls
                autoPlay
                className="w-full max-h-[75vh] object-contain rounded-lg"
              >
                <source src={activeLightbox.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            <div className="bg-black/70 p-4 rounded-b-lg">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">{activeLightbox.title}</h3>
              <span className="inline-block bg-teal-600 px-2 py-1 rounded-full text-xs text-white capitalize">
                {activeLightbox.category}
              </span>
            </div>

            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-teal-600 text-white rounded-full p-2 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-teal-600 text-white rounded-full p-2 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResortGallery;