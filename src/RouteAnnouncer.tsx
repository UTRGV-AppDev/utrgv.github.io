import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function RouteAnnouncer() {
  const location = useLocation()
  
  useEffect(() => {
    // Get page title from the route
    const getPageTitle = (pathname: string) => {
      switch(pathname) {
        case '/':
          return 'Home'
        case '/about':
          return 'About'
        case '/contact':
          return 'Contact'
        default:
          return '404 Not Found'
      }
    }
    
    const pageTitle = getPageTitle(location.pathname)
    
    // Announce to screen readers
    const announcement = `Navigated to ${pageTitle} page`
    const ariaLive = document.getElementById('route-announcer')
    if (ariaLive) {
      ariaLive.textContent = announcement
    }
  }, [location])
  
  return (
    <div
      id="route-announcer"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  )
}

export default RouteAnnouncer
