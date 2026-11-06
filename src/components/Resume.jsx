import { useState, useEffect, useRef } from 'react'
import { Download, Maximize2, ExternalLink, FileText, Check, X } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Resume() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const resumeContainerRef = useRef(null)

  // Direct file download without opening a new page or tab
  const handleDownload = async (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setDownloading(true)
    try {
      const response = await fetch('/Haritha_Resume.pdf?v=2')
      if (!response.ok) throw new Error('Network response was not ok')
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.setAttribute('download', 'Haritha_Resume.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)

      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 2500)
    } catch (err) {
      const link = document.createElement('a')
      link.href = '/Haritha_Resume.pdf'
      link.setAttribute('download', 'Haritha_Resume.pdf')
      link.target = '_self'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 2500)
    } finally {
      setDownloading(false)
    }
  }

  // Handle escape key to exit full-screen mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    if (isFullscreen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFullscreen])

  return (
    <section className="section resume" id="resume">
      <SectionHeading
        index="06"
        label="Resume"
        title="Curriculum Vitae."
        intro="An embedded preview of my actual resume detailing academic coursework, internship experience, AI and assistive technology projects, and technical skills."
      />

      <Reveal>
        <div className="resume__wrapper" ref={resumeContainerRef}>
          {/* Top toolbar of the resume preview */}
          <div className="resume__toolbar">
            <div className="resume__toolbar-info">
              <div className="resume__doc-badge">
                <FileText size={16} className="resume__doc-icon" aria-hidden="true" />
                <span className="resume__doc-name">Haritha_Resume.pdf</span>
              </div>
              <div className="resume__doc-meta mono-label">
                <span>A4</span>
                <span className="resume__meta-dot">•</span>
                <span>1 Page</span>
                <span className="resume__meta-dot">•</span>
                <span className="resume__meta-status">Crystal Clear Vector PDF</span>
              </div>
            </div>

            {/* Top-right corner action buttons: Full-screen and prominent Download */}
            <div className="resume__toolbar-actions">
              {/* Optional external link button to open directly in a new tab */}
              <a
                href="/Haritha_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume__btn resume__btn--ghost"
                title="Open PDF directly in a new tab"
                aria-label="Open PDF in a new tab"
              >
                <ExternalLink size={14} aria-hidden="true" />
                <span className="resume__btn-label">Open Tab</span>
              </a>

              {/* Full-screen preview button */}
              <button
                type="button"
                className="resume__btn resume__btn--ghost"
                onClick={() => setIsFullscreen(true)}
                aria-label="Open full-screen preview"
                title="Expand to full screen"
              >
                <Maximize2 size={14} aria-hidden="true" />
                <span className="resume__btn-label">Full Screen</span>
              </button>

              {/* Clearly visible download button in top-right corner */}
              <button
                type="button"
                className={`resume__btn resume__btn--download ${downloaded ? 'resume__btn--downloaded' : ''}`}
                onClick={handleDownload}
                disabled={downloading}
                aria-label="Download Haritha_Resume.pdf directly"
                title="Download PDF to your computer"
              >
                {downloaded ? (
                  <>
                    <Check size={16} aria-hidden="true" />
                    <span>Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download size={16} className={downloading ? 'resume__spin' : ''} aria-hidden="true" />
                    <span>{downloading ? 'Downloading...' : 'Download PDF'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Embedded Viewer Canvas */}
          <div className="resume__preview-viewport">
            <object
              data="/Haritha_Resume.pdf?v=2#toolbar=0&navpanes=0&view=FitH"
              type="application/pdf"
              className="resume__iframe"
            >
              <iframe
                src="/Haritha_Resume.pdf?v=2#toolbar=0&navpanes=0&view=FitH"
                title="Haritha D. Resume Embedded PDF Viewer"
                className="resume__iframe"
                loading="eager"
              />
            </object>
          </div>

          {/* Bottom caption / mobile quick assistance */}
          <div className="resume__footer-bar">
            <p className="resume__footer-hint">
              <span className="mono-label">Actual PDF Document</span> — Displayed via embedded viewer with crystal-clear vector text. Click the download icon anytime to save a direct copy.
            </p>
            <button
              type="button"
              className="resume__footer-download-btn"
              onClick={handleDownload}
            >
              <Download size={14} aria-hidden="true" />
              <span>Save Haritha_Resume.pdf</span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Full-screen Preview Modal */}
      {isFullscreen && (
        <div
          className="resume__modal"
          role="dialog"
          aria-modal="true"
          aria-label="Full-Screen Resume Preview"
        >
          <div
            className="resume__modal-backdrop"
            onClick={() => setIsFullscreen(false)}
          />

          <div className="resume__modal-container">
            <header className="resume__modal-header">
              <div className="resume__modal-title">
                <FileText size={18} aria-hidden="true" />
                <div>
                  <h3>Haritha D. — Resume</h3>
                  <span className="mono-label">Full-Screen Document Preview</span>
                </div>
              </div>

              <div className="resume__modal-actions">
                <button
                  type="button"
                  className="resume__btn resume__btn--download"
                  onClick={handleDownload}
                  title="Download Haritha_Resume.pdf"
                >
                  <Download size={15} aria-hidden="true" />
                  <span>Download PDF</span>
                </button>

                <button
                  type="button"
                  className="resume__modal-close"
                  onClick={() => setIsFullscreen(false)}
                  aria-label="Close full-screen preview"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            </header>

            <div className="resume__modal-body">
              <iframe
                src="/Haritha_Resume.pdf?v=2#toolbar=1&navpanes=0"
                title="Haritha D. Full-Screen Resume Viewer"
                className="resume__modal-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
