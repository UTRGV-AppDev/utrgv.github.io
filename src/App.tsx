import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
import Footer from './Footer'
import NotFound from './NotFound'
import RouteAnnouncer from './RouteAnnouncer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <RouteAnnouncer />
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
