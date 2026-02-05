import { useEffect, useMemo, useState } from 'react'

export default function Trainers() {
  const [expanded, setExpanded] = useState(false)
  const testimonials = [
    {
      name: 'Tayab – Airlink',
      quote:
        'I had the privilege of working with Raheel during a Power BI session. The experience was transformative and exceeded expectations. Raheel is an exceptional trainer with profound expertise in Data Analytics.'
    },
    {
      name: 'Mukham Wali – HR Head – Aga Khan Planning & Building Services',
      quote:
        'Mr. Rupani conducted a comprehensive training on advanced Excel which was tailored. It was well planned and focused. Well done.'
    },
    {
      name: 'Irfan Siddique – Assistant President – Treasury – MCB',
      quote:
        'It’s nice to have a knowledgeable trainer. We learned a lot and highly recommend Mr. Raheel Rupani for such sessions.'
    },
    {
      name: 'M. Bilal Karim – Regional Manager – Sales – B. Braun Pakistan',
      quote:
        'Course design and structure was very good. Session was very informative and contained a lot of knowledge. Communication and teaching were excellent.'
    },
    {
      name: 'Tariq Ahmed – Manager – Monitoring & Evaluation – Agha Khan Rural Support Program',
      quote:
        'The aim of the training was to facilitate basic level and to some extent advanced Excel learning. The facilitator was successful in transferring knowledge.'
    },
    {
      name: 'Boris Tatyana – ECA OFPM Process Coach – Tetra Pak Ukraine',
      quote:
        'The instructor’s approach was informative and engaging, making complex topics seem simple. The hands-on exercises and real-world examples provided a solid foundation for Power BI.'
    },
    {
      name: 'Keshtova Kseniya – Logistic Analyst – Moscow',
      quote:
        'The Power BI training exceeded expectations. The trainer’s deep knowledge and expertise were evident throughout the session.'
    }
  ]
  const [active, setActive] = useState(0)
  const perPage = 4

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + perPage) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const visible = useMemo(() => {
    const items = []
    for (let i = 0; i < perPage; i += 1) {
      items.push(testimonials[(active + i) % testimonials.length])
    }
    return items
  }, [testimonials, active])

  return (
    <section className="section">
      <div className="container">
        <div className="trainer-hero">
          <div>
            <div className="trainer-name">
              <div className="trainer-avatar">
                <img src="/raheel-1.jpeg" alt="Raheel Rupani" />
              </div>
              <h1 className="hero-title">Raheel Rupani</h1>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>
              CEO | Data Consultant | International Trainer
            </p>
            <p>
              Senior-level Information Technology trainer and consultant with over two decades of
              experience across data analytics, automation, and AI. Raheel has led impactful Data Analytics
              projects for local and international clients and is known for practical, hands-on delivery
              that turns complex topics into clear outcomes.
            </p>
            {expanded && (
              <>
                <p>
                  His work spans Power BI, Excel, RPA, and data platforms, with a focus on making analytics
                  adoption stick inside organizations. He has delivered programs for banking, manufacturing,
                  public sector, and technology teams, and is known for translating complex data concepts into
                  decision-ready insight.
                </p>
                <p>
                  Raheel’s training style blends technical depth with executive communication, ensuring teams
                  can both build and explain their insights with confidence.
                </p>
              </>
            )}
            <button
              type="button"
              className="btn ghost"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
            
          </div>
          <div className="trainer-card">
            <h3>Certifications</h3>
            <ul className="list">
              <li>Microsoft Certified Office Specialist (Excel 2010)</li>
              <li>Analyzing and Visualizing using Power BI and Excel</li>
              <li>IBM Certified Cognos Report Author</li>
              <li>Certified Data Analyst using R and Python</li>
              <li>Certified Blockchain Business Foundation</li>
              <li>Udacity Bertelsmann Data Track (Scholarship)</li>
            </ul>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: 32 }}>
          <div className="card">
            <h3>Core Expertise</h3>
            <ul className="list">
              <li>Data Analytics & Business Intelligence</li>
              <li>Power BI, Excel, DAX, and data modeling</li>
              <li>RPA and workflow automation</li>
              <li>Machine Learning foundations</li>
              <li>Python and R for analytics</li>
            </ul>
          </div>
          <div className="card">
            <h3>Industries Served</h3>
            <ul className="list">
              <li>Banking and Finance</li>
              <li>Manufacturing and Engineering</li>
              <li>IT and Education</li>
              <li>Healthcare and Services</li>
              <li>Public sector organizations</li>
            </ul>
          </div>
          <div className="card">
            <h3>Training Impact</h3>
            <ul className="list">
              <li>95% positive feedback for public programs</li>
              <li>Delivered workshops across Pakistan, GCC, USA, Africa</li>
              <li>Online and onsite formats with tailored curricula</li>
            </ul>
          </div>
        </div>

        <div className="trainer-testimonial card" style={{ marginTop: 24 }}>
          <div className="slider-head">
            <h3 style={{ marginTop: 0 }}>Client Testimonials</h3>
            <div className="slider-actions">
              <button
                className="control-btn dark"
                onClick={() => setActive((prev) => (prev - perPage + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonials"
              >
                ‹
              </button>
              <button
                className="control-btn dark"
                onClick={() => setActive((prev) => (prev + perPage) % testimonials.length)}
                aria-label="Next testimonials"
              >
                ›
              </button>
            </div>
          </div>
          <div className="testimonial-grid">
            {visible.map((item) => (
              <div key={item.name} className="testimonial-card">
                <p style={{ fontStyle: 'italic', color: 'var(--muted)' }}>&quot;{item.quote}&quot;</p>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
