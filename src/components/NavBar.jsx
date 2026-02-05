import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const courseGroups = [
  'Latest',
  'Microsoft',
  'Agentic AI',
  'Generative AI',
  'Digital Marketing',
  'Presentation',
  'Database',
  'Soft Skills',
  'Others'
]

export default function NavBar() {
  const [open, setOpen] = useState(null)

  function toggle(menu) {
    setOpen((prev) => (prev === menu ? null : menu))
  }

  function close() {
    setOpen(null)
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="logo">
          <div className="logo-mark">DM</div>
          <div>
            <div>D Matrix Solutions</div>
            <small style={{ color: '#64748b' }}>Consulting & Academy</small>
          </div>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={close}>About Us</NavLink>

          <div className={`dropdown ${open === 'trainers' ? 'open' : ''}`}>
            <button type="button" className="dropdown-toggle" onClick={() => toggle('trainers')}>
              Trainers ▾
            </button>
            <div className="dropdown-menu">
              <NavLink to="/trainers" onClick={close}>Lead Trainers</NavLink>
              <NavLink to="/trainers" onClick={close}>Guest Experts</NavLink>
            </div>
          </div>

          <div className={`dropdown ${open === 'courses' ? 'open' : ''}`}>
            <button type="button" className="dropdown-toggle" onClick={() => toggle('courses')}>
              Courses ▾
            </button>
            <div className="dropdown-menu">
              {courseGroups.map((label) => (
                <NavLink
                  key={label}
                  to={label === 'Latest' ? '/courses' : `/courses?group=${encodeURIComponent(label)}`}
                  onClick={close}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/clients" onClick={close}>Cliental</NavLink>

          <div className={`dropdown ${open === 'blog' ? 'open' : ''}`}>
            <button type="button" className="dropdown-toggle" onClick={() => toggle('blog')}>
              Blog ▾
            </button>
            <div className="dropdown-menu">
              <NavLink to="/blog" onClick={close}>Insights</NavLink>
              <NavLink to="/case-studies" onClick={close}>Case Studies</NavLink>
            </div>
          </div>

          <div className={`dropdown ${open === 'contact' ? 'open' : ''}`}>
            <button type="button" className="dropdown-toggle" onClick={() => toggle('contact')}>
              Contact ▾
            </button>
            <div className="dropdown-menu">
              <NavLink to="/contact" onClick={close}>Contact Form</NavLink>
              <NavLink to="/contact" onClick={close}>Get in Touch</NavLink>
            </div>
          </div>
        </nav>

        
      </div>
    </header>
  )
}
