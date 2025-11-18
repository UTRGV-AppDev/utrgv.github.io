import { Link } from 'react-router-dom'
import { FaCloud, FaCloudRain, FaHome } from 'react-icons/fa'
import Breadcrumb from './Breadcrumb'

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950">
      {/* Breadcrumb */}
      <Breadcrumb currentPage="404 Not Found" />
      
      {/* Main Content */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Cloud Icons */}
        <div className="relative mb-8 h-48">
          <div className="absolute top-0 left-1/4 animate-float">
            <FaCloud className="text-gray-300 dark:text-gray-600 text-8xl opacity-50" />
          </div>
          <div className="absolute top-8 right-1/4 animate-float-delayed">
            <FaCloud className="text-gray-200 dark:text-gray-700 text-6xl opacity-60" />
          </div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 animate-float-slow">
            <FaCloudRain className="text-blue-400 dark:text-blue-500 text-7xl" />
          </div>
        </div>

        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lost in the Cloud
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Looks like this page has drifted away to another cloud instance...
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            The page you're looking for doesn't exist in our cloud infrastructure. 
            Maybe it was never deployed, or it got terminated during maintenance. 
            Either way, let's get you back on track!
          </p>
        </div>

        {/* Cloud-themed suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-3">☁️</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Error Code: <span className="font-mono font-semibold text-indigo-600 dark:text-indigo-400">CLOUD_404</span>
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-3">🌩️</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Status: <span className="font-semibold text-purple-600 dark:text-purple-400">Resource Not Found</span>
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-3">🌈</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Region: <span className="font-semibold text-pink-600 dark:text-pink-400">US-RGV-404</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaHome className="mr-2" />
            Return to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Go Back
          </button>
        </div>

        {/* Fun Tech Message */}
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-500 font-mono">
          <p>$ curl https://utrgv.cloud/this-page</p>
          <p className="text-red-500 dark:text-red-400 mt-1">Error: 404 Not Found - No such file or directory in cloud storage</p>
        </div>
      </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, -25px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default NotFound
