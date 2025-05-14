import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const autoplayRef = useRef(null);
  const carouselRef = useRef(null);
  const dragStartRef = useRef(0);
  const dragCurrentRef = useRef(0);

  const categories = ['all', 'rooms', 'dining', 'amenities', 'experiences'];

  const images = [
    { src: '/src/assets/images/IMG_5796.JPG', category: 'rooms', title: 'Deluxe Ocean View Room' },
    { src: '/src/assets/images/IMG_5799.JPG', category: 'rooms', title: 'Presidential Suite' },
    { src: '/src/assets/images/IMG_5799.JPG', category: 'dining', title: 'Oceanfront Restaurant' },
    { src: '/src/assets/images/IMG_5783.JPG', category: 'dining', title: 'Sunset Bar' },
    { src: '/src/assets/images/IMG_5799.JPG', category: 'amenities', title: 'Infinity Pool' },
    { src: '/src/assets/images/IMG_5784.JPG', category: 'amenities', title: 'Luxury Spa' },
    { src: '/src/assets/images/IMG_5789.JPG', category: 'experiences', title: 'Beach Yoga' },
    { src: '/src/assets/images/IMG_5793.JPG', category: 'experiences', title: 'Scuba Diving' },
    { src: '/src/assets/images/IMG_5799.JPG', category: 'rooms', title: 'Garden Suite' },
    { src: '/src/assets/images/rooms3.JPG', category: 'amenities', title: 'Fitness Center' },
    { src: '/src/assets/images/rooms2.JPG', category: 'dining', title: 'Fine Dining Experience' },
    { src: '/src/assets/images/rooms1.JPG', category: 'experiences', title: 'Sunset Cruise' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  // Reset carousel when category changes
  useEffect(() => {
    setCurrentIndex(0);
    resetAutoplay();
  }, [activeCategory]);

  // Autoplay effect
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
      }, 4000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, filteredImages.length]);

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
      }, 4000);
    }
  };

  const pauseAutoplay = () => {
    setIsAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const resumeAutoplay = () => {
    setIsAutoplay(true);
  };

  const handlePrevious = () => {
    pauseAutoplay();
    setCurrentIndex(prevIndex => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleNext = () => {
    pauseAutoplay();
    setCurrentIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
  };

  const getCardPosition = (index) => {
    const activeIndex = currentIndex;
    const totalItems = filteredImages.length;
    
    let distance = (index - activeIndex + totalItems) % totalItems;
    if (distance > totalItems / 2) distance -= totalItems;
    
    return {
      rotateY: distance * 40,
      z: distance === 0 ? 0 : -200,
      x: distance * 50,
      scale: 1 - Math.min(0.3, Math.abs(distance) * 0.15),
      opacity: 1 - Math.min(0.5, Math.abs(distance) * 0.2),
      zIndex: totalItems - Math.abs(distance)
    };
  };

  const onDragStart = (e) => {
    pauseAutoplay();
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    
    setIsDragging(true);
    setStartPosition(clientX);
    dragStartRef.current = clientX;
    dragCurrentRef.current = clientX;
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    
    dragCurrentRef.current = clientX;
    const diff = dragCurrentRef.current - dragStartRef.current;
    setCurrentTranslate(diff);
  };
  
  const onDragEnd = () => {
    if (!isDragging) return;
    
    const diff = currentTranslate;
    
    if (diff < -50) {
      handleNext();
    } else if (diff > 50) {
      handlePrevious();
    }
    
    setIsDragging(false);
    setCurrentTranslate(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Banner */}
      <div className="relative pt-32 pb-16 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-black/80 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/images/plant-foliage-board.jpg')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore the beauty and luxury of Paradise Resort through our photo gallery.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/20 scale-105 ring-2 ring-teal-400'
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

      {/* 3D Carousel */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length > 0 ? (
            <div className="carousel-section">
              <div 
                className="carousel-container"
                ref={carouselRef}
                onMouseDown={onDragStart}
                onMouseMove={onDragMove}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                onTouchStart={onDragStart}
                onTouchMove={onDragMove}
                onTouchEnd={onDragEnd}
              >
                <div className="carousel-stage">
                  {filteredImages.map((image, index) => {
                    const pos = getCardPosition(index);
                    return (
                      <div 
                        key={index}
                        className={`carousel-card ${currentIndex === index ? 'active' : ''}`}
                        style={{
                          transform: `
                            translateX(${pos.x + (currentIndex === index ? currentTranslate * 0.1 : 0)}px) 
                            translateZ(${pos.z}px) 
                            rotateY(${pos.rotateY}deg) 
                            scale(${pos.scale})
                          `,
                          opacity: pos.opacity,
                          zIndex: pos.zIndex
                        }}
                        onClick={() => {
                          if (index !== currentIndex) {
                            pauseAutoplay();
                            setCurrentIndex(index);
                          }
                        }}
                      >
                        <div className="carousel-card-inner">
                          <img 
                            src={image.src} 
                            alt={image.title} 
                            className="carousel-image"
                          />
                          <div className={`carousel-caption ${currentIndex === index ? 'active' : ''}`}>
                            <h3 className="card-title">{image.title}</h3>
                            <span className="card-category">{image.category}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation Controls */}
                <button 
                  className="carousel-nav prev"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button 
                  className="carousel-nav next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Carousel Controls & Indicators */}
              <div className="carousel-controls">
                <div className="flex items-center justify-between">
                  <div className="carousel-indicators">
                    {filteredImages.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => {
                          pauseAutoplay();
                          setCurrentIndex(index);
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button 
                    className={`autoplay-button ${isAutoplay ? 'active' : ''}`}
                    onClick={() => isAutoplay ? pauseAutoplay() : resumeAutoplay()}
                    aria-label={isAutoplay ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isAutoplay ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="thumbnails-container">
                <div className="thumbnails-track">
                  {filteredImages.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                      onClick={() => {
                        pauseAutoplay();
                        setCurrentIndex(index);
                      }}
                    >
                      <img 
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        loading="lazy"
                      />
                      <div className="thumbnail-overlay">
                        <span className="thumbnail-index">{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-800 rounded-lg shadow-md">
              <p className="text-gray-400 text-lg">No images available for this category.</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .carousel-section {
          padding: 20px 0;
        }

        .carousel-container {
          position: relative;
          height: 580px;
          margin: 0 auto;
          perspective: 1200px;
          overflow: visible;
          user-select: none;
        }

        .carousel-stage {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-card {
          position: absolute;
          width: 380px;
          height: 500px;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
        }

        .carousel-card.active {
          cursor: default;
        }

        .carousel-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          transform-style: preserve-3d;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          transition: all 0.6s ease;
        }

        .carousel-card.active .carousel-card-inner {
          box-shadow: 0 25px 50px rgba(20, 184, 166, 0.3), 0 0 30px rgba(20, 184, 166, 0.2);
          border: 3px solid #14b8a6;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }

        .carousel-card:hover .carousel-image {
          transform: scale(1.05);
        }

        .carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 25px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), transparent);
          color: white;
          transform: translateY(100%);
          opacity: 0;
          transition: all 0.5s ease;
        }

        .carousel-caption.active,
        .carousel-card:hover .carousel-caption {
          transform: translateY(0);
          opacity: 1;
        }

        .card-title {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 10px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .card-category {
          display: inline-block;
          background-color: #14b8a6;
          color: white;
          font-size: 14px;
          font-weight: 500;
          padding: 5px 15px;
          border-radius: 30px;
          text-transform: capitalize;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(31, 41, 55, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          color: #14b8a6;
          border: none;
          outline: none;
          transition: all 0.3s ease;
        }

        .carousel-nav:hover {
          background: #14b8a6;
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 25px rgba(20, 184, 166, 0.3);
        }

        .carousel-nav.prev {
          left: 0;
        }

        .carousel-nav.next {
          right: 0;
        }

        .nav-icon {
          width: 28px;
          height: 28px;
        }

        .carousel-controls {
          max-width: 800px;
          margin: 30px auto 0;
          padding: 0 20px;
        }

        .carousel-indicators {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .carousel-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #4b5563;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-indicator.active {
          background-color: #14b8a6;
          transform: scale(1.5);
          box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
        }

        .autoplay-button {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #374151;
          cursor: pointer;
          color: #9ca3af;
          transition: all 0.3s ease;
        }

        .autoplay-button:hover {
          color: #14b8a6;
          transform: scale(1.05);
          border-color: #14b8a6;
        }

        .autoplay-button.active {
          background: #14b8a6;
          color: white;
          border-color: #14b8a6;
        }

        .thumbnails-container {
          max-width: 900px;
          margin: 25px auto 0;
          overflow-x: auto;
          padding: 15px 0;
          scrollbar-width: thin;
          scrollbar-color: #14b8a6 #1f2937;
        }

        .thumbnails-container::-webkit-scrollbar {
          height: 6px;
        }

        .thumbnails-container::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }

        .thumbnails-container::-webkit-scrollbar-thumb {
          background-color: #14b8a6;
          border-radius: 10px;
        }

        .thumbnails-track {
          display: flex;
          gap: 15px;
          padding: 5px;
        }

        .thumbnail {
          flex: 0 0 100px;
          height: 70px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .thumbnail-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .thumbnail:hover .thumbnail-overlay {
          opacity: 1;
        }

        .thumbnail-index {
          color: white;
          font-weight: bold;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
        }

        .thumbnail:hover {
          transform: translateY(-5px);
        }

        .thumbnail.active {
          border: 3px solid #14b8a6;
          box-shadow: 0 8px 20px rgba(20, 184, 166, 0.4);
          transform: scale(1.1);
        }

        .thumbnail.active .thumbnail-overlay {
          background: rgba(20, 184, 166, 0.3);
          opacity: 1;
        }

        /* Additional effects and responsive adjustments */
        @media (max-width: 1024px) {
          .carousel-container {
            height: 520px;
          }

          .carousel-card {
            width: 340px;
            height: 460px;
          }
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 450px;
          }

          .carousel-card {
            width: 300px;
            height: 400px;
          }
        }

        @media (max-width: 640px) {
          .carousel-container {
            height: 400px;
          }

          .carousel-card {
            width: 260px;
            height: 350px;
          }

          .card-title {
            font-size: 20px;
          }

          .carousel-nav {
            width: 50px;
            height: 50px;
          }

          .nav-icon {
            width: 24px;
            height: 24px;
          }

          .thumbnail {
            flex: 0 0 80px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            height: 360px;
          }

          .carousel-card {
            width: 220px;
            height: 300px;
          }

          .carousel-caption {
            padding: 15px;
          }

          .card-title {
            font-size: 18px;
            margin-bottom: 5px;
          }

          .card-category {
            font-size: 12px;
            padding: 4px 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;