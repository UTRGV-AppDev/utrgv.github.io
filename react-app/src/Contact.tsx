function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Get in touch with our team for support and inquiries
          </p>
        </div>
      </section>

       {/* Contact Section */}
       <section className="py-20 bg-white dark:bg-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Reach Out</h2>
             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
               Have questions about UTRGV Cloud services? Our team is here to help you with any inquiries
               or to discuss how our platform can support your research or educational projects.
             </p>
           </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                 <div className="space-y-6">
                   <div className="flex items-start">
                     <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                       </svg>
                     </div>
                     <div>
                       <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                       <p className="text-gray-600 dark:text-gray-300">cloud@utrgv.edu</p>
                     </div>
                   </div>
                   <div className="flex items-start">
                     <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                       </svg>
                     </div>
                     <div>
                       <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                       <p className="text-gray-600 dark:text-gray-300">(956) 665-XXXX</p>
                     </div>
                   </div>
                   <div className="flex items-start">
                     <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                       </svg>
                     </div>
                     <div>
                       <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                       <p className="text-gray-600 dark:text-gray-300">University of Texas Rio Grande Valley<br />Edinburg, TX 78539</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Office Hours */}
               <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Office Hours</h3>
                 <div className="space-y-2">
                   <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
                   <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Saturday:</span> 9:00 AM - 1:00 PM</p>
                   <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Sunday:</span> Closed</p>
                 </div>
               </div>
            </div>

             {/* Contact Form */}
             <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
               <form className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                   <input
                     type="text"
                     id="name"
                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     placeholder="Your full name"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                   <input
                     type="email"
                     id="email"
                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     placeholder="your.email@utrgv.edu"
                   />
                 </div>
                 <div>
                   <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                   <select
                     id="subject"
                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                   >
                     <option>General Inquiry</option>
                     <option>Technical Support</option>
                     <option>Research Collaboration</option>
                     <option>Account Issues</option>
                     <option>Other</option>
                   </select>
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                   <textarea
                     id="message"
                     rows={6}
                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     placeholder="Tell us how we can help you..."
                   ></textarea>
                 </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact