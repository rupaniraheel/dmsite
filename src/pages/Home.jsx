import { useEffect, useMemo, useState } from 'react'
import Papa from 'papaparse'
import coursesCsv from '../data/courses.csv?raw'

const heroStats = [
  { label: 'Regions Served', value: 'Pakistan • UAE • KSA' },
  { label: 'Delivery Model', value: 'Onsite + Remote' },
  { label: 'Practice Areas', value: 'Data • BI • Automation' }
]

export default function Home() {
  const [courses, setCourses] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const result = Papa.parse(coursesCsv, { header: true, skipEmptyLines: true })
    setCourses(result.data)
  }, [])

  useEffect(() => {
    if (courses.length === 0) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % courses.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [courses])

  const activeCourse = useMemo(() => courses[active] || null, [courses, active])

  return (
    <>
      <section className="section">
        <div className="container hero">
          <div>
            <span className="badge">Architecting Intelligence • Empowering People</span>
            <h1 className="hero-title">Data consultancy that builds systems — and teams that run them.</h1>
            <p>
              D Matrix Solutions unifies data, automation, and human capability. We design modern data
              platforms, build BI ecosystems, and deliver practitioner-led training that makes adoption
              stick.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <a className="btn" href="/contact">Contact Us</a>
              <a className="btn ghost" href="/courses">Explore Courses</a>
            </div>
          </div>

          <div className="hero-card">
            <h3 style={{ marginTop: 0 }}>Latest Courses</h3>
            <div className="slider">
              {activeCourse && (
                <div className="slide">
                  <div>
                    <p className="badge" style={{ background: 'rgba(14,165,233,0.2)', color: '#fff' }}>
                      {activeCourse.tag}
                    </p>
                    <h3 className="slide-title">{activeCourse.title}</h3>
                    <p className="slide-meta">{activeCourse.level} • {activeCourse.duration}</p>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>{activeCourse.description}</p>
                  </div>
                  <div>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(14,165,233,0.9), rgba(99,102,241,0.9))',
                      borderRadius: '20px',
                      padding: '22px'
                    }}>
                      <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Starts Monthly</div>
                      <div style={{ fontSize: '2.4rem', fontWeight: 700 }}>Live + Hands-on</div>
                      <div style={{ marginTop: 10 }}>Real client case studies and delivery playbooks.</div>
                    </div>
                  </div>
                </div>
              )}
              <div className="slider-controls">
                <button
                  className="control-btn"
                  onClick={() => setActive((prev) => (prev - 1 + courses.length) % courses.length)}
                  aria-label="Previous course"
                >
                  ‹
                </button>
                <button
                  className="control-btn"
                  onClick={() => setActive((prev) => (prev + 1) % courses.length)}
                  aria-label="Next course"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container stats">
          {heroStats.map((stat) => (
            <div key={stat.label} className="stat">
              <div style={{ fontWeight: 600 }}>{stat.label}</div>
              <div style={{ color: 'var(--muted)', marginTop: 6 }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Build + Enable = Adoption</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Build Wing</h3>
              <p>Data platforms, BI systems, and automation that deliver measurable ROI.</p>
            </div>
            <div className="card">
              <h3>Empower Wing</h3>
              <p>Practitioner-led training that blends technical mastery and executive storytelling.</p>
            </div>
            <div className="card">
              <h3>Human–AI Harmony</h3>
              <p>Responsible AI adoption with governance, auditability, and human-in-loop controls.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 24 }}>
            <div>
              <h3>What makes D Matrix different</h3>
              <ul className="list">
                <li>Practitioner edge: We teach what we build.</li>
                <li>Regional relevance: Tailored for Pakistan, UAE, and KSA.</li>
                <li>Adoption-first delivery: We close the handoff gap.</li>
              </ul>
            </div>
            <div>
              <h3>Start a Conversation</h3>
              <p>
                Tell us your goals and we will propose a clear roadmap and delivery plan.
              </p>
              <a className="btn" href="/contact">Book a Session</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
