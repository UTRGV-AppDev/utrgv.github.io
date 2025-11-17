import { Link } from 'react-router-dom'
import { FaCloud, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from './ThemeContext'

function Navigation() {
  const { theme, toggleTheme } = useTheme()
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
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium">
              About
            </Link>
          </nav>
          
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <FaMoon className="text-xl" />
              ) : (
                <FaSun className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation