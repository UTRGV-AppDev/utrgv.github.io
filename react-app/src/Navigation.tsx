import { Link, useLocation } from 'react-router-dom'
import { FaCloud, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from './ThemeContext'

function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  const linkClasses = (path: string) => 
    `font-medium transition-colors duration-200 ${
      isActive(path) 
        ? 'text-orange-500 dark:text-orange-400 border-b-2 border-orange-500 dark:border-orange-400 pb-1'
        : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
    }`
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaCloud className="text-orange-500 text-2xl" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">UTRGV Cloud</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClasses('/')}>
              Home
            </Link>
            <Link to="/about" className={linkClasses('/about')}>
              About
            </Link>
          </nav>
          
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <FaMoon className="text-xl" />
              ) : (
                <FaSun className="text-xl text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation