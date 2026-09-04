import { useEffect, useRef, useState } from 'react'
import './App.css'

const asset = (name: string) => `/figma-assets/${name}`

type Program = {
  duration: string
  grades: string
  title: string
  description: string
  image: string
  overlay?: 'light' | 'medium'
}

type CityDestination = {
  name: string
  description: string
  programs: string
  image: string
}

const programs: Program[] = [
  {
    duration: '1-2 Weeks',
    grades: 'Grades 3–12',
    title: 'School Immersion Programs',
    description:
      'Experience authentic school life in China through classes, campus activities, and connections with local students.',
    image: 'program-school-exact.png',
    overlay: 'light',
  },
  {
    duration: '5–10 DAYS',
    grades: 'Grades 3–12',
    title: 'Chinese Cultural Discovery',
    description:
      'Discover China through history, heritage, food, arts, traditions, and hands-on cultural experiences.',
    image: 'program-culture-exact.jpg',
    overlay: 'medium',
  },
  {
    duration: '1–2 WEEKS',
    grades: 'Grades 3–12',
    title: 'Chinese Language Programs',
    description:
      'Learn Chinese in China with our professional teaching team through structured lessons and real-life cultural immersion.',
    image: 'program-language-exact.jpg',
    overlay: 'light',
  },
]

const trustItems = [
  {
    icon: 'book-open-exact.svg',
    title: 'Curriculum-Aligned',
    text: 'Every trip is intentionally designed with robust educational outcomes aligned with international standards.',
  },
  {
    icon: 'users-exact.svg',
    title: 'Experienced Local Guides',
    text: 'Bilingual professional educators and safety officers accompany every journey, every step of the way.',
  },
  {
    icon: 'shield-exact.svg',
    title: 'Safety First',
    text: 'Industry-leading risk management protocols with 24/7 localized support and direct communication channels.',
  },
  {
    icon: 'globe-exact.svg',
    title: 'Cultural Depth',
    text: 'Deep meaningful engagement that goes past sightseeing to facilitate genuine cross-cultural friendships.',
  },
]

const testimonials = [
  {
    quote:
      'People here are really kind and happy. I quickly got along well with others. I was worried that I wouldn’t be able to adapt, but when I arrived, I found everyone here so kind. I felt relieved.',
    avatar: 'avatar-merin-morajon.png',
    name: 'Miss Merin Morajon',
    meta: 'Student, Grade 10',
    program: 'School Immersion Program',
  },
  {
    quote:
      'The teachers here are really kind and supportive. They’re very understanding of students, and they encourage us to follow our dreams.',
    avatar: 'avatar-sasiya-aeksari.png',
    name: 'Master Sasiya Aeksari',
    meta: 'Student, Grade 7',
    program: 'School Immersion Program',
  },
  {
    quote:
      'The study tour is a really good way for kids to understand Chinese culture, and it’s also very interesting for us.',
    avatar: 'avatar-nikita-bilenko.png',
    name: 'Nikita Bilenko',
    meta: 'Student, Grade 7',
    program: 'School Immersion Program',
  },
]

const pastProgramCountries: Record<string, string> = {
  us: 'UNITED STATES',
  ca: 'CANADA',
  se: 'SWEDEN',
  gb: 'UNITED KINGDOM',
  ch: 'SWITZERLAND',
  fi: 'FINLAND',
  my: 'MALAYSIA',
  sg: 'SINGAPORE',
  au: 'AUSTRALIA',
  nz: 'NEW ZEALAND',
  cn: 'CHINA',
  tw: 'CHINA',
}

const navItems = [
  {
    label: 'LOCATIONS',
    items: ['Shenzhen', 'Shanghai', 'Hainan', 'Fujian', 'Wuhan', 'Chongqing', 'Dalian', 'Inner Mongolia', 'Beijing', 'Xi’an', 'Guangzhou'],
  },
  {
    label: 'CHINESE COURSES',
    items: ['Intensive Chinese Course', 'HSK Preparation', 'Customized Chinese Course', 'Corporate Chinese Training'],
  },
  {
    label: 'PROGRAMS',
    items: [
      'School Immersion Programs',
      'Chinese Cultural Discovery Programs',
      'Chinese Language Programs',
      'Global Education Trips',
      'Summer & Winter Camps',
    ],
  },
  {
    label: 'SERVICES',
    items: ['Accommodation', 'Meals', 'Safety & Student Support', 'Teaching Team', 'Course Materials'],
  },
  {
    label: 'ABOUT',
    items: ['Maple Leaf Educational Systems', 'Maple Leaf Edu-Travel', 'Maple Leaf K–12 Chinese', 'FAQs'],
  },
]

