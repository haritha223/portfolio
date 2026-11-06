import PDFDocument from 'pdfkit'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')
const distDir = path.join(__dirname, '..', 'dist')
const outHaritha = path.join(publicDir, 'Haritha_Resume.pdf')
const outLegacy = path.join(publicDir, 'resume.pdf')

fs.mkdirSync(publicDir, { recursive: true })

const doc = new PDFDocument({
  size: 'A4', // 595.28 x 841.89 points
  margins: { top: 32, bottom: 32, left: 44, right: 44 },
  autoFirstPage: true,
  info: {
    Title: 'Haritha D - Resume',
    Author: 'Haritha D',
    Subject: 'Software Developer Resume',
    Keywords: 'Software Developer, Python, AWS, Flask, Computer Science',
  },
})

const writeStream = fs.createWriteStream(outHaritha)
doc.pipe(writeStream)

const LEFT = 44
const RIGHT = 595.28 - 44 // 551.28
const CONTENT_WIDTH = RIGHT - LEFT

const COLOR_INK = '#111111'
const COLOR_DARK = '#222222'
const COLOR_MUTED = '#444444'
const COLOR_LINE = '#999999'
const COLOR_LINK = '#0d47a1'

function drawDivider() {
  doc.moveDown(0.25)
  const y = doc.y
  doc.moveTo(LEFT, y).lineTo(RIGHT, y).lineWidth(0.65).strokeColor(COLOR_LINE).stroke()
  doc.moveDown(0.35)
}

function sectionTitle(title) {
  doc.moveDown(0.35)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLOR_INK).text(title, LEFT, doc.y)
  doc.moveDown(0.2)
}

function leftRightRow(leftText, rightText, leftFont = 'Helvetica-Bold', rightFont = 'Helvetica', size = 8.8) {
  const currentY = doc.y
  doc.font(leftFont).fontSize(size).fillColor(COLOR_INK).text(leftText, LEFT, currentY, {
    width: CONTENT_WIDTH - 90,
    continued: false,
  })
  doc.font(rightFont).fontSize(size).fillColor(COLOR_DARK).text(rightText, RIGHT - 90, currentY, {
    width: 90,
    align: 'right',
  })
}

function bullet(text, boldWords = []) {
  const bulletX = LEFT + 8
  const textX = LEFT + 16
  const width = RIGHT - textX
  const currentY = doc.y

  doc.font('Helvetica').fontSize(8.5).fillColor(COLOR_DARK).text('•', bulletX, currentY)
  
  doc.font('Helvetica').fontSize(8.5).fillColor(COLOR_DARK)
  doc.text(text, textX, currentY, {
    width,
    lineGap: 1.2,
  })
  doc.moveDown(0.15)
}

// ==================== HEADER ====================
doc.font('Helvetica-Bold').fontSize(20).fillColor(COLOR_INK).text('HARITHA D', LEFT, 32, {
  align: 'center',
  characterSpacing: 0.8,
})
doc.moveDown(0.15)

doc.font('Helvetica').fontSize(8.5).fillColor(COLOR_DARK).text(
  'Coimbatore, Tamil Nadu | +91 7639731889 | maheshwariharitha8@gmail.com',
  LEFT,
  doc.y,
  { align: 'center', lineGap: 1 }
)
doc.moveDown(0.12)

const linksY = doc.y
doc.font('Helvetica').fontSize(8.5).fillColor(COLOR_DARK).text(
  'LinkedIn: linkedin.com/in/haritha-d-6690b3315 | GitHub: github.com/haritha223',
  LEFT,
  linksY,
  { align: 'center' }
)
doc.moveDown(0.4)

// ==================== SUMMARY ====================
sectionTitle('SUMMARY')
doc.font('Helvetica').fontSize(8.7).fillColor(COLOR_DARK).text(
  'Computer Science student (CGPA 7.9) who builds accessibility-focused applications using Python, Flask and AWS. Hackathon runner-up with hands-on experience deploying AI-based tools on the cloud. Seeking a software engineering internship / entry-level role to build practical, user-focused software.',
  LEFT,
  doc.y,
  { width: CONTENT_WIDTH, lineGap: 1.8 }
)
drawDivider()

// ==================== EDUCATION ====================
sectionTitle('EDUCATION')

leftRightRow('B.E. Computer Science – KGISL Institute of Technology, Coimbatore', '2024 – Present')
doc.font('Helvetica').fontSize(8.2).fillColor(COLOR_MUTED).text(
  'CGPA: 7.9 | Relevant coursework: Data Structures, DBMS, Operating Systems, Computer Networks',
  LEFT,
  doc.y,
  { width: CONTENT_WIDTH }
)
doc.moveDown(0.2)

leftRightRow('Higher Secondary (12th) – GSR Matric Higher Secondary School, Coimbatore', '2023 – 2024')
doc.font('Helvetica').fontSize(8.2).fillColor(COLOR_MUTED).text('Percentage: 78%', LEFT, doc.y)
doc.moveDown(0.2)

