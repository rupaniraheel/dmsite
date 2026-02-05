export default function About() {
  return (
    <>
      <section className="section">
        <div className="container about-hero">
          <div>
            <span className="badge">Corporate Profile</span>
            <h1 className="hero-title">We architect intelligence and empower people to act on it.</h1>
            <p>
              D Matrix Solutions is a hybrid consulting and capability-building firm. We implement
              high-performance data ecosystems and automation, then train teams to use them — ensuring
              adoption, performance improvement, and long-term independence.
            </p>
          </div>
          <div className="about-panel">
            <h3 style={{ marginTop: 0 }}>Vision</h3>
            <p>
              To be the catalyst for a future where organizations in Pakistan and the GCC are powered by
              intelligent data ecosystems and led by a workforce mastered in strategic, human-centric innovation.
            </p>
            <h3>Mission</h3>
            <p>
              Architect data and automation infrastructures and provide practitioner-led training that fuses
              technical mastery with essential soft skills.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-3">
          <div className="card">
            <h3>Who We Serve</h3>
            <p>
              CEOs, COOs, CFOs, CHROs, and leaders of strategy, analytics, finance, operations, and IT.
            </p>
          </div>
          <div className="card">
            <h3>What We Deliver</h3>
            <p>
              Unified reporting, governance-ready data models, automation, and decision systems that scale.
            </p>
          </div>
          <div className="card">
            <h3>How We Work</h3>
            <p>
              A structured, low-risk methodology: discover, architect, build, and enable.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">Delivery Methodology</h2>
          <div className="grid-3">
            <div className="card">
              <h4>Discover & Diagnose</h4>
              <p>Data maturity audit, KPI needs, quality scan, and quick-win roadmap.</p>
            </div>
            <div className="card">
              <h4>Architect & Design</h4>
              <p>Target architecture, security model, pipeline and dashboard strategy.</p>
            </div>
            <div className="card">
              <h4>Build & Enable</h4>
              <p>Pipeline build, BI delivery, training handover, and adoption tracking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
            <div>
              <h3>D Matrix Academy</h3>
              <p>
                We produce T-shaped professionals who can execute and communicate — from analytics and BI
                to automation and AI adoption.
              </p>
              <ul className="list">
                <li>Data Analytics Pro (Excel + Power BI)</li>
                <li>Automation Specialist (RPA + Agentic AI)</li>
                <li>Low-Code Developer (Power Platform)</li>
              </ul>
            </div>
            <div>
              <h3>Human Skills Tracks</h3>
              <ul className="list">
                <li>Data Storytelling for Leaders</li>
                <li>Strategic Decision-Making in the AI Era</li>
                <li>EQ for Tech & Hybrid Teams</li>
              </ul>
              <a className="btn" href="/courses" style={{ marginTop: 16 }}>View All Tracks</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
