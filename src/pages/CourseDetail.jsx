import { useParams, Link } from 'react-router-dom'
import courses from '../data/courses.js'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = courses.find((item) => item.slug === slug)

  if (!course) {
    return (
      <section className="section">
        <div className="container">
          <h2>Course not found</h2>
          <Link to="/courses" className="btn ghost">Back to Courses</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container blog-post">
        <span className="badge">{course.tag}</span>
        <h1 className="hero-title">{course.title}</h1>
        <div className="course-meta" style={{ marginTop: 10 }}>
          <span>{course.level}</span>
          <span>{course.duration}</span>
        </div>
        <p style={{ marginTop: 18 }}>{course.summary}</p>

        <div className="card" style={{ marginTop: 24 }}>
          <h3>Course Outline</h3>
          <ul className="list">
            {course.outline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 24 }}>
          <Link
            to={`/contact?course=${encodeURIComponent(course.title)}`}
            className="btn"
          >
            Request Enrollment
          </Link>
          <Link to="/courses" className="btn ghost" style={{ marginLeft: 12 }}>Back to Courses</Link>
        </div>
      </div>
    </section>
  )
}
