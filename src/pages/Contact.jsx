import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // In a real application, you would send this data to your backend
  };
  
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-gray-900/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/loordhujeyakumar-cloudinary/image/upload/q_auto,f_auto/IMG_5799_da86um.jpg')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl leading-relaxed">
            We're here to answer your questions and help plan your perfect stay.
          </p>
        </div>
      </div>
      
      {/* Contact Form & Info */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-900 to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-emerald-700/30">
            <div className="md:flex">
              <div className="md:w-1/2 bg-teal-950 text-white p-8 md:p-12">
                <h2 className="text-2xl font-display font-bold mb-6 tracking-wide">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-700 p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Address</h3>
                      <address className="mt-2 not-italic text-white">
                        No 841, Oilavayal, Keezhanthoor<br />
                        Kanthalloor, Idukki<br />
                        685620 Kerala, India
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-700 p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="mt-2 text-white">
                        <a href="tel:8848356964" className="hover:text-white">8848356964</a>
                      </p>
                      <p className="mt-1 text-white">
                        <a href="tel:9446449526" className="hover:text-white">9446449526</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-700 p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="mt-2 text-white">
                        <a href="mailto:info@hillparadiseresort.com" className="hover:text-white">info@paradiseresort.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-teal-700 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-teal-700 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-teal-700 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 bg-gray-800">
                {submitted ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-teal-400 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-lg text-white">
                      Your message has been received. Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 bg-teal-600 hover:bg-teal-500 text-white py-2 px-6 rounded transition-colors duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 tracking-wide">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white">
                            Full Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="block w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="block w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-white">
                            Phone Number
                          </label>
                          <div className="mt-1">
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="block w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-white">
                            Subject
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="block w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="message" className="block text-sm font-medium text-white">
                            Message
                          </label>
                          <div className="mt-1">
                            <textarea
                              name="message"
                              id="message"
                              rows={6}
                              required
                              value={formData.message}
                              onChange={handleChange}
                              className="block w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded shadow-md transition-colors duration-300"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-wide">Find Us</h2>
          <p className="text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Located in a pristine tropical setting, our resort is easily accessible yet worlds away from everyday life.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-emerald-700/30">
          <div className="h-96 bg-gray-700">
            {/* Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31457.95516426982!2d77.15892799999999!3d10.2366543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07790015433d57%3A0x3b8f82b4bcdbcea1!2sHills%20paradise!5e0!3m2!1sen!2sin!4v1714561806659!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Getting Here</h3>
            <p className="text-white mb-4">
              <strong>Address:</strong> No 841, Oilavayal, Keezhanthoor Kanthalloor, Idukki 685620 Kerala, India
            </p>
            <div className="space-y-4">
           
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-emerald-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-wide">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
              Find quick answers to common questions about our resort and services.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "What are the check-in and check-out times?",
                answer: "Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged based on availability for an additional fee."
              },
              {
                question: "Is there a minimum stay requirement?",
                answer: "During peak season (December-April), we have a 3-night minimum stay requirement. During other times of the year, there is no minimum stay requirement."
              },
              
              {
                question: "Are children welcome at the resort?",
                answer: "Yes, we welcome guests of all ages. We offer a Kids Club with supervised activities, children's menus at our restaurants, and babysitting services upon request."
              },
              
              {
                question: "What is your cancellation policy?",
                answer: "Cancellations made 30 days or more before arrival receive a full refund. Cancellations 15-29 days before arrival incur a one-night charge. Cancellations less than 15 days before arrival are non-refundable."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 border border-emerald-700/30">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white mb-6">
              Don't see the answer you're looking for? Contact our friendly team directly.
            </p>
            <button className="bg-teal-600 hover:bg-teal-500 text-white py-3 px-8 rounded shadow-md transition-colors duration-300">
              Ask a Question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;