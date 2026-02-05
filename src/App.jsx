import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cliental from './pages/Cliental.jsx'
import Trainers from './pages/Trainers.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CaseStudyDetail from './pages/CaseStudyDetail.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'

function Placeholder({ title }) {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p>Content will be added next. The layout and data hooks are ready.</p>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/clients" element={<Cliental />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Placeholder title="Not Found" />} />
      </Routes>
      <Footer />
    </>
  )
}
