import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const DEFAULT_MESSAGE = ''

export default function Contact() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const course = params.get('course')

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    interest: course ? 'D Matrix Academy' : 'Consulting',
    message: course
      ? `Requesting enrollment details for: ${course}. Please share schedule, fees, and next intake.`
      : DEFAULT_MESSAGE
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!course) return
    setForm((prev) => ({
      ...prev,
      interest: 'D Matrix Academy',
      message: `Requesting enrollment details for: ${course}. Please share schedule, fees, and next intake.`
    }))
  }, [course])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      // Temporary: no server persistence (Vercel static deploy)
      await new Promise((resolve) => setTimeout(resolve, 600))
      setStatus('Thanks! Your request has been received. We will get back to you soon.')
      setForm({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        interest: 'Consulting',
        message: ''
      })
    } catch (err) {
      setStatus('Sorry, something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="contact-hero">
          <div>
            <span className="badge">Contact</span>
            <h1 className="hero-title">Let’s build your data advantage.</h1>
            <p>
              Tell us about your goals. We will propose the right blend of consulting and training
              for your team.
            </p>
            <div className="card" style={{ marginTop: 24 }}>
              <h3>Reach Us</h3>
              <p>Pakistan • UAE • KSA</p>
              <p>+92 315 8988 911</p>
              <p>raheel@dmatrixsolutions.com</p>
            </div>
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Response Time</h3>
              <p>We typically respond within 1–2 business days.</p>
            </div>
          </div>

          <div className="card form-card">
            <h3>Project Inquiry</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div>
                  <label>Full Name</label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label>Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Organization"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Contact number"
                  />
                </div>
              </div>

              <label>Interest</label>
              <select name="interest" value={form.interest} onChange={handleChange}>
                <option>Consulting</option>
                <option>D Matrix Academy</option>
                <option>Automation</option>
                <option>BI & Analytics</option>
                <option>Data Platforms</option>
              </select>

              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project or training needs"
                rows="5"
              />

              <button className="btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {status && <p style={{ marginTop: 12, color: 'var(--muted)' }}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
