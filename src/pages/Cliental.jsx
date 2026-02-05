import { useEffect, useMemo, useState } from 'react'

export default function Cliental() {
  const focusAreas = [
    'Enterprise data platforms and KPI governance',
    'Executive dashboards and storytelling adoption',
    'Automation for finance, HR, and operations',
    'Capability building for analytics and AI',
    'Training programs for leadership and teams'
  ]

  const sectors = [
    'Banking & Financial Services',
    'Energy & Utilities',
    'Manufacturing & Engineering',
    'Healthcare & Pharma',
    'Education & Public Sector'
  ]

  const logos = [
    { name: 'State Bank of Pakistan', logo: 'sbp.jfif' },
    { name: 'MCB Bank', logo: 'mcb.png' },
    { name: 'HBL', logo: 'hbl.jfif' },
    { name: 'UBL', logo: 'ubl.png' },
    { name: 'Tetra Pak', logo: 'images.png' },
    { name: 'Standard Chartered Bank' },
    { name: 'HSBC' },
    { name: 'K-Electric' },
    { name: 'Packages Group' },
    { name: 'Engro Foods' }
  ]

  const perPage = 5
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + perPage) % logos.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [logos.length])

  const visible = useMemo(() => {
    const items = []
    for (let i = 0; i < perPage; i += 1) {
      items.push(logos[(index + i) % logos.length])
    }
    return items
  }, [index, logos.length])

  function handlePrev() {
    setIndex((prev) => (prev - perPage + logos.length) % logos.length)
  }

  function handleNext() {
    setIndex((prev) => (prev + perPage) % logos.length)
  }

  return (
    <section className="section">
      <div className="container">
        <span className="badge">Cliental</span>
        <h1 className="hero-title">Trusted by 30+ leading organizations</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 720 }}>
          A selection of top Pakistani and international clients that have partnered with Raheel Rupani
          and D Matrix Solutions for consulting, analytics, and training.
        </p>

        <div className="grid-3" style={{ marginTop: 32 }}>
          <div className="card">
            <h3>Client Outcomes</h3>
            <ul className="list">
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Industries Served</h3>
            <ul className="list">
              {sectors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Engagement Models</h3>
            <ul className="list">
              <li>Project-based delivery with milestones</li>
              <li>Monthly retainers for continuous optimization</li>
              <li>Corporate bootcamps and team upskilling</li>
            </ul>
          </div>
        </div>

        <div className="client-slider card" style={{ marginTop: 36 }}>
          <div className="slider-head">
            <h3 style={{ marginTop: 0 }}>Featured Clients</h3>
          </div>
          <div className="client-strip-wrap">
            <div className="client-strip">
              {visible.map((client) => (
                <div key={client.name} className="client-pill">
                  <div className="client-logo">
                    {client.logo ? (
                      <img src={`/logos/${client.logo}`} alt={`${client.name} logo`} />
                    ) : (
                      <span>{client.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}</span>
                    )}
                  </div>
                  <div className="client-name">{client.name}</div>
                </div>
              ))}
            </div>
            <div className="slider-actions">
              <button className="control-btn dark" onClick={handlePrev} aria-label="Previous logos">‹</button>
              <button className="control-btn dark" onClick={handleNext} aria-label="Next logos">›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
