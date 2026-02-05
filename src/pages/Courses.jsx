import { Link, useLocation } from 'react-router-dom'
import courses from '../data/courses.js'
import { useEffect, useMemo, useState } from 'react'

const groupMap = {
  Latest: null,
  Microsoft: [
    'Excel',
    'Power BI',
    'Office Suite',
    'Project Management',
    'Presentation'
  ],
  'Agentic AI': ['Automation'],
  'Generative AI': ['Automation'],
  'Digital Marketing': ['Presentation'],
  Presentation: ['Presentation'],
  Database: ['SQL', 'Databases'],
  'Soft Skills': [],
  Others: []
}

export default function Courses() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const initialGroup = params.get('group') || 'Latest'
  const initialTag = params.get('tag') || 'All'

  const categories = useMemo(() => ['All', ...new Set(courses.map((c) => c.tag))], [])
  const groups = Object.keys(groupMap)

  const [activeGroup, setActiveGroup] = useState('Latest')
  const [active, setActive] = useState('All')

  useEffect(() => {
    if (groups.includes(initialGroup)) {
      setActiveGroup(initialGroup)
    } else {
      setActiveGroup('Latest')
    }
  }, [initialGroup, groups])

  useEffect(() => {
    if (categories.includes(initialTag)) {
      setActive(initialTag)
    } else {
      setActive('All')
    }
  }, [initialTag, categories])

  const filtered = useMemo(() => {
    let base = courses

    if (activeGroup && activeGroup !== 'Latest') {
      const tags = groupMap[activeGroup]
      if (Array.isArray(tags) && tags.length > 0) {
        base = base.filter((course) => tags.includes(course.tag))
      } else if (activeGroup === 'Others') {
        const allTags = Object.values(groupMap)
          .filter((list) => Array.isArray(list) && list.length > 0)
          .flat()
        base = base.filter((course) => !allTags.includes(course.tag))
      }
    }

    if (active !== 'All') {
      base = base.filter((course) => course.tag === active)
    }

    return base
  }, [active, activeGroup])

  return (
    <section className="section">
      <div className="container">
        <span className="badge">Courses</span>
        <h1 className="hero-title">Training tracks built for real-world delivery</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 760 }}>
          Practical courses designed for analysts, leaders, and teams who need measurable outcomes.
        </p>

        <div className="filter-row">
          {groups.map((group) => (
            <button
              key={group}
              type="button"
              className={`filter-chip ${activeGroup === group ? 'active' : ''}`}
              onClick={() => setActiveGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="filter-row" style={{ marginTop: 8 }}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${active === category ? 'active' : ''}`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filtered.map((course) => (
            <article key={course.slug} className="card course-card">
              <div className="course-tag">{course.tag}</div>
              <h3>{course.title}</h3>
              <p>{course.summary}</p>
              <div className="course-meta">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
              <Link to={`/courses/${course.slug}`} className="btn ghost">View Course</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
