import { useParams, Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return (
      <section className="section">
        <div className="container">
          <h2>Case study not found</h2>
          <Link to="/case-studies" className="btn ghost">Back to Case Studies</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container blog-post">
        <span className="badge">{study.industry}</span>
        <h1 className="hero-title">{study.title}</h1>
        <div className="case-block">
          <strong>Challenge</strong>
          <p>{study.challenge}</p>
        </div>
        <div className="case-block">
          <strong>Solution</strong>
          <p>{study.solution}</p>
        </div>
        <div className="case-block">
          <strong>Impact</strong>
          <p>{study.impact}</p>
        </div>
        <div style={{ marginTop: 24 }}>
          <Link to="/case-studies" className="btn ghost">Back to Case Studies</Link>
        </div>
      </div>
    </section>
  )
}
