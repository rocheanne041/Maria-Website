import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'

/* ── SVG Icons ── */
const MailIcon   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
const PhoneIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5 19.79 19.79 0 010.22 1H3.2a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L4.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
const PinIcon    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
const IgIcon     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const FbIcon     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>

/* ── Portfolio card — gold-framed, caption below ── */
function PortfolioCard({ src, alt, name, index }) {
  return (
    <motion.div
      className="portfolio-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1, delay: index * 0.18 }}
    >
      <div className="portfolio-frame">
        <motion.img
          src={src}
          alt={alt}
          className="portfolio-img"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      <div className="portfolio-caption">
        <span className="portfolio-tag">Wedding Suite</span>
        <span className="portfolio-name">{name}</span>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site">

      {/* ── NAVBAR ── */}
      <motion.div
        className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ul className="nav-left">
          <li><a href="#" style={{ color: scrolled ? '#553B3D' : 'white' }}>Home</a></li>
          <li><a href="#" style={{ color: scrolled ? '#553B3D' : 'white' }}>Wedding</a></li>
          <li><a href="#" style={{ color: scrolled ? '#553B3D' : 'white' }}>Shop</a></li>
        </ul>
        <div className="nav-logo">
          <span className="logo-name" style={{ color: scrolled ? '#553B3D' : 'white' }}>Maria Gossard</span>
          <span className="logo-sub" style={{ color: scrolled ? '#B08A4F' : 'rgba(255,255,255,0.80)' }}>Designs</span>
        </div>
        <ul className="nav-right">
          <li><a href="#" style={{ color: scrolled ? '#553B3D' : 'white' }}>Portfolio</a></li>
          <li><a href="#" style={{ color: scrolled ? '#553B3D' : 'white' }}>About</a></li>
          <li><a href="#" style={{ color: scrolled ? '#553B3D' : 'white' }}>Contact</a></li>
        </ul>
      </motion.div>

      {/* ── HERO ── */}
      <section className="hero">
        <img className="hero-img" src="/images/hero-bride.jpg" alt="Elegant bride overlooking the water at a luxurious venue" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}>
            <h1>A luxury approach<br />to wedding design.</h1>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}>
            Where paper, color, and celebratory environments<br />become lasting works of art.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
            <a href="#" className="btn-gold">Schedule Your Private Consultation</a>
          </motion.div>
        </div>

      </section>

      {/* ── SECTION 2 — ANNOUNCEMENT ── */}
      <section className="section-announcement">
        <div className="announcement-box">
          <motion.div className="gold-divider" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="divider-dot" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}>
            More than an announcement,<br /><em>it&apos;s the prologue to your perfect day.</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.25 }}>
            Achieve a breathtaking first impression effortlessly with our exquisite, semi-custom suites.<br />
            Are you ready to invite your guests to something beautiful?
          </motion.p>
          <motion.div className="flex-center-gap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="btn-side-line" />
            <a href="#" className="btn-gold">Explore Our Collections</a>
            <div className="btn-side-line" />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 — QUOTE BAR ── */}
      <section className="section-quote-bar">
        <motion.img className="bar-bg-img" src="/images/bar-photo.jpg" alt="" initial={{ scale: 1.04, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
        <motion.div className="quote-bar-overlay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}>
          <span className="section-label">On Paper &amp; In Your Heart</span>
          <blockquote>
            &ldquo;The invitation sets the tone before a single guest arrives &mdash;<br />
            it is the first whisper of a love story waiting to unfold.&rdquo;
          </blockquote>
          <div className="quote-divider" />
        </motion.div>
      </section>

      {/* ── SECTION 4 — PORTFOLIO ── */}
      <section className="section-portfolio">
        <motion.div className="portfolio-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="section-label">Selected Works</span>
          <h2>Portfolio</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="portfolio-grid">
          <PortfolioCard src="/images/portfolio-1.jpg" alt="Alissa & William Wedding Suite" name="Alissa & William" index={0} />
          <PortfolioCard src="/images/portfolio-2.jpg" alt="The Crowe Suite"                name="The Crowe Suite"    index={1} />
          <PortfolioCard src="/images/portfolio-3.jpg" alt="Lottes & Dellasandro Wedding"  name="Lottes & Dellasandro" index={2} />
        </div>

        <motion.div className="portfolio-view-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.4 }}>
          <div className="view-all-line" />
          <a href="#" className="view-all-link">View All Collections</a>
          <div className="view-all-line" />
        </motion.div>
      </section>

      {/* ── SECTION 5 — MEET MARIA ── */}
      <section className="section-meet-maria">
        <div className="meet-maria-bg" />
        <div className="meet-maria-inner">
          <motion.div className="meet-maria-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="section-label">The Visionary</span>
            <h2>Meet Maria</h2>
            <div className="gold-line" />
          </motion.div>

          <div className="maria-layout">
            {/* Photo — arch frame, slides from left */}
            <motion.div className="maria-photo-wrap" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <div className="maria-arch-frame">
                <img className="maria-arch-img" src="/images/maria-portrait.jpg" alt="Maria Gossard — Principal Designer & Founder" />
              </div>
              <div className="maria-arch-circle" />
            </motion.div>

            {/* Text — slides from right */}
            <motion.div className="maria-text" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
              <p>
                Maria Gossard is an artist of atmosphere, known for
                transforming weddings into deeply personal works of
                beauty and meaning.
              </p>
              <span className="maria-signature">Maria Gossard</span>
              <span className="maria-title">Principal Designer &amp; Founder</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — CTA ── */}
      <section className="section-cta">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <span className="section-label">Let&apos;s Begin</span>
          <h2>Your love story awaits</h2>
          <p>We invite you to begin the conversation. Share your vision and<br />let us craft something extraordinary together.</p>
          <a href="#" className="btn-gold">Schedule Your Private Consultation</a>
        </motion.div>
      </section>

      {/* ── SECTION 7 — FINAL QUOTE ── */}
      <section className="section-final-quote">
        <div className="final-quote-bg" />
        <motion.blockquote initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          An invitation is a sensory experience that travels through<br />
          the mail. It is a whispered promise of the romance, beauty,<br />
          and joy that awaits your guests.
        </motion.blockquote>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">

            {/* Column 1 — Brand */}
            <div className="footer-brand">
              <h3>Maria Gossard</h3>
              <p className="footer-brand-title">Principal Designer &amp; Founder</p>
              <div className="footer-brand-line" />
              <p className="footer-tagline">
                Luxury wedding stationery &amp; design,<br />
                crafted with intention and artistry.
              </p>
            </div>

            {/* Column 2 — Navigate */}
            <div className="footer-nav">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#">Weddings</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Column 3 — Connect */}
            <div className="footer-connect">
              <h4>Connect</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-row">
                  <span className="footer-icon"><MailIcon /></span>
                  <a href="mailto:hello@mariagossard.com">hello@mariagossard.com</a>
                </div>
                <div className="footer-contact-row">
                  <span className="footer-icon"><PhoneIcon /></span>
                  <span>+1 (561) 555-0192</span>
                </div>
                <div className="footer-contact-row">
                  <span className="footer-icon"><PinIcon /></span>
                  <span>Dayton, OH</span>
                </div>
              </div>
              <div className="footer-socials">
                <a href="#" className="social-circle" aria-label="Instagram"><IgIcon /></a>
                <a href="#" className="social-circle" aria-label="Facebook"><FbIcon /></a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Maria Gossard Design. All rights reserved.</p>
            <p>Luxury Wedding Stationery &amp; Design</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
