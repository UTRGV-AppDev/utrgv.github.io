import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBrain, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from './ThemeContext'

function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const isActive = (path: string) => location.pathname === path
  
  const linkClasses = (path: string) => 
    `font-medium transition-colors duration-200 ${
      isActive(path) 
        ? 'text-utrgv-orange-500 dark:text-utrgv-orange-400 border-b-2 border-utrgv-orange-500 dark:border-utrgv-orange-400 pb-1'
        : 'text-gray-700 dark:text-gray-300 hover:text-utrgv-orange-500 dark:hover:text-utrgv-orange-400'
    }`
  
  const mobileLinkClasses = (path: string) => 
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive(path)
        ? 'bg-utrgv-orange-50 dark:bg-utrgv-orange-900 text-utrgv-orange-600 dark:text-utrgv-orange-300'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-utrgv-orange-500 dark:hover:text-utrgv-orange-400'
    }`
  
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  const oppositeTheme = theme === 'light' ? 'dark' : 'light'
  const themeLabel = `Switch to ${oppositeTheme} mode. Current mode: ${theme}`
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-utrgv-orange-600 focus:text-white focus:outline-none focus:ring-2 focus:ring-utrgv-orange-500"
      >
        Skip to main content
      </a>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaBrain className="text-utrgv-orange-500 text-2xl" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">UTRGV AI Agents</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <Link to="/" className={linkClasses('/')}>
              Home
            </Link>
            <Link to="/about" className={linkClasses('/about')}>
              About
            </Link>
            <Link to="/contact" className={linkClasses('/contact')}>
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-utrgv-orange-500 transition-colors duration-200"
              aria-label={themeLabel}
            >
              {theme === 'light' ? (
                <FaMoon className="text-xl" aria-hidden="true" />
              ) : (
                <FaSun className="text-xl text-yellow-400" aria-hidden="true" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-utrgv-orange-500 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" aria-hidden="true" />
              ) : (
                <FaBars className="text-xl" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className={mobileLinkClasses('/')} onClick={handleMobileLinkClick}>
              Home
            </Link>
            <Link to="/about" className={mobileLinkClasses('/about')} onClick={handleMobileLinkClick}>
              About
            </Link>
            <Link to="/contact" className={mobileLinkClasses('/contact')} onClick={handleMobileLinkClick}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navigation
