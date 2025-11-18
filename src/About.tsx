import { Helmet } from 'react-helmet-async'
import Breadcrumb from './Breadcrumb'

function About() {
  return (
    <>
      <Helmet>
        <title>About UTRGV AI Agents | Pioneering AI Agent Technology</title>
        <meta 
          name="description" 
          content="Learn about UTRGV AI Agents - a developer showcase platform demonstrating autonomous AI agents for software development, research automation, and intelligent task execution." 
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Breadcrumb */}
        <Breadcrumb currentPage="About" />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-utrgv-orange-600 via-red-700 to-utrgv-orange-700 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">About UTRGV AI Agents</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Pioneering AI agent technology for developers at UTRGV
            </p>
          </div>
        </section>

         {/* Mission Section */}
         <section aria-labelledby="mission-heading" className="py-20 bg-white dark:bg-gray-900">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 id="mission-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
               <div className="max-w-4xl mx-auto">
                 <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                   UTRGV AI Agents is a developer showcase platform demonstrating the capabilities of 
                   autonomous AI agents in software development, research automation, and intelligent task execution.
                 </p>
                 <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                   Built by UTRGV developers, this platform serves as an educational and demonstration hub, 
                   showcasing how AI agents can revolutionize workflows through natural language understanding, 
                   autonomous decision-making, and multi-step problem solving.
                 </p>
               </div>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <article className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <div className="w-16 h-16 bg-utrgv-orange-500 rounded-full flex items-center justify-center mb-6">
                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Developer Innovation</h3>
                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                   Demonstrating cutting-edge AI agent capabilities including code generation, automated 
                   testing, intelligent refactoring, and complex problem decomposition for real-world development scenarios.
                 </p>
               </article>
               <article className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                     <path d="M12 6.253v13h4a1 1 0 001-1V7.253a1 1 0 00-1-1H12zM4 7.253v12a1 1 0 001 1h4V6.253a1 1 0 00-1-1H4z"></path>
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Educational Excellence</h3>
                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                   Providing UTRGV students and faculty with hands-on experience in AI agent technology, 
                   preparing the next generation of developers for AI-augmented software engineering.
                 </p>
               </article>
            </div>
          </div>
        </section>

         {/* Services Section */}
         <section aria-labelledby="capabilities-heading" className="py-20 bg-gray-50 dark:bg-gray-800">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 id="capabilities-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">AI Agent Capabilities</h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Discover what our AI agents can do for your development workflow</p>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <article className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="w-12 h-12 bg-utrgv-orange-500 rounded-lg flex items-center justify-center mb-4">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                     <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Automated code review & refactoring</h3>
               </article>
               <article className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                     <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Intelligent documentation generation</h3>
               </article>
               <article className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                     <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Multi-step task planning & execution</h3>
               </article>
                <article className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Context-aware code assistance</h3>
                </article>
                <article className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                     <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Autonomous debugging & testing</h3>
               </article>
               <article className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-time learning & adaptation</h3>
               </article>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
