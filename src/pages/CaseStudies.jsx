import { Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'

export default function CaseStudies() {
  return (
    <section className="section">
      <div className="container">
        <span className="badge">Case Studies</span>
        <h1 className="hero-title">Real outcomes from anonymized engagements</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 760 }}>
          A snapshot of how D Matrix Solutions delivers measurable impact across industries while
          respecting client confidentiality.
        </p>

        <div className="case-grid">
          {caseStudies.map((item) => (
            <article key={item.slug} className="card case-card">
              <div className="case-header">
                <h3>{item.title}</h3>
                <span className="case-industry">{item.industry}</span>
              </div>
              <div className="case-block">
                <strong>Challenge</strong>
                <p>{item.challenge}</p>
              </div>
              <Link to={`/case-studies/${item.slug}`} className="btn ghost">View Case Study</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
