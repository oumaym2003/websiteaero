import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const News = lazy(() => import('./pages/News'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1718]">
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}

export default App
