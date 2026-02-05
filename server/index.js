import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json({ limit: '1mb' }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

function toCsvRow(values) {
  return values
    .map((val) => {
      const safe = String(val ?? '').replace(/"/g, '""')
      return `"${safe}"`
    })
    .join(',')
}

app.post('/api/contact', (req, res) => {
  const { fullName, company, email, phone, interest, message } = req.body || {}
  if (!fullName || !email) {
    return res.status(400).json({ ok: false, error: 'Name and email are required.' })
  }

  const dataDir = path.join(__dirname, '..', 'data')
  const filePath = path.join(dataDir, 'contacts.csv')
  fs.mkdirSync(dataDir, { recursive: true })

  const header = [
    'Full Name',
    'Company',
    'Email',
    'Phone',
    'Interest',
    'Message',
    'Submitted At'
  ]

  const row = [
    fullName,
    company,
    email,
    phone,
    interest,
    message,
    new Date().toISOString()
  ]

  const exists = fs.existsSync(filePath)
  const content = `${exists ? '' : toCsvRow(header) + '\n'}${toCsvRow(row)}\n`

  fs.appendFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ ok: false, error: 'Failed to save submission.' })
    }
    return res.json({ ok: true })
  })
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

const port = process.env.PORT || 5174
app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`)
})