const collagePhotos = [
  {
    src: 'collage-school-immersion-opt.jpg',
    alt: 'Students taking part in a hands-on Chinese cultural activity',
  },
  {
    src: 'collage-language-learning-opt.jpg',
    alt: 'Student receiving guided instruction during an interactive activity',
  },
  {
    src: 'collage-cultural-discovery-opt.jpg',
    alt: 'International and local students learning together in a classroom',
  },
  {
    src: 'collage-educational-travel-opt.jpg',
    alt: 'Students participating in an educational journey in China',
  },
]

const cityDestinations: CityDestination[] = [
  {
    name: 'Shenzhen',
    description:
      'Study Chinese and join local school life in Shenzhen, one of China’s leading cities for technology, innovation, and international education.',
    programs: 'School Immersion · Chinese Language',
    image: 'city-shenzhen.png',
  },
  {
    name: 'Haikou · Hainan',
    description:
      'Study Chinese and experience school life in Haikou, a tropical coastal city known for its warm climate, island culture, and relaxed learning environment.',
    programs: 'School Immersion · Chinese Language',
    image: 'city-hainan.png',
  },
  {
    name: 'Wuhan',
    description:
      'Study Chinese and join local school life in Wuhan, one of central China’s major centers for education, universities, and student life.',
    programs: 'School Immersion · Chinese Language',
    image: 'city-wuhan.png',
  },
  {
    name: 'Hohhot · Inner Mongolia',
    description:
      'Study Chinese and experience school life in Hohhot, with opportunities to discover Inner Mongolia’s grasslands, local communities, and distinctive traditions.',
    programs: 'School Immersion · Chinese Language',
    image: 'city-inner-mongolia.png',
  },
  {
    name: 'Shanghai',
    description:
      'Join local school life in Shanghai, China’s leading international metropolis and a major center for business, culture, and education.',
    programs: 'School Immersion',
    image: 'city-shanghai.png',
  },
  {
    name: 'Chongqing',
    description:
      'Join local school life in Chongqing, one of China’s largest cities, known for its dramatic mountain landscape, distinctive urban character, and local culture.',
    programs: 'School Immersion',
    image: 'city-chongqing.png',
  },
  {
    name: 'Beijing',
    description:
      'Discover Beijing, China’s capital and cultural heart, home to the Forbidden City, hutongs, the Great Wall, and centuries of imperial history.',
    programs: 'Chinese Cultural Discovery',
    image: 'city-beijing.png',
  },
  {
    name: 'Xi’an',
    description:
      'Discover Xi’an, one of China’s great ancient capitals and home to the Terracotta Warriors, ancient city walls, and Silk Road heritage.',
    programs: 'Chinese Cultural Discovery',
    image: 'city-xian.png',
  },
  {
    name: 'Fujian',
    description:
      'Discover Fujian, a coastal region known for traditional villages, distinctive architecture, local heritage, tea culture, and southern Chinese traditions.',
    programs: 'Chinese Cultural Discovery',
    image: 'city-fujian.png',
  },
]

function Label({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span />
      <p>{children}</p>
    </div>
  )
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="program-card">
      <div className="program-image">
        <img src={asset(program.image)} alt="" />
        <span className={program.overlay === 'medium' ? 'photo-overlay medium' : 'photo-overlay'} />
      </div>
      <div className="program-copy">
        <div className="program-meta">
          <strong>{program.duration}</strong>
          <span>{program.grades}</span>
        </div>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
      </div>
    </article>
  )
}