leftRightRow('Secondary (10th) – GSR Matric Higher Secondary School, Coimbatore', '2021 – 2022')
doc.font('Helvetica').fontSize(8.2).fillColor(COLOR_MUTED).text('Percentage: 84%', LEFT, doc.y)
doc.moveDown(0.3)

// ==================== EXPERIENCE ====================
sectionTitle('EXPERIENCE')

leftRightRow('Cloud Computing Intern – NxtLogics', '2026 (15 days)')
bullet('Built and deployed an AI-powered YouTube dubbing tool using Python and FastAPI that converts video speech into another language.')
bullet('Used Whisper for speech-to-text and NLLB-200 for translation, forming an end-to-end dubbing pipeline.')
bullet('Deployed the application on AWS EC2 and stored media files in AWS S3.')

doc.moveDown(0.15)
doc.font('Helvetica-Bold').fontSize(8.8).fillColor(COLOR_INK).text(
  'Full Stack Development Intern – DT Software Development and Research Pvt. Ltd.',
  LEFT,
  doc.y
)
doc.moveDown(0.35)

// ==================== PROJECTS ====================
sectionTitle('PROJECTS')

leftRightRow('Indian Nagish – Assistive Communication App', 'GitHub', 'Helvetica-Bold', 'Helvetica-Bold')
bullet('Built a real-time communication app for deaf and speech-impaired users that converts speech to text and text to speech, using Python, Google Speech-to-Text API, SpeechRecognition and gTTS.')
bullet('Added support for 11 Indian languages (including Tamil, Hindi, Telugu, Malayalam, Kannada and Bengali), widening access for regional-language users.')
doc.moveDown(0.15)

leftRightRow('Mobility Assistance App for People with Disabilities', 'GitHub', 'Helvetica-Bold', 'Helvetica-Bold')
bullet('Developed a location-based Flask web app that helps wheelchair users find accessible places such as ramps and elevators.')
bullet('Fetched accessibility data from the OpenStreetMap Overpass API and stored results in SQLite for quicker repeat lookups.')
doc.moveDown(0.15)

leftRightRow('Employee Payslip Management System', 'GitHub', 'Helvetica-Bold', 'Helvetica-Bold')
bullet('Built a payroll system in Java and MySQL with role-based access, giving HR and employees separate views and permissions.')
bullet('Automated salary calculation including tax deductions, PF and allowances, removing the need for manual computation.')
doc.moveDown(0.35)

// ==================== TECHNICAL SKILLS ====================
sectionTitle('TECHNICAL SKILLS')
const skills = [
  ['Languages:', 'Python, Java, SQL, C, C++'],
  ['Frameworks & APIs:', 'Flask, FastAPI, Google Maps API, Overpass API, Google Speech-to-Text'],
  ['Databases:', 'MySQL, SQLite'],
  ['Cloud & Tools:', 'AWS (EC2, S3), Git, GitHub, VS Code, Linux'],
  ['Core CS:', 'Data Structures & Algorithms, DBMS, Operating Systems'],
]

skills.forEach(([label, value]) => {
  const currentY = doc.y
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLOR_INK).text(label, LEFT, currentY, { continued: true })
  doc.font('Helvetica').fontSize(8.5).fillColor(COLOR_DARK).text(' ' + value)
  doc.moveDown(0.1)
})
drawDivider()

// ==================== SOFT SKILLS ====================
sectionTitle('SOFT SKILLS')
doc.font('Helvetica').fontSize(8.6).fillColor(COLOR_DARK).text(
  'Teamwork & Collaboration | Adaptability | Self-Learning',
  LEFT,
  doc.y
)
drawDivider()

// ==================== ACHIEVEMENTS ====================
sectionTitle('ACHIEVEMENTS')
bullet('Runner-Up, PyExpo Hackathon')
bullet('Participant, Smart India Hackathon 2025')
doc.moveDown(0.2)

// ==================== CERTIFICATIONS ====================
sectionTitle('CERTIFICATIONS')
bullet('Diploma in Computer Application')
drawDivider()

// ==================== LANGUAGES ====================
doc.font('Helvetica-Bold').fontSize(8.6).fillColor(COLOR_INK).text('Languages: ', LEFT, doc.y, { continued: true })
doc.font('Helvetica').fontSize(8.6).fillColor(COLOR_DARK).text('Tamil, English')

doc.end()

writeStream.on('finish', () => {
  fs.copyFileSync(outHaritha, outLegacy)
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(outHaritha, path.join(distDir, 'Haritha_Resume.pdf'))
    fs.copyFileSync(outHaritha, path.join(distDir, 'resume.pdf'))
  }
  console.log(`Generated crystal clear vector PDF at ${outHaritha} (Page count: ${doc.bufferedPageRange().count})`)
})
