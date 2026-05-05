import { motion } from 'framer-motion'

const COLLECTIONS = [
  { id: 1,  src: '/images/collection-1.jpg',  name: 'The Laurent Suite',       tag: 'Cream & Champagne Gold',    style: 'Letterpress' },
  { id: 2,  src: '/images/collection-2.jpg',  name: 'Valentina & Marco',       tag: 'Blush Rose & Antique Gold', style: 'Garden Romance' },
  { id: 3,  src: '/images/collection-3.jpg',  name: 'The Ashford Collection',  tag: 'Sage & Dusty Mauve',        style: 'Botanical' },
  { id: 4,  src: '/images/collection-4.jpg',  name: 'Charlotte & James',       tag: 'Ivory & Midnight Navy',     style: 'Classic Luxe' },
  { id: 5,  src: '/images/collection-5.jpg',  name: 'The Whitmore Suite',      tag: 'Terracotta & Antique Gold', style: 'Boho Luxe' },
  { id: 6,  src: '/images/collection-6.jpg',  name: 'Celeste & Edward',        tag: 'Lavender & Silver Foil',    style: 'Ethereal' },
  { id: 7,  src: '/images/collection-7.jpg',  name: 'The Thornton Collection', tag: 'Forest Green & Gold',       style: 'Regal Botanical' },
  { id: 8,  src: '/images/collection-8.jpg',  name: 'Isabelle & Thomas',       tag: 'White & Warm Gold',         style: 'Modern Minimalist' },
  { id: 9,  src: '/images/collection-9.jpg',  name: 'The Rosecliff Suite',     tag: 'Dusty Blue & Copper',       style: 'Vintage Romance' },
  { id: 10, src: '/images/collection-10.jpg', name: 'The Elara Collection',    tag: 'Black & Rose Gold',         style: 'Art Deco Glamour' },
  { id: 11, src: '/images/collection-11.jpg', name: 'Margaux & Henri',         tag: 'Soft Peach & Gold',         style: 'Garden Party' },
  { id: 12, src: '/images/collection-12.jpg', name: 'The Côte d\'Azur Suite',  tag: 'Azure & Gold',              style: 'Destination Luxe' },
]

/* Back arrow icon */
const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5"/><path d="m12 5-7 7 7 7"/>
  </svg>
)

export default function CollectionsPage({ onBack }) {
  return (
    <motion.div
      className="collections-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Header ── */}
      <div className="collections-hero">
        <div className="collections-hero-bg" />
        <div className="collections-hero-content">
          <motion.button
            className="collections-back-btn"
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ArrowLeft /> Back
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="section-label">Our Portfolio</span>
            <h1 className="collections-title">All Collections</h1>
            <div className="collections-title-line" />
            <p className="collections-subtitle">
              Each suite is a handcrafted chapter of a love story —<br />
              designed with intention, beauty, and lasting elegance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="collections-body">
        <div className="collections-grid">
          {COLLECTIONS.map((item, i) => (
            <motion.div
              key={item.id}
              className="coll-card"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.85, delay: (i % 3) * 0.12 }}
            >
              <div className="coll-frame">
                <motion.img
                  src={item.src}
                  alt={item.name}
                  className="coll-img"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />
                <div className="coll-hover-overlay">
                  <span className="coll-hover-style">{item.style}</span>
                  <button className="coll-hover-btn">View Suite</button>
                </div>
              </div>
              <div className="coll-caption">
                <span className="coll-tag">{item.tag}</span>
                <span className="coll-name">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="collections-cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="gold-divider"><span className="divider-dot" /></div>
          <h2 className="collections-cta-heading">Ready to begin your story?</h2>
          <p className="collections-cta-sub">
            Each of our collections can be fully customised to reflect your unique love story.<br />
            Let us craft something extraordinary together.
          </p>
          <a href="#" className="btn-gold" onClick={onBack}>Book a Consultation</a>
        </motion.div>
      </div>
    </motion.div>
  )
}
