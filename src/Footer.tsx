import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  const linkClasses = (path: string) => 
    `transition-colors duration-200 ${
      isActive(path) 
        ? 'text-utrgv-orange-500 dark:text-utrgv-orange-400 font-semibold'
        : 'text-gray-600 dark:text-gray-300 hover:text-utrgv-orange-500 dark:hover:text-utrgv-orange-400'
    }`
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">UTRGV AI Agents</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Showcasing autonomous AI agent capabilities for developers at the University of Texas Rio Grande Valley.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2" role="list">
              <li><Link to="/" className={linkClasses('/')}>Home</Link></li>
              <li><Link to="/about" className={linkClasses('/about')}>About</Link></li>
              <li><Link to="/contact" className={linkClasses('/contact')}>Contact</Link></li>
            </ul>
          </nav>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <address className="text-gray-600 dark:text-gray-300 not-italic">
              <p>University of Texas Rio Grande Valley</p>
              <p>Edinburg, TX 78539</p>
              <p className="mt-2">
                Email: <a href="mailto:contact@utrgv.edu" className="hover:text-utrgv-orange-500 dark:hover:text-utrgv-orange-400 transition-colors">contact@utrgv.edu</a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} UTRGV AI Agents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer