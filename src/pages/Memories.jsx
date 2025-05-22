import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, X, Scan } from 'lucide-react';

const Memories = () => {
  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState({ title: '', description: '', image: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  // Fetch memories from the backend
  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/memories');
        const data = await response.json();
        setMemories(data);
      } catch (error) {
        console.error('Error fetching memories:', error);
      }
    };
    fetchMemories();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setNewMemory({ ...newMemory, [e.target.name]: e.target.value });
  };

  // Handle image file selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload image to cloudinary or your preferred service
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset'); // Replace with your cloudinary preset
    
    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    let imageUrl = newMemory.image;
    
    // Upload selected image if exists
    if (selectedImage) {
      imageUrl = await uploadImage(selectedImage);
      if (!imageUrl) {
        alert('Error uploading image. Please try again.');
        setIsUploading(false);
        return;
      }
    }

    try {
      const response = await fetch('http://localhost:5000/api/memories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newMemory, image: imageUrl }),
      });
      const result = await response.json();
      if (response.ok) {
        setMemories([result.memory, ...memories]);
        setNewMemory({ title: '', description: '', image: '' });
        setSelectedImage(null);
        setImagePreview('');
        setIsFormOpen(false);
        alert('Memory added successfully!');
      } else {
        alert('Error adding memory: ' + result.message);
      }
    } catch (error) {
      alert('Error adding memory: ' + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  // Start camera for QR scanning
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // Use back camera on mobile
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check permissions.');
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  // Handle QR scanner open
  const handleScannerOpen = () => {
    setIsScannerOpen(true);
    setTimeout(() => {
      startCamera();
    }, 100);
  };

  // Handle QR scanner close
  const handleScannerClose = () => {
    stopCamera();
    setIsScannerOpen(false);
  };

  // Capture photo from camera
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0);
      
      canvas.toBlob((blob) => {
        const file = new File([blob], 'captured_memory.jpg', { type: 'image/jpeg' });
        setSelectedImage(file);
        setImagePreview(canvas.toDataURL());
        handleScannerClose();
        setIsFormOpen(true);
      }, 'image/jpeg', 0.8);
    }
  };

  // Clean up camera when component unmounts
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-28 pb-16 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-gray-900/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            Cherish Your <span className="text-teal-400">Memories</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl leading-relaxed">
            Share your unforgettable moments at HillParadise Resort through our QR code portal.
          </p>
        </div>
      </div>

      {/* QR Code Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-8">
            Add Your <span className="text-teal-400">Memory</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Capture and share your special moments with us!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleScannerOpen}
              className="bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-teal-500/50 flex items-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Take Photo
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/50 flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Upload Memory
            </button>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://hillparadise-memories.com/upload&color=000000&bgcolor=ffffff&margin=10"
                alt="QR Code to Add Memory"
                className="w-32 h-32 sm:w-40 sm:h-40"
                onError={(e) => {
                  // Fallback to a different QR code service if the first one fails
                  e.target.src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://hillparadise-memories.com/upload&choe=UTF-8";
                }}
              />
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto">
            Scan this QR code with your phone camera to quickly access the memory upload page
          </p>
        </div>
      </section>

      {/* Camera Scanner Modal */}
      {isScannerOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 bg-gray-900/80">
            <h3 className="text-white text-lg font-semibold">Capture Your Memory</h3>
            <button
              onClick={handleScannerClose}
              className="text-white hover:text-teal-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 relative overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={capturePhoto}
                className="bg-teal-600 hover:bg-teal-500 text-white p-4 rounded-full shadow-lg transition-all duration-300"
              >
                <Camera className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Memory Form (Modal) */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => {
                setIsFormOpen(false);
                setSelectedImage(null);
                setImagePreview('');
              }}
              className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-4">Share Your Memory</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newMemory.title}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/20 text-white rounded-lg p-2.5 border border-teal-400/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={newMemory.description}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/20 text-white rounded-lg p-2.5 border border-teal-400/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  rows="4"
                  required
                />
              </div>

              {/* Image Upload Section */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Image</label>
                
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(null);
                        setImagePreview('');
                      }}
                      className="absolute top-2 right-2 bg-red-600 hover:bg-red-500 text-white p-1 rounded-full"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-teal-400/40 rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center gap-2 text-gray-300 hover:text-white"
                    >
                      <Upload className="w-8 h-8" />
                      <span>Click to upload image</span>
                    </label>
                  </div>
                )}
                
                <input
                  type="text"
                  name="image"
                  value={newMemory.image}
                  onChange={handleInputChange}
                  placeholder="Or paste image URL"
                  className="w-full bg-gray-900/20 text-white rounded-lg p-2.5 border border-teal-400/40 focus:outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                />
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isUploading}
                className="w-full bg-teal-600 hover:bg-teal-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2.5 px-4 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-teal-500/50"
              >
                {isUploading ? 'Uploading...' : 'Submit Memory'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Memories Grid */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-12 text-center">
            Guest <span className="text-teal-400">Memories</span>
          </h2>
          {memories.length === 0 ? (
            <div className="text-center">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 max-w-md mx-auto">
                <Scan className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <p className="text-gray-300 text-lg">No memories yet. Be the first to share yours!</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {memories.map((memory) => (
                <div
                  key={memory._id}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-teal-400/30 shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {memory.image && (
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      loading="lazy"
                    />
                  )}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">{memory.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base line-clamp-3">{memory.description}</p>
                  <p className="text-xs md:text-sm text-teal-400">
                    {new Date(memory.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Memories;