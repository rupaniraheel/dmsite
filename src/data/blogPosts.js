const posts = [
  {
    slug: 'agentic-ai-in-enterprise-workflows',
    title: 'Agentic AI in Enterprise Workflows: Where It Fits and Where It Shouldn’t',
    date: '2026-02-01',
    category: 'AI & Automation',
    excerpt:
      'A practical view of agentic AI: high-leverage use cases, governance boundaries, and how to keep humans in the loop.',
    content: [
      'Agentic AI is moving fast, but organizations still need guardrails. The biggest wins today are in constrained workflows where the input/output is auditable: variance investigation, report drafting, and decision support that can be reviewed by a human.',
      'For regulated industries, pair agents with clear approval checkpoints, logging, and role-based access. The goal is not to replace people, but to expand throughput and decision clarity.',
      'In our Automation Specialist and AI-focused tracks, we teach teams to design workflows that respect governance and accountability while still delivering meaningful speedups.'
    ]
  },
  {
    slug: 'power-bi-modeling-for-executive-kpis',
    title: 'Power BI Modeling for Executive KPIs: The 5 Rules That Prevent Rework',
    date: '2026-01-20',
    category: 'BI & Analytics',
    excerpt:
      'Bad KPI models lead to bad decisions. These five modeling rules keep your executive dashboards credible and fast.',
    content: [
      'Executives need trusted KPIs. That starts with a clean semantic layer, a consistent date table, and a measure catalog that defines KPIs once.',
      'We see most rework caused by ambiguous definitions (e.g., “Revenue” vs “Net Revenue”) and inconsistent grain across sources.',
      'In the Power BI DAX and Analytics Pro courses, we teach teams to create robust models that scale from functional dashboards to C‑suite reporting.'
    ]
  },
  {
    slug: 'excel-to-modern-analytics-stack',
    title: 'From Excel to a Modern Analytics Stack: What Changes for Teams',
    date: '2026-01-12',
    category: 'Data Platforms',
    excerpt:
      'Excel is still essential, but not enough. Here’s how teams evolve into governed, scalable analytics.',
    content: [
      'Excel remains the fastest way to explore data, but enterprise reporting demands a single source of truth, lineage, and governance.',
      'The transition often starts with Power Query and Power BI, then moves toward a shared data model and centralized pipelines.',
      'Our Data Analytics Pro track is designed to bridge that gap without losing the agility teams love.'
    ]
  },
  {
    slug: 'rpa-for-finance-close',
    title: 'RPA for the Finance Close: 7 High-Impact Automations',
    date: '2025-12-18',
    category: 'Automation',
    excerpt:
      'Month-end close is repetitive and risk-prone. These automations save time and reduce errors.',
    content: [
      'The best finance automation candidates are reconciliation, report compilation, approvals, and data collection from multiple systems.',
      'Start with a small ROI pipeline, then scale once governance and monitoring are in place.',
      'We cover these patterns in our Power Automate and UiPath courses with templates and real cases.'
    ]
  },
  {
    slug: 'data-storytelling-for-leadership',
    title: 'Data Storytelling for Leadership: Turning Metrics Into Decisions',
    date: '2025-12-03',
    category: 'Leadership',
    excerpt:
      'Leaders don’t need more charts. They need clarity. Storytelling makes metrics actionable.',
    content: [
      'Great executive reporting is structured: context, insight, and action. Without that, dashboards become noise.',
      'Use narrative titles, highlight driver metrics, and show the decision path, not just the outcome.',
      'Our leadership tracks focus on clarity and influence, not just technical reporting.'
    ]
  },
  {
    slug: 'governance-first-data-products',
    title: 'Governance‑First Data Products: How to Build Trust at Scale',
    date: '2025-11-22',
    category: 'Data Governance',
    excerpt:
      'Trust is the real KPI. Governance-first design keeps data credible, accessible, and auditable.',
    content: [
      'Data products fail when ownership is unclear and definitions drift. Start with roles, access, and a shared glossary.',
      'Add lineage, quality checks, and documented refresh schedules to avoid KPI disputes.',
      'We implement governance packs alongside BI systems so teams can scale responsibly.'
    ]
  },
  {
    slug: 'power-platform-for-ops',
    title: 'Power Platform for Operations: Low‑Code Done Right',
    date: '2025-11-05',
    category: 'Low‑Code',
    excerpt:
      'Low‑code can eliminate bottlenecks, but only if teams use enterprise patterns.',
    content: [
      'Successful Power Apps projects have clear ownership, data permissions, and lifecycle management.',
      'The most effective apps are small, focused, and tightly integrated with automation.',
      'We train internal builders to ship responsibly without turning every app into a one‑off.'
    ]
  },
  {
    slug: 'kpi-discipline-in-the-ai-era',
    title: 'KPI Discipline in the AI Era: Measuring What Actually Moves the Needle',
    date: '2025-10-19',
    category: 'Strategy',
    excerpt:
      'AI doesn’t fix bad metrics. Here’s how to keep KPI frameworks tight and decision‑ready.',
    content: [
      'When metrics multiply, decisions slow down. The fix is to define a clear north‑star KPI and a small set of drivers.',
      'AI can surface insights faster, but it cannot replace business clarity.',
      'We teach leaders to choose metrics that align with incentives and strategy.'
    ]
  },
  {
    slug: 'python-for-analysts-not-developers',
    title: 'Python for Analysts (Not Developers): The 80/20 Toolkit',
    date: '2025-10-02',
    category: 'Data Science',
    excerpt:
      'Analysts don’t need to become engineers. They need a focused toolkit that delivers results fast.',
    content: [
      'Pandas, visualization, and a clean workflow are enough to transform reporting speed and depth.',
      'We emphasize repeatability: notebooks, clean data models, and reusable analysis blocks.',
      'Our Python analytics courses focus on decision support, not computer science.'
    ]
  },
  {
    slug: 'data-maturity-audit-what-to-expect',
    title: 'Data Maturity Audit: What to Expect and How to Prepare',
    date: '2025-09-18',
    category: 'Consulting',
    excerpt:
      'An audit should feel like a roadmap, not a report. Here’s what we assess and why it matters.',
    content: [
      'We evaluate source systems, reporting gaps, data quality, governance, and skill readiness.',
      'The output is a phased roadmap with quick wins and long‑term architecture guidance.',
      'Clients use the audit to align stakeholders and accelerate execution.'
    ]
  }
]

export default posts
