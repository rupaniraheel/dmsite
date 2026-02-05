const courses = [
  {
    title: 'Microsoft Excel for Basic to Advance',
    level: 'Beginner to Advanced',
    duration: '4 Weeks',
    tag: 'Excel',
    summary: 'Build strong Excel foundations and advance into models, pivots, and performance reporting.'
  },
  {
    title: 'Microsoft Excel Dashboards',
    level: 'Intermediate',
    duration: '2 Weeks',
    tag: 'Excel',
    summary: 'Design executive-ready dashboards with clean layouts, KPIs, and interactive reporting.'
  },
  {
    title: 'Microsoft Excel Master Class',
    level: 'Advanced',
    duration: '3 Weeks',
    tag: 'Excel',
    summary: 'Power Query, Power Pivot, modeling discipline, and advanced analysis techniques.'
  },
  {
    title: 'Advance Dashboard Reporting using Excel',
    level: 'Advanced',
    duration: '2 Weeks',
    tag: 'Excel',
    summary: 'Build dynamic reporting systems with automation, advanced formulas, and KPI logic.'
  },
  {
    title: 'Excel Machine Learning',
    level: 'Intermediate',
    duration: '2 Weeks',
    tag: 'Excel',
    summary: 'Apply machine learning concepts using Excel-based workflows and practical examples.'
  },
  {
    title: 'Business Application using Power Apps (No Code, Less Code)',
    level: 'Intermediate',
    duration: '3 Weeks',
    tag: 'Power Platform',
    summary: 'Build business apps with Power Apps, Dataverse concepts, and governance basics.'
  },
  {
    title: 'RPA using Power Automate',
    level: 'Intermediate',
    duration: '3 Weeks',
    tag: 'Automation',
    summary: 'Design and deploy automation flows with approvals, notifications, and governance.'
  },
  {
    title: 'RPA using UiPath',
    level: 'Intermediate',
    duration: '3 Weeks',
    tag: 'Automation',
    summary: 'Build structured UiPath automations for repetitive enterprise workflows.'
  },
  {
    title: 'Analyzing and Visualizing Power BI',
    level: 'Beginner to Intermediate',
    duration: '4 Weeks',
    tag: 'Power BI',
    summary: 'Transform data into decisions with strong modeling, DAX basics, and storytelling.'
  },
  {
    title: 'Mastering Excel Power Pivot and Power Query',
    level: 'Advanced',
    duration: '2 Weeks',
    tag: 'Excel',
    summary: 'Create scalable data models, transformations, and reusable reporting layers.'
  },
  {
    title: 'Mastering Power BI DAX Formulas',
    level: 'Advanced',
    duration: '3 Weeks',
    tag: 'Power BI',
    summary: 'Deep dive into DAX for KPIs, performance tuning, and enterprise analytics.'
  },
  {
    title: 'Microsoft Project',
    level: 'Intermediate',
    duration: '2 Weeks',
    tag: 'Project Management',
    summary: 'Plan, track, and control projects with schedules, dependencies, and resource views.'
  },
  {
    title: 'Microsoft Office Suit (Word, Excel, Power Point, Outlook)',
    level: 'Beginner',
    duration: '2 Weeks',
    tag: 'Office Suite',
    summary: 'Core productivity skills across Word, Excel, PowerPoint, and Outlook.'
  },
  {
    title: 'Microsoft Access',
    level: 'Beginner',
    duration: '2 Weeks',
    tag: 'Databases',
    summary: 'Design basic databases, forms, queries, and reporting workflows.'
  },
  {
    title: 'Microsoft SQL Server Querying and Optimization',
    level: 'Intermediate',
    duration: '3 Weeks',
    tag: 'SQL',
    summary: 'Write efficient queries, optimize performance, and build reliable data extractions.'
  },
  {
    title: 'Data Analysis using Python',
    level: 'Intermediate',
    duration: '4 Weeks',
    tag: 'Python',
    summary: 'Pandas, visualization, and decision-focused analytics workflows.'
  },
  {
    title: 'Pythonic Excel – Python for Excel Users',
    level: 'Intermediate',
    duration: '3 Weeks',
    tag: 'Python',
    summary: 'Bridge Excel workflows with Python automation and analysis.'
  },
  {
    title: 'Pythonic Dashboard',
    level: 'Intermediate',
    duration: '3 Weeks',
    tag: 'Python',
    summary: 'Build dashboarding workflows using Python data pipelines and visuals.'
  },
  {
    title: 'Data Analysis using R Language',
    level: 'Intermediate',
    duration: '4 Weeks',
    tag: 'R',
    summary: 'Statistical analysis, data manipulation, and insights with R.'
  },
  {
    title: 'Excel Automation using Macros / VBA',
    level: 'Intermediate',
    duration: '3 Weeks',
    tag: 'Excel',
    summary: 'Automate repetitive tasks and build macro-driven templates.'
  },
  {
    title: 'Microsoft Excel for Sales Professional',
    level: 'Beginner',
    duration: '2 Weeks',
    tag: 'Excel',
    summary: 'Sales analytics, pipeline tracking, and performance reporting.'
  },
  {
    title: 'Microsoft Excel for Finance Professional',
    level: 'Intermediate',
    duration: '2 Weeks',
    tag: 'Excel',
    summary: 'Financial models, reconciliation, variance analysis, and reporting.'
  },
  {
    title: 'Microsoft Excel for HR Professional',
    level: 'Beginner',
    duration: '2 Weeks',
    tag: 'Excel',
    summary: 'HR analytics, workforce dashboards, and reporting templates.'
  },
  {
    title: 'Advance Presentation / Infographics Skills using Power Point',
    level: 'Intermediate',
    duration: '2 Weeks',
    tag: 'Presentation',
    summary: 'Design executive-ready decks and infographics for decision-making.'
  },
  {
    title: 'Blockchain Beyond the Basics',
    level: 'Beginner',
    duration: '2 Weeks',
    tag: 'Blockchain',
    summary: 'Understand blockchain fundamentals and practical business use cases.'
  }
]

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const withSlugs = courses.map((course) => ({
  ...course,
  slug: toSlug(course.title),
  outline: [
    'Concepts and foundations',
    'Hands-on labs and practice',
    'Applied case study and delivery playbook'
  ]
}))

export default withSlugs
