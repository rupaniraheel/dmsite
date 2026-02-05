import { Link } from 'react-router-dom'
import posts from '../data/blogPosts.js'

export default function Blog() {
  return (
    <section className="section">
      <div className="container">
        <span className="badge">Blog</span>
        <h1 className="hero-title">Insights on data, automation, and leadership</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 720 }}>
          Practical perspectives based on our consulting experience and training programs.
        </p>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="card blog-card">
              <div className="blog-meta">
                <span className="blog-chip">{post.category}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="btn ghost">Read More</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
