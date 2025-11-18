function Home() {
  return (
    <div className="min-h-screen">
      {/* Full-Width Hero Section */}
      <section className="bg-gradient-to-br from-utrgv-orange-600 via-utrgv-orange-700 to-red-700 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            UTRGV AI Agent Showcase
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Demonstrating the Power of Autonomous AI Agents for Developers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-utrgv-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              See Agents in Action
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-utrgv-orange-600 transition-all duration-300">
              Explore Capabilities
            </button>
          </div>
        </div>
         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

       {/* Platform Overview */}
       <section className="py-20 bg-white dark:bg-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">AI Agent Capabilities</h2>
             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
               Explore how AI agents at UTRGV can autonomously handle complex tasks, from code generation 
               to multi-step problem solving, demonstrating the future of intelligent automation.
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
               <div className="w-16 h-16 bg-utrgv-orange-500 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Natural Language Processing</h3>
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                 AI agents understand complex natural language instructions and context, enabling 
                 seamless human-AI collaboration on development tasks.
               </p>
             </div>
             <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Autonomous Task Execution</h3>
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                 Watch agents independently break down complex problems, plan solutions, and 
                 execute multi-step workflows with minimal human intervention.
               </p>
             </div>
             <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
               <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Code Generation & Analysis</h3>
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                 AI agents can write, review, refactor, and debug code across multiple languages, 
                 accelerating development cycles and improving code quality.
               </p>
             </div>
          </div>
        </div>
      </section>

       {/* Testimonials */}
       <section className="py-20 bg-gray-50 dark:bg-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Developer Experiences</h2>
             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Hear from UTRGV developers working with AI agents</p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-gradient-to-br from-utrgv-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                   CJ
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white">Carlos Jazinski</p>
                   <p className="text-gray-600 dark:text-gray-300">Software Developer</p>
                 </div>
               </div>
               <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                 "The AI agents have revolutionized how I approach complex coding tasks. They can autonomously refactor entire codebases!"
               </p>
               <div className="flex mt-4">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5 text-utrgv-orange-500 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                   </svg>
                 ))}
               </div>
             </div>
             <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                   SM
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white">Sarah Martinez</p>
                   <p className="text-gray-600 dark:text-gray-300">Research Assistant</p>
                 </div>
               </div>
               <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                 "Watching AI agents solve multi-step problems autonomously is incredible. They've accelerated our research timeline significantly."
               </p>
               <div className="flex mt-4">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5 text-utrgv-orange-500 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                   </svg>
                 ))}
               </div>
             </div>
             <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                   DR
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white">David Rodriguez</p>
                   <p className="text-gray-600 dark:text-gray-300">CS Student</p>
                 </div>
               </div>
               <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                 "The AI agents helped me understand complex algorithms by breaking them down and generating examples. Game changer for learning!"
               </p>
               <div className="flex mt-4">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5 text-utrgv-orange-500 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                   </svg>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-utrgv-orange-600 via-red-600 to-utrgv-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore AI Agents?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join UTRGV developers in discovering how AI agents can transform your workflow and automate complex tasks.
          </p>
          <button className="bg-white text-utrgv-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
