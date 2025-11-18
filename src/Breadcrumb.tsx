import { Link } from 'react-router-dom'
import { FaChevronRight, FaHome } from 'react-icons/fa'

interface BreadcrumbProps {
  currentPage: string
}

function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 group"
              aria-label="Go to home page"
            >
              <FaHome className="text-base group-hover:scale-110 transition-transform duration-200" />
              <span className="ml-2 font-medium">Home</span>
            </Link>
          </li>

          {/* Separator */}
          <li>
            <FaChevronRight 
              className="text-gray-400 dark:text-gray-600 text-xs" 
              aria-hidden="true"
            />
          </li>

          {/* Current Page */}
          <li>
            <span 
              className="text-gray-900 dark:text-white font-semibold"
              aria-current="page"
            >
              {currentPage}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