function TrustCard({ item }: { item: (typeof trustItems)[number] }) {
  return (
    <article className="trust-card">
      <div className="trust-icon">
        <img src={asset(item.icon)} alt="" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  )
}

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <article className="testimonial-card">
      <div>
        <span className="testimonial-quote">“</span>
        <p>{item.quote}</p>
      </div>
      <footer>
        <img src={asset(item.avatar)} alt="" />
        <div>
          <strong>{item.name}</strong>
          <span>
            {item.meta} • <em>{item.program}</em>
          </span>
        </div>
      </footer>
    </article>
  )
}

function Nav() {
  return (
    <header className="nav-section">
      <a className="nav-brand" href="#" aria-label="Maple Leaf Edu-Travel home">
        <img src={asset('logo-nav.png')} alt="" />
        <img className="nav-wordmark" src={asset('logo-nav-new.png')} alt="ML Edu-Travel" />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li className="nav-item" key={item.label}>
              <button className="nav-trigger" type="button" aria-haspopup="true">
                <span>{item.label}</span>
                <span className="nav-caret" aria-hidden="true">
                  ▾
                </span>
              </button>
              <div className="nav-dropdown">
                {item.items.map((dropdownItem) => (
                  <a href="#programs" key={dropdownItem}>
                    {dropdownItem}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <a className="button-primary nav-button" href="#footer">
        Contact Us
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        poster={asset('hero-exact.jpg')}
        autoPlay
        loop
        muted
        playsInline
        aria-label="Hero video area"
      />
      <img className="hero-fallback" src={asset('hero-exact.jpg')} alt="" />
      <div className="hero-overlay" />
      <img className="hero-badge" src={asset('badge-30-years.png')} alt="30 Years of Experience" />
      <div className="hero-content">
        <p className="hero-kicker">Maple Leaf Edu-Travel</p>
        <h1>
          Educational Travel in China
        </h1>
        <p className="hero-lede">
          School Trips · School Immersion · Chinese Language Programs · Cultural Discovery Journey
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#footer">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-row">
        <article>
          <strong>30+ Years</strong>
          <span>
            <em>OUR LEGACY</em>
            Education Experience
          </span>
        </article>
        <article>
          <strong>100+</strong>
          <span>
            <em>OUR NETWORK</em>
            Campuses
          </span>
        </article>
        <article>
          <strong>20,000+</strong>
          <span>
            <em>OUR REACH</em>
            Participants
          </span>
        </article>
      </div>
    </section>
  )
}

function ProgramMoments() {
  return (
    <section className="moments-section" aria-labelledby="program-moments-title">
      <div className="moments-copy">
        <h2 id="program-moments-title">Educational Travel in China</h2>
        <p className="moments-subheading">
          With Maple Leaf Edu-Travel, backed by 30+ years of K–12 education experience
        </p>
        <ul className="moments-list">
          <li>
            Part of{' '}
            <a href="https://www.mapleleafworldschool.com/" target="_blank" rel="noopener noreferrer">
              Maple Leaf Educational Systems
            </a>
            , established in 1995
          </li>
          <li>School immersion, Chinese language, and cultural discovery programs</li>
          <li>Group programs designed for schools and educational institutions</li>
          <li>Access to Maple Leaf campuses and local school communities across China</li>
          <li>End-to-end support covering accommodation, meals, transport, safety, and student services</li>
        </ul>
      </div>
      <div className="moments-collage" aria-label="Maple Leaf Edu-Travel program photography">
        {collagePhotos.map((photo) => (
          <img src={asset(photo.src)} alt={photo.alt} key={photo.src} />
        ))}
      </div>
    </section>
  )
}

function Programs() {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-header">
        <div>
          <Label>LEARN • EXPLORE • CONNECT</Label>
          <h2>Our Signature Programs</h2>
        </div>
        <a className="view-link" href="#">
          View All Programs
          <img src={asset('arrow-exact.svg')} alt="" />
        </a>
      </div>
      <div className="program-grid">
        {programs.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </section>
  )
}

function ProgramVideo() {
  return (
    <section className="program-video-section" aria-labelledby="program-video-title">
      <div className="program-video-header">
        <h2 id="program-video-title">See Our Programs in Action</h2>
        <p>Hear from students and explore moments from our past programs in China.</p>
      </div>
      <div className="program-video-frame">
        <video
          controls
          preload="metadata"
          poster={asset('programs-in-action-poster.jpg')}
          aria-label="Maple Leaf Edu-Travel program video"
        >
          <source src={asset('programs-in-action.mp4')} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

function ChooseCity() {
  return (
    <section className="city-section" id="locations" aria-labelledby="city-title">
      <div className="city-header">
        <h2 id="city-title">Choose Your City</h2>
        <p>Choose where you’d like to explore China</p>
      </div>
      <div className="city-grid">
        {cityDestinations.map((destination) => (
          <article className="city-destination" key={destination.name}>
            <div className="city-image">
              <img src={asset(destination.image)} alt="" />
            </div>
            <div className="city-copy">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <strong>{destination.programs}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="trust-section" id="trust">
      <div className="trust-header">
        <Label>Trust &amp; Standards</Label>
        <h2>Why Families and Schools Trust Us</h2>
      </div>
      <div className="trust-grid">
        {trustItems.map((item) => (
          <TrustCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}

function JourneyMap() {
  const [mapSvg, setMapSvg] = useState('')
  const [tooltip, setTooltip] = useState<{ country: string; x: number; y: number } | null>(null)
  const [chinaHovered, setChinaHovered] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let active = true

    fetch(asset('world-map.svg'))
      .then((response) => response.text())
      .then((svg) => {
        if (!active) return

        setMapSvg(
          Object.keys(pastProgramCountries).reduce(
            (markup, id) =>
              markup.replace(
                new RegExp(`id="${id}"`, 'g'),
                `id="${id}" class="past-program-country" data-country="${pastProgramCountries[id]}"`
              ),
            svg
          )
            .replace(/<\?xml[\s\S]*?\?>/i, '')
            .replace(/<!DOCTYPE[\s\S]*?>/i, '')
            .replace('<svg ', '<svg aria-hidden="true" focusable="false" ')
        )
      })

    return () => {
      active = false
    }
  }, [])

  const updateTooltip = (event: React.MouseEvent<HTMLDivElement>) => {
    const countryNode = (event.target as Element).closest<SVGElement>('.past-program-country')

    if (!countryNode || !mapRef.current) {
      setTooltip(null)
      setChinaHovered(false)
      return
    }

    const isChinaRegion = countryNode.id === 'cn' || countryNode.id === 'tw'
    const bounds = mapRef.current.getBoundingClientRect()
    setChinaHovered(isChinaRegion)
    setTooltip({
      country: countryNode.dataset.country ?? '',
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    })
  }

  return (
    <section className="journey-section">
      <div className="journey-header">
        <div>
          <Label>Historical Archive</Label>
          <h2>Our Past Journeys</h2>
          <p>With 30 years of operations, we have maintained a visual journal of our cultural bridges built.</p>
        </div>
        <a className="map-pill" href="#">
          View Past Programs
        </a>
      </div>
      <div className="map-shell">
        <div
          ref={mapRef}
          className={`simple-world-map${chinaHovered ? ' china-hovered' : ''}`}
          onMouseMove={updateTooltip}
          onMouseLeave={() => {
            setTooltip(null)
            setChinaHovered(false)
          }}
          dangerouslySetInnerHTML={{ __html: mapSvg }}
        />
        {tooltip ? (
          <div className="map-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
            <strong>{tooltip.country}</strong>
            <span>Past Program Destination</span>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonial-section">
      <img className="quote-icon" src={asset('quote-exact.svg')} alt="" />
      <div className="testimonial-header">
        <Label>Participant Testimonials</Label>
        <h2>Stories From The Road</h2>
        <p>Listen directly to how stepping outside home comfort zones has redefined directions for students and educators.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta-section" id="cta">
      <img src={asset('cta-exact.jpg')} alt="" />
      <div className="cta-tint" />
      <div className="cta-content">
        <h2>Ready to Plan Your Next Educational Journey?</h2>
        <p>Connect with our global coordination team to design a bespoke study tour for your school.</p>
        <div>
          <a className="button-primary cta-button" href="#footer">
            Request a Consultation
          </a>
          <a className="button-secondary cta-button" href="/downloads/maple-leaf-edu-travel-overview.pdf">
            Download Our Edu-Travel Overview
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <img className="footer-logo" src={asset('logo-footer.png')} alt="" />
      <div className="footer-main">
        <div className="footer-about">
          <h2>Maple Leaf</h2>
          <strong>EDU-TRAVEL</strong>
          <p>
            Backed by Maple Leaf Educational Systems, founded in 1995, Maple Leaf Edu-Travel draws on over 30 years of
            K–12 education experience to deliver high-quality study tours and cross-cultural learning programs for
            students worldwide.
          </p>
        </div>
        <div className="footer-col">
          <h3>Quick Navigation</h3>
          <a href="#trust">About Us</a>
          <a href="#programs">School Immersion Program</a>
          <a href="#programs">Cultural Discovery Program</a>
          <a href="#programs">Chinese Language Program</a>
          <a href="#programs">Custom Tours</a>
        </div>
        <div className="footer-col social-col">
          <h3>Follow Our Trails</h3>
          <div className="social-links">
            <a
              href="https://youtube.com/@mapleleafedutravel?si=UbLRVtCe3bHFK-pN"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <img src={asset('social-youtube.svg')} alt="" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61591715675249"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <img src={asset('social-facebook.svg')} alt="" />
            </a>
            <a href="https://www.instagram.com/mapleleafedt/" aria-label="Instagram" target="_blank" rel="noreferrer">
              <img src={asset('social-instagram.svg')} alt="" />
            </a>
            <a
              href="https://api.whatsapp.com/qr/NNQ2EXDY7SMXN1?autoload=1&app_absent=0"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <img className="whatsapp-icon" src={asset('social-whatsapp.svg')} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-col contact">
          <h3>Contact &amp; Support</h3>
          <a href="mailto:edu-travel@mapleleafedutravel.com">
            <img src={asset('mail.svg')} alt="" /> edu-travel@mapleleafedutravel.com
          </a>
          <a href="tel:+8675528998737">
            <img src={asset('phone.svg')} alt="" /> +86 755 28998737
          </a>
          <div className="footer-qr-row">
            <figure>
              <img src={asset('qr-wechat.jpg')} alt="WeChat QR code" />
              <figcaption>WeChat</figcaption>
            </figure>
            <figure>
              <img src={asset('qr-whatsapp.jpg')} alt="WhatsApp QR code" />
              <figcaption>WhatsApp</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Maple Leaf Edu-Travel. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

function FloatingContactBar() {
  const [wechatOpen, setWechatOpen] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wechatOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!contactRef.current?.contains(event.target as Node)) {
        setWechatOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setWechatOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [wechatOpen])

  return (
    <div className="floating-contact" ref={contactRef}>
      <a
        className="floating-contact-item"
        href="https://wa.me/8619860142818?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Maple%20Leaf%20Edu-Travel%20programs"
        aria-label="Open WhatsApp conversation"
        target="_blank"
        rel="noreferrer"
      >
        <span className="floating-contact-icon">
          <img src={asset('social-whatsapp.svg')} alt="" />
        </span>
        <span>WhatsApp</span>
      </a>
      <button
        className="floating-contact-item"
        type="button"
        aria-label="Show WeChat QR code"
        aria-expanded={wechatOpen}
        onClick={() => setWechatOpen((open) => !open)}
      >
        <span className="floating-contact-icon">
          <img className="floating-wechat-icon" src={asset('wechat.png')} alt="" />
        </span>
        <span>WeChat</span>
      </button>
      {wechatOpen ? (
        <div className="wechat-popover" role="dialog" aria-label="Connect on WeChat">
          <button
            className="wechat-popover-close"
            type="button"
            aria-label="Close WeChat QR code"
            onClick={() => setWechatOpen(false)}
          >
            ×
          </button>
          <strong>CONNECT ON WECHAT</strong>
          <img src={asset('qr-wechat.jpg')} alt="WeChat QR code" />
          <p>Scan to connect with Maple Leaf Edu-Travel</p>
        </div>
      ) : null}
    </div>
  )
}

function App() {
  return (
    <main className="site-page">
      <Nav />
      <Hero />
      <StatsSection />
      <ProgramMoments />
      <Programs />
      <ProgramVideo />
      <ChooseCity />
      <Trust />
      <JourneyMap />
      <Testimonials />
      <Cta />
      <Footer />
      <FloatingContactBar />
    </main>
  )
}

export default App
