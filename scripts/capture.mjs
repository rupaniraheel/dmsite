import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'

const args = process.argv.slice(2)
const baseIndex = args.indexOf('--base')
const baseUrl = baseIndex !== -1 ? args[baseIndex + 1] : 'http://localhost:5173'

const routes = [
  '/',
  '/about',
  '/trainers',
  '/courses',
  '/courses/microsoft-excel-for-basic-to-advance',
  '/clients',
  '/blog',
  '/blog/agentic-ai-in-enterprise-workflows',
  '/case-studies',
  '/case-studies/tier-1-bank-kpi-unification',
  '/contact'
]

const outputRoot = path.resolve('screenshots')
const desktopDir = path.join(outputRoot, 'desktop')
const mobileDir = path.join(outputRoot, 'mobile')

fs.mkdirSync(desktopDir, { recursive: true })
fs.mkdirSync(mobileDir, { recursive: true })

const devices = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 390, height: 844, isMobile: true, hasTouch: true }
]

function toFilename(route) {
  return route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '_')
}

const browser = await chromium.launch()

for (const device of devices) {
  const context = await browser.newContext({
    viewport: { width: device.width, height: device.height },
    isMobile: device.isMobile || false,
    hasTouch: device.hasTouch || false,
    deviceScaleFactor: device.isMobile ? 2 : 1
  })

  const page = await context.newPage()

  for (const route of routes) {
    const url = `${baseUrl}${route}`
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForTimeout(800)

    const file = path.join(
      device.name === 'desktop' ? desktopDir : mobileDir,
      `${toFilename(route)}.png`
    )

    await page.screenshot({ path: file, fullPage: true })
    console.log(`Saved ${file}`)
  }

  await context.close()
}

await browser.close()
