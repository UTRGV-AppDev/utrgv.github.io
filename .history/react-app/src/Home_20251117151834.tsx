function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to UTRGV Cloud</h1>
          <p className="text-lg mb-8">Empowering Research and Education Through Advanced Cloud Solutions</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

       <div className="max-w-6xl mx-auto px-4 py-16">
       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Platform</h2>
        <p className="text-gray-600 mb-4">
          UTRGV Cloud provides a comprehensive suite of cloud computing services designed specifically
          for the academic and research community at the University of Texas Rio Grande Valley.
        </p>
        <p className="text-gray-600">
          Our platform offers scalable infrastructure, secure data management, and powerful tools
          that enable researchers and educators to focus on their work while we handle the technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">High-Performance Computing</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Access powerful computing resources for complex simulations, data analysis, and
            computational research tasks.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure Data Storage</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Enterprise-grade storage solutions with advanced security features to protect
            your research data and intellectual property.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaborative Tools</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Platform for seamless collaboration between researchers, students, and faculty
            across institutions.
          </p>
        </div>
       </div>

       <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mx-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get Started Today</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Ready to leverage the power of cloud computing for your research or educational projects?
          Contact our team to learn more about how UTRGV Cloud can support your work.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Home