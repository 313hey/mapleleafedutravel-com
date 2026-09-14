import { useEffect, useRef, useState } from 'react'
import './App.css'

const asset = (name: string) => `/figma-assets/${name}`

type Program = {
  duration: string
  grades: string
  title: string
  description: string
  image: string
  href?: string
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
    href: '/programs/school-immersion',
    overlay: 'light',
  },
  {
    duration: '5–10 DAYS',
    grades: 'Grades 3–12',
    title: 'Travel to China Program',
    description:
      'Discover China through history, heritage, food, arts, traditions, and hands-on cultural experiences.',
    image: '/images/travel-to-china/BJ2A0683.JPG',
    href: '/programs/travel-to-china',
    overlay: 'medium',
  },
  {
    duration: '1–2 WEEKS',
    grades: 'Grades 3–12',
    title: 'Chinese Language Programs',
    description:
      'Learn Chinese in China with our professional teaching team through structured lessons and real-life cultural immersion.',
    image: 'program-language-exact.jpg',
    href: '/programs/chinese-language',
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
    label: 'HOME',
    href: '/',
  },
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
      'Travel to China Program',
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
    programs: 'Travel to China Program',
    image: 'city-beijing.png',
  },
  {
    name: 'Xi’an',
    description:
      'Discover Xi’an, one of China’s great ancient capitals and home to the Terracotta Warriors, ancient city walls, and Silk Road heritage.',
    programs: 'Travel to China Program',
    image: 'city-xian.png',
  },
  {
    name: 'Fujian',
    description:
      'Discover Fujian, a coastal region known for traditional villages, distinctive architecture, local heritage, tea culture, and southern Chinese traditions.',
    programs: 'Travel to China Program',
    image: 'city-fujian.png',
  },
]

const languageLocations = [
  { name: 'Shenzhen', image: 'city-shenzhen.png' },
  { name: 'Haikou · Hainan', image: 'city-hainan.png' },
  { name: 'Wuhan', image: 'city-wuhan.png' },
  { name: 'Dalian', image: 'city-dalian.png' },
  { name: 'Hohhot · Inner Mongolia', image: 'city-inner-mongolia.png' },
]

const languageLearningItems = [
  'Practical speaking and listening',
  'Everyday Chinese communication',
  'Vocabulary for real-life situations',
  'Reading and writing appropriate to student level',
  'Cultural understanding through language',
]

const languageExperienceItems = [
  'Classroom lessons',
  'School campus activities',
  'Interaction with local students',
  'Cultural workshops',
  'City-based language tasks',
  'Everyday communication practice',
]

const languageHighlights = [
  {
    title: 'Small Classes',
  },
  {
    title: '20 Hours of Mandarin per Week',
    support: 'with Maple Leaf Chinese',
  },
  {
    title: 'Safe, Supervised On-Campus Accommodation',
  },
  {
    title: 'Selected Maple Leaf School Classes',
    support: 'including AI, Cultural Workshops, and Sports',
  },
  {
    title: 'Supervised Cultural Activities and Excursions',
  },
]

const languageIncludedItems = [
  'Chinese language classes',
  'Learning materials',
  'Cultural activities',
  'School or campus experiences where applicable',
  'Accommodation',
  'Meals',
  'Local transportation',
  'Student support',
  'Safety coordination',
]

const sampleLanguageFlow = [
  { time: 'Morning', activity: 'Chinese Language Class' },
  { time: 'Midday', activity: 'Lunch / Campus Experience' },
  { time: 'Afternoon', activity: 'Cultural Workshop or City Learning Activity' },
  { time: 'Evening', activity: 'Reflection / Group Activity' },
]

const immersionLocations = [
  {
    name: 'SHENZHEN',
    image: '/images/campuses/shenzhen.jpg',
    levels: 'Primary · Middle · High School',
    focus: 'Technology & Innovation',
    description: 'Study at the home campus of Maple Leaf Education Group and explore Shenzhen’s technology and innovation ecosystem.',
  },
  {
    name: 'CHONGQING',
    image: '/images/campuses/chongqing-cropped.jpg',
    levels: 'Kindergarten · Primary · Middle · High School',
    focus: 'Culture & Urban Exploration',
    description: 'Experience school life while discovering Chongqing’s distinctive landscape, three-dimensional cityscape and urban development.',
  },
  {
    name: 'WUHAN',
    image: '/images/campuses/wuhan.jpg',
    levels: 'Primary · Middle · High School · School for Foreign Nationals',
    focus: 'International Education & Sports',
    description: 'Learn in a multicultural campus environment with international education resources and access to a professional-standard ice hockey facility.',
  },
  {
    name: 'SHANGHAI',
    image: '/images/campuses/shanghai.jpg',
    levels: 'High School',
    focus: 'Global City & Culture',
    description: 'Combine high school learning with the culture, international outlook and modern development of Shanghai.',
  },
  {
    name: 'HAINAN',
    image: '/images/campuses/hainan.webp',
    levels: 'Kindergarten · Primary · Middle · High School',
    focus: 'Boarding Life & Tropical China',
    description: 'Experience boarding school life while discovering the culture, nature and tropical environment of China’s island province.',
  },
  {
    name: 'DALIAN',
    image: '/images/campuses/dalian.jpg',
    levels: 'Kindergarten · Primary · Middle · High School · School for Foreign Nationals',
    focus: 'Ice & Snow · Coastal China',
    description: 'Experience northern China’s snow-covered winter landscapes alongside a multicultural campus experience in one of the country’s leading coastal cities.',
  },
]

const immersionHighlights = [
  ['REAL SCHOOL ACCESS', 'Learn inside established Maple Leaf K–12 campuses—not temporary camp venues.'],
  ['CLASSROOM LEARNING', 'Join selected school classes, workshops and project-based activities based on age and academic focus.'],
  ['STUDENT CONNECTION', 'Learn, collaborate and communicate with Maple Leaf students through structured buddy activities.'],
  ['CHINESE LANGUAGE & CULTURE', 'Develop practical Chinese skills through language classes, cultural workshops and everyday interaction.'],
  ['TECHNOLOGY & CREATIVITY', 'Explore selected experiences in AI, science, technology, arts and creative project learning.'],
  ['CHINA BEYOND THE CAMPUS', 'Connect campus learning with visits to Chinese cities, universities, cultural landmarks and leading companies.'],
]

const immersionProgramSteps = [
  {
    title: 'LEARN ON CAMPUS',
    description: 'Join selected classes, workshops and hands-on projects inside real Maple Leaf K–12 campuses.',
    image: '/images/23fa876da8f8c75ca64dc01ecbe75658.jpg',
    alt: 'Students taking part in a classroom language activity',
  },
  {
    title: 'CONNECT THROUGH SCHOOL LIFE',
    description: 'Learn alongside Maple Leaf students through buddy activities, clubs and shared campus experiences.',
    image: '/images/71a20401bd60f2aa42c5ab07ff17dd1d.jpg',
    alt: 'International and Maple Leaf students together on campus',
  },
  {
    title: 'DISCOVER CHINA BEYOND SCHOOL',
    description: 'Extend learning into Chinese cities, universities, cultural landmarks and leading companies.',
    image: '/images/2f5f24a9fddf8b12eb86252f6e5adf8c.jpg',
    alt: 'Students exploring a coastal environment in China',
  },
]

const immersionCampusLifeImages = [
  { src: '/images/campus-life/classroom-learning.webp', alt: 'Maple Leaf students learning together in a classroom', className: 'immersion-campus-life-feature' },
  { src: '/images/campus-life/ai-learning-space.jpg', alt: 'AI and technology learning space' },
  { src: '/images/campus-life/swimming-pool.jpg', alt: 'Outdoor campus swimming pool' },
  { src: '/images/campus-life/ice-sports-center.jpg', alt: 'Maple Leaf international ice sports center' },
  { src: '/images/campus-life/auditorium.jpg', alt: 'Campus auditorium and performance space' },
  { src: '/images/campus-life/boarding-room.png', alt: 'Student boarding room with study space' },
  { src: '/images/campus-life/dining-hall.png', alt: 'Bright campus dining hall' },
]

const immersionSupportItems = [
  'Supervised student activities',
  'Controlled access to campus or accommodation areas',
  'Daily meals, with halal options available upon request',
  'Licensed transportation providers',
  'Established risk management and emergency response procedures',
  '24-hour support and residential supervision where applicable',
  'Coordination throughout the program',
]

const culturalHighlights = [
  ['CURRICULUM-ALIGNED & SCHOOL-FOCUSED', 'Programs designed around international curricula, grade-level objectives, and the specific educational needs of each school.'],
  ['DIVERSE EDUCATIONAL THEMES', 'Programs can be tailored around STEM & Innovation, University Visits, Nature & Outdoor Learning, and Chinese Culture, according to your school’s educational focus.'],
  ['COMPREHENSIVE SAFETY & RISK MANAGEMENT', 'From transportation and accommodation to on-site supervision and emergency response, every program is supported by structured safety procedures and professional risk management.'],
  ['MAPLE LEAF CAMPUS EXPERIENCE', 'Schools can choose to accommodate students in Maple Leaf campus residences, offering a safe and supervised environment with opportunities for meaningful interaction with the local school community.'],
]

const culturalDestinations = [
  { name: 'BEIJING', image: '/images/travel-destinations/beijing.jpg', imagePosition: 'center 55%', levels: 'History · Heritage · National Culture', focus: 'Imperial China & Living Traditions', description: 'Walk through centuries of history while exploring celebrated landmarks, traditional neighbourhoods and contemporary cultural life.' },
  { name: 'XI’AN', image: '/images/travel-destinations/xian.jpg', imagePosition: 'center 40%', levels: 'Archaeology · Silk Road · Ancient China', focus: 'Origins & Exchange', description: 'Discover the Terracotta Warriors, ancient city walls and the cultural exchanges that shaped the Silk Road.' },
  { name: 'SHANGHAI', image: '/images/travel-destinations/shanghai.jpg', imagePosition: 'center 58%', levels: 'Architecture · Design · Modern China', focus: 'Tradition Meets Innovation', description: 'Explore a global city where historic districts, creative industries and contemporary Chinese culture sit side by side.' },
  { name: 'CHENGDU & CHONGQING', images: ['/images/travel-destinations/chengdu.jpg', '/images/travel-destinations/chongqing.jpg'], levels: 'Food · Folk Culture · Regional Life', focus: 'Southwest China', description: 'Experience distinctive food traditions, dramatic cityscapes and the relaxed rhythms of life in southwest China.' },
  { name: 'GUANGZHOU', image: '/images/travel-destinations/ba04e408729861fc4d8bfa607d0f5deb.jpg', imagePosition: 'center 42%', levels: 'Maritime History · Cantonese Culture · Cuisine', focus: 'Southern China', description: 'Learn how trade, migration, language and food have shaped one of China’s most vibrant regional cultures.' },
  { name: 'INNER MONGOLIA', image: '/images/travel-destinations/inner-mongolia.jpg', imagePosition: 'center 62%', levels: 'Landscape · Music · Nomadic Heritage', focus: 'Culture & Nature', description: 'Discover grassland landscapes and the music, customs and hospitality of northern China’s diverse communities.' },
]

const culturalSupportItems = [
  'A tailored educational itinerary', 'Bilingual program leaders and local guides', 'Pre-arranged workshops and cultural activities',
  'Accommodation and daily meals', 'Licensed local transportation', 'Student supervision and safety coordination',
  'Learning materials and reflection activities',
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
  const content = (
    <>
      <div className="program-image">
        <img src={program.image.startsWith('/') ? program.image : asset(program.image)} alt="" />
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
    </>
  )

  if (program.href) {
    return (
      <a className="program-card program-card-link" href={program.href}>
        {content}
      </a>
    )
  }

  return (
    <article className="program-card">
      {content}
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
  const getDropdownHref = (dropdownItem: string) => {
    if (dropdownItem === 'School Immersion Programs') return '/programs/school-immersion'
    if (dropdownItem === 'Travel to China Program') return '/programs/travel-to-china'
    if (dropdownItem === 'Chinese Language Programs') return '/programs/chinese-language'
    return '/#programs'
  }

  return (
    <header className="nav-section">
      <a className="nav-brand" href="/" aria-label="Maple Leaf Edu-Travel home">
        <img src={asset('logo-nav.png')} alt="" />
        <img className="nav-wordmark" src={asset('logo-nav-new.png')} alt="ML Edu-Travel" />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li className="nav-item" key={item.label}>
              {'href' in item ? (
                <a className="nav-trigger" href={item.href}>
                  <span>{item.label}</span>
                </a>
              ) : (
                <>
                  <button className="nav-trigger" type="button" aria-haspopup="true">
                    <span>{item.label}</span>
                    <span className="nav-caret" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  <div className="nav-dropdown">
                    {item.items.map((dropdownItem) => (
                      <a href={getDropdownHref(dropdownItem)} key={dropdownItem}>
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                </>
              )}
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
          School Trips · School Immersion · Chinese Language Programs · Travel to China Program
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

function ChineseLanguageProgramsPage() {
  return (
    <>
      <Nav />
      <section className="language-hero">
        <div className="language-hero-copy">
          <Label>CHINESE LANGUAGE PROGRAM</Label>
          <h1>Build Real Mandarin Skills</h1>
          <p>Through group classes, cultural activities, and guided trips.</p>
        </div>
        <div className="language-hero-image">
          <img src={asset('program-language-exact.jpg')} alt="Students learning Chinese during a Maple Leaf program" />
        </div>
      </section>

      <section className="language-overview">
        <div className="language-overview-collage" aria-label="Chinese language learning moments">
          <img
            className="language-overview-large"
            src={asset('language-overview-large.png')}
            alt="Students practicing Chinese in a Maple Leaf classroom"
          />
          <div className="language-overview-thumbs">
            <img src={asset('language-overview-small-1.png')} alt="Students holding Mandarin learning cards" />
            <img src={asset('language-overview-small-2.png')} alt="Student sharing a Chinese culture classroom project" />
            <img src={asset('language-overview-small-3.png')} alt="Maple Leaf students smiling together after class" />
          </div>
        </div>
        <div className="language-overview-copy">
          <strong>Program Overview</strong>
          <h2>Learn Chinese at Maple Leaf Campuses</h2>
          <p>
            Learn with MAPLE LEAF CHINESE in an immersive school environment, where structured lessons connect naturally
            with everyday life and cultural experiences in China.
          </p>
        </div>
      </section>

      <section className="language-highlights">
        <div className="language-highlights-header">
          <Label>PROGRAM HIGHLIGHTS</Label>
          <h2>Ages 10+ · All Levels</h2>
        </div>
        <div className="language-highlights-grid">
          {languageHighlights.map((highlight) => (
            <article className="language-highlight-item" key={highlight.title}>
              <span />
              <h3>{highlight.title}</h3>
              {highlight.support ? <p>{highlight.support}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="language-maple-leaf-chinese">
        <div className="language-maple-leaf-chinese-main">
          <div className="language-maple-leaf-chinese-copy">
            <Label>MAPLE LEAF CHINESE</Label>
            <h2>Why Maple Leaf Chinese</h2>
            <p>
              Maple Leaf Chinese is a 5-stage, 9-level K–12 Chinese curriculum aligned with HSK standards, with
              CTI-certified textbooks published by Beijing Language and Culture University Press and official HSK test
              centers at selected Maple Leaf campuses.
            </p>
          </div>
          <div className="language-maple-leaf-chinese-visual">
            <img src={asset('maple-leaf-chinese-textbooks.jpg')} alt="Maple Leaf Chinese K–12 textbooks" />
          </div>
        </div>
        <div className="language-maple-leaf-chinese-logos" aria-label="Maple Leaf Chinese curriculum logos">
          <img src={asset('maple-leaf-chinese-logo-clec.jpg')} alt="Center for Language Education and Cooperation" />
          <img src={asset('maple-leaf-chinese-logo-blcup.jpg')} alt="Beijing Language and Culture University Press" />
          <img src={asset('maple-leaf-chinese-logo-cti.png')} alt="Chinese Testing International" />
        </div>
      </section>

      <section className="language-detail-band">
        <div className="language-detail-grid">
          <article>
            <h2>What Students Learn</h2>
            <ul>
              {languageLearningItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Learning Experience</h2>
            <p>
              Chinese learning extends beyond the classroom, connecting structured lessons with school life, cultural
              discovery, and real communication in everyday settings.
            </p>
            <ul>
              {languageExperienceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="language-locations">
        <div className="language-section-header">
          <Label>Available Locations</Label>
          <h2>Learn Across China</h2>
        </div>
        <div className="language-location-grid">
          {languageLocations.map((location) => (
            <article className="language-location-card" key={location.name}>
              <div>
                <img src={asset(location.image)} alt="" />
              </div>
              <h3>{location.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="language-program-info">
        <div className="language-length-card">
          <span>Program Length</span>
          <strong>2–4 Weeks</strong>
        </div>
        <div className="language-included">
          <h2>What’s Included</h2>
          <ul>
            {languageIncludedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="language-sample">
        <div className="language-section-header">
          <Label>Sample Learning Experience</Label>
          <h2>A Typical Day of Language Learning</h2>
          <p>This is a sample flow for planning conversations, not a fixed itinerary.</p>
        </div>
        <div className="language-flow">
          {sampleLanguageFlow.map((item) => (
            <article key={item.time}>
              <span>{item.time}</span>
              <strong>{item.activity}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="language-cta">
        <h2>Plan a Chinese Language Program for Your School</h2>
        <a className="button-primary" href="#footer">
          Request a Consultation
        </a>
      </section>
      <Footer />
      <FloatingContactBar />
    </>
  )
}

function SchoolImmersionProgramsPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const pastProgramVideos = ['5QuYY5JJWiY', '2wOgGy-NUYQ', 'BFdpGEOlnjk']

  useEffect(() => {
    if (!activeVideoId) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVideoId(null)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [activeVideoId])

  return (
    <>
      <Nav />
      <section className="immersion-hero">
        <img
          className="immersion-hero-image"
          src={asset('program-school-exact.png')}
          alt="Students taking part in a Maple Leaf school immersion program"
        />
        <div className="immersion-hero-shade" />
        <div className="immersion-hero-copy">
          <Label>School Immersion Programs</Label>
          <h1>Experience Real School Life in China</h1>
          <p>
            Join classes, connect with local students and discover China through an authentic K–12 campus experience
            at selected Maple Leaf schools.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#overview">Explore Campuses</a>
            <a className="button-secondary" href="#footer">Plan Your Program</a>
          </div>
        </div>
      </section>

      <section className="immersion-intro" id="overview">
        <div>
          <Label>Program Overview</Label>
          <h2>More Than a School Visit</h2>
          <img
            className="immersion-intro-image"
            src="/images/school-immersion-students.jpg"
            alt="Two students taking part in a Maple Leaf school immersion program"
          />
        </div>
        <div className="immersion-intro-copy">
          <p className="immersion-intro-lede">
            Students become part of campus life through a carefully designed combination of classroom learning,
            student interaction, Chinese language and culture, campus activities and local exploration.
          </p>
          <div className="immersion-glance">
            <h3>Program at a Glance</h3>
            <dl>
              <div>
                <dt>Designed For</dt>
                <dd>International K–12 school groups</dd>
              </div>
              <div>
                <dt>Recommended Age</dt>
                <dd>Primary to High School</dd>
              </div>
              <div>
                <dt>Recommended Duration</dt>
                <dd>7–14 Days</dd>
              </div>
              <div>
                <dt>Group Size</dt>
                <dd>From 20 Students</dd>
              </div>
              <div className="immersion-glance-wide">
                <dt>Typical Program Components</dt>
                <dd>Classes · Student Interaction · Campus Activities · Accommodation · Meals · Local Exploration · Program Support</dd>
              </div>
            </dl>
            <p className="immersion-glance-note">
              Program content and inclusions are tailored to each group and confirmed in the final proposal.
            </p>
          </div>
        </div>
      </section>

      <section className="immersion-highlights">
        <div className="immersion-section-heading">
          <Label>Program Highlights</Label>
          <h2>What Students Can Experience</h2>
        </div>
        <div className="immersion-highlight-grid">
          {immersionHighlights.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="immersion-fit">
        <div className="immersion-fit-heading">
          <Label>How the Program Works</Label>
          <h2>One Program. Three Dimensions of Learning.</h2>
        </div>
        <div className="immersion-program-steps">
          {immersionProgramSteps.map((step, index) => (
            <article key={step.title}>
              <img src={step.image} alt={step.alt} />
              <div className="immersion-program-step-copy">
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="immersion-program-note">
          Each journey is tailored to the group’s age, academic interests, destination, travel dates and learning goals.
        </p>
      </section>

      <section className="immersion-locations">
        <div className="immersion-section-heading">
          <Label>Featured Campuses</Label>
          <h2>Choose Your Campus</h2>
          <p>School immersion programs are available at selected Maple Leaf campuses across China, offering different academic, cultural and regional experiences.</p>
        </div>
        <div className="immersion-location-grid">
          {immersionLocations.map((location) => (
            <article key={location.name}>
              <img src={location.image} alt={`${location.name} Maple Leaf campus`} />
              <h3>{location.name}</h3>
              <p className="immersion-location-levels">{location.levels}</p>
              <p className="immersion-location-focus">{location.focus}</p>
              <p>{location.description}</p>
            </article>
          ))}
        </div>
        <div className="immersion-location-footer">
          <a className="button-primary" href="/#locations">View Campus Network</a>
          <p>Campus availability, eligible age groups and program experiences are subject to school calendars and individual campus arrangements.</p>
        </div>
      </section>

      <section className="immersion-campus-life">
        <div className="immersion-campus-life-intro">
          <div>
            <Label>Campus Life</Label>
            <h2>Learn, Live, Play &amp; Create</h2>
          </div>
          <div>
            <p>Depending on the selected campus, students may have access to a wide range of academic, creative, sports and residential facilities.</p>
            <p className="immersion-campus-life-facilities">Classrooms · Libraries · Science Labs · AI Learning Spaces · Arts Facilities · Sports Fields · Swimming Pools · Golf Facilities · Ice Hockey Facilities · Boarding Houses</p>
          </div>
        </div>
        <div className="immersion-campus-life-gallery">
          {immersionCampusLifeImages.map((image) => (
            <figure className={image.className} key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
        <p className="immersion-campus-life-note">Facilities and access arrangements vary by campus. Some facilities are available only as part of scheduled activities.</p>
      </section>

      <section className="immersion-included">
        <div className="immersion-support-intro">
          <Label>Accommodation &amp; Student Support</Label>
          <h2>Designed for Student Groups</h2>
          <p>Depending on the destination and program format, students may stay in Maple Leaf boarding facilities or carefully selected hotels.</p>
        </div>
        <div className="immersion-support-main-image">
          <img src="/images/student-support/cafeteria-students.jpg" alt="Students dining together in a Maple Leaf campus cafeteria" />
        </div>
        <div className="immersion-support-list">
          <p>Program support may include:</p>
          <ul>
            {immersionSupportItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="immersion-support-secondary-images">
          <img src="/images/student-support/boarding-room-secondary.png" alt="Maple Leaf student accommodation room" />
          <img src="/images/student-support/laundry-facility.png" alt="Student accommodation laundry facility" />
        </div>
        <p className="immersion-support-note">Accommodation, meals, transportation, supervision arrangements and safety procedures vary by campus and program. Full details will be confirmed in the final proposal.</p>
      </section>

      <section className="immersion-day immersion-past-programs">
        <div className="immersion-section-heading">
          <Label>Past Programs</Label>
          <h2>Previous Student Experiences</h2>
        </div>
        <div className="immersion-video-grid">
          {pastProgramVideos.map((videoId, index) => (
            <button
              className="immersion-video-item"
              key={videoId}
              type="button"
              aria-label={`Play video ${index + 1}`}
              onClick={() => setActiveVideoId(videoId)}
            >
              <span className="immersion-video-frame">
                <img
                  src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                />
                <span className="immersion-video-play" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {activeVideoId && (
        <div className="immersion-video-modal" role="dialog" aria-modal="true" aria-label="YouTube video player" onClick={() => setActiveVideoId(null)}>
          <div className="immersion-video-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button className="immersion-video-close" type="button" aria-label="Close video" onClick={() => setActiveVideoId(null)}>×</button>
            <div className="immersion-video-embed">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="Past program video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <section className="immersion-faq">
        <div className="immersion-section-heading">
          <Label>FAQ</Label>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="immersion-faq-list">
          <details>
            <summary><span>Do students attend real classes?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>Yes. Depending on students’ ages, language proficiency and the school calendar, selected Maple Leaf classes, workshops and campus activities may be arranged as part of the program.</p>
            </div>
          </details>
          <details>
            <summary><span>Can students interact with Maple Leaf students?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>Yes. Student buddy activities, collaborative learning and other opportunities for interaction may be included, subject to campus schedules and availability.</p>
            </div>
          </details>
          <details>
            <summary><span>Will language be a barrier during class immersion?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>For high school immersion, selected classes are taught in English.</p>
              <p>For primary and middle school students with little or no Chinese proficiency, we may recommend other program formats or specially arranged learning activities to ensure a more suitable experience.</p>
            </div>
          </details>
          <details>
            <summary><span>Will students be able to keep up with the classes?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>Students are normally placed with Maple Leaf students at a similar grade level. Teachers will observe their participation and learning needs during the program and may adjust classroom arrangements where appropriate.</p>
            </div>
          </details>
          <details>
            <summary><span>Where do students stay?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>Depending on the destination and program format, students may stay in Maple Leaf boarding facilities or carefully selected hotels.</p>
            </div>
          </details>
          <details>
            <summary><span>Can Chinese lessons be included?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>Yes. Chinese language classes, cultural workshops and practical language activities can be incorporated into the program according to the group’s learning goals and language level.</p>
            </div>
          </details>
          <details>
            <summary><span>Are meals and transportation included?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>Meals and local transportation can be included in the confirmed program package. Specific arrangements and inclusions will be clearly stated in the final proposal.</p>
            </div>
          </details>
          <details>
            <summary><span>Do you provide visa support?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>Where applicable, we can provide supporting documents and general assistance for the China visa application process. Visa approval remains subject to the relevant authorities.</p>
            </div>
          </details>
          <details>
            <summary><span>What is the process for arranging a program?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary>
            <div className="immersion-faq-answer">
              <p>The typical process includes four steps:</p>
              <ol className="immersion-faq-steps">
                <li><strong>Program Planning &amp; Quotation</strong><span>Confirm the program concept, proposed itinerary, dates and quotation.</span></li>
                <li><strong>Resource Reservation</strong><span>Reserve the required Maple Leaf campus capacity and relevant local program resources.</span></li>
                <li><strong>Student Recruitment</strong><span>Launch student recruitment through the participating school or partner organization.</span></li>
                <li><strong>Final Confirmation &amp; Contract</strong><span>Confirm the final participant numbers, program arrangements and complete the formal agreement.</span></li>
              </ol>
              <p>Specific timelines may vary depending on the destination, school calendar and program requirements.</p>
            </div>
          </details>
        </div>
      </section>

      <section className="immersion-cta">
        <Label>Build Your Program</Label>
        <h2>Bring Your Students into a Real Chinese School</h2>
        <p>Tell us your preferred dates, group size, student ages and learning goals. Our team will recommend a suitable campus and program format.</p>
        <a className="button-primary" href="#footer">Contact Us</a>
      </section>
      <Footer />
      <FloatingContactBar />
    </>
  )
}

function TravelToChinaProgramPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const culturalPastProgramVideos = ['adBls5ptIig', 'y8WWlZy3lp0', '0DL9qcthl3E']

  useEffect(() => {
    if (!activeVideoId) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVideoId(null)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [activeVideoId])

  return (
    <>
      <Nav />
      <section className="immersion-hero cultural-hero">
        <img className="immersion-hero-image" src="/images/travel-to-china/BJ2A0683.JPG" alt="Student wearing traditional Chinese ethnic clothing in a garden" />
        <div className="immersion-hero-shade" />
        <div className="immersion-hero-copy">
          <Label>Travel to China Program</Label>
          <h1><span>Discover China.</span> <span>Learn by Experience.</span></h1>
          <div className="hero-actions"><a className="button-primary" href="#overview">Explore the Journey</a><a className="button-secondary" href="#footer">Plan Your Program</a></div>
        </div>
      </section>

      <section className="immersion-intro" id="overview">
        <div><h2>Program Structure</h2><img className="immersion-intro-image" src="/images/travel-to-china/cc228eec4f359857f5a32a1ea6de5b1c.jpg" alt="Students exploring Chinese culture in traditional clothing" /></div>
        <div className="cultural-structure-grid">
          <article><span>01</span><h3><strong>20–50</strong> Students per Group</h3><p>Suitable for school groups of different sizes.</p></article>
          <article><span>02</span><h3><strong>1:8–1:10</strong> Student–Staff Ratio</h3><p>Close supervision and dedicated support throughout the program.</p></article>
          <article><span>03</span><h3>Hotel | <strong>Twin Sharing</strong></h3><p>2 students per room</p></article>
          <article><span>04</span><h3>Maple Leaf Residence | <strong>Quad Sharing</strong></h3><p>4 students per room</p></article>
        </div>
      </section>

      <section className="immersion-highlights"><div className="immersion-section-heading"><Label>Program Highlights</Label><h2>Program Highlights</h2></div><div className="immersion-highlight-grid">
        {culturalHighlights.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div></section>

      <section className="immersion-day immersion-past-programs">
        <div className="immersion-section-heading"><Label>Past Programs</Label><h2>Previous Student Experiences</h2></div>
        <div className="immersion-video-grid">
          {culturalPastProgramVideos.map((videoId, index) => (
            <button className="immersion-video-item" key={videoId} type="button" aria-label={`Play past program video ${index + 1}`} onClick={() => setActiveVideoId(videoId)}>
              <span className="immersion-video-frame"><img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" /><span className="immersion-video-play" aria-hidden="true" /></span>
            </button>
          ))}
        </div>
      </section>

      {activeVideoId && (
        <div className="immersion-video-modal" role="dialog" aria-modal="true" aria-label="YouTube video player" onClick={() => setActiveVideoId(null)}>
          <div className="immersion-video-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button className="immersion-video-close" type="button" aria-label="Close video" onClick={() => setActiveVideoId(null)}>×</button>
            <div className="immersion-video-embed"><iframe src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0`} title="Past program video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          </div>
        </div>
      )}

      <section className="immersion-locations"><div className="immersion-section-heading"><Label>Featured Destinations</Label><h2>Choose Your China</h2><p>Build a focused single-city experience or connect several destinations to compare China’s diverse regional cultures.</p></div><div className="immersion-location-grid">
        {culturalDestinations.map((location) => <article key={location.name}>{location.images ? <div className="cultural-destination-split">{location.images.map((image, index) => <img src={image} alt={index === 0 ? 'Chengdu traditional street' : 'Chongqing skyline and river bridge'} key={image} />)}</div> : <img src={location.image} alt={`${location.name} cultural destination`} style={{ objectPosition: location.imagePosition }} />}<h3>{location.name}</h3><p className="immersion-location-levels">{location.levels}</p><p className="immersion-location-focus">{location.focus}</p><p>{location.description}</p></article>)}
      </div><div className="immersion-location-footer"><a className="button-primary" href="/#locations">Explore Destinations</a><p>Destination availability and specific experiences may vary by season, group profile and local arrangements.</p></div></section>

      <section className="immersion-included cultural-included"><div className="immersion-support-intro"><Label>What’s Included</Label><h2>Supported from Arrival to Departure</h2><p>Our team brings each cultural journey together with student-ready logistics, trusted local partners and attentive on-the-ground coordination.</p></div><div className="immersion-support-main-image"><img src={asset('city-hong-kong.png')} alt="A Chinese cultural travel destination" /></div><div className="immersion-support-list"><p>Program support may include:</p><ul>{culturalSupportItems.map((item) => <li key={item}>{item}</li>)}</ul></div><p className="immersion-support-note">Final inclusions, accommodation, meals, transportation and supervision arrangements will be confirmed in the tailored proposal.</p></section>

      <section className="immersion-faq"><div className="immersion-section-heading"><Label>FAQ</Label><h2>Frequently Asked Questions</h2></div><div className="immersion-faq-list">
        <details><summary><span>Who are your China study travel programs designed for?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary><div className="immersion-faq-answer"><p>Our programs are designed for international schools, K–12 schools, educational institutions, and student groups seeking meaningful educational experiences in China.</p></div></details>
        <details><summary><span>Can the program be customized for our school?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary><div className="immersion-faq-answer"><p>Yes. Programs can be tailored to your school’s curriculum, grade level, learning objectives, interests, group size, preferred destinations and travel dates.</p></div></details>
        <details><summary><span>Can our teachers accompany the students?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary><div className="immersion-faq-answer"><p>Yes. School teachers are welcome to accompany their students and support student supervision and group management throughout the program.</p></div></details>
        <details><summary><span>How far in advance should we plan our trip?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary><div className="immersion-faq-answer"><p>We generally recommend starting the planning process at least 3 months in advance, especially for programs involving Maple Leaf campus resources, customized activities and accommodation arrangements.</p></div></details>
        <details><summary><span>How are international flights and travel insurance arranged?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary><div className="immersion-faq-answer"><p>For school groups, we generally recommend that the school arrange round-trip international flights as a group, as well as travel medical insurance for participating students and teachers. Our team can coordinate the local program arrangements in China accordingly.</p></div></details>
        <details><summary><span>What is the process for arranging a program?</span><span className="immersion-faq-indicator" aria-hidden="true" /></summary><div className="immersion-faq-answer">
          <p>The typical process includes four steps:</p>
          <ol className="immersion-faq-steps">
            <li><strong>Program &amp; Quotation</strong><span>Confirm the program concept, proposed itinerary and quotation.</span></li>
            <li><strong>Resource Reservation</strong><span>Secure the required Maple Leaf campus capacity and relevant local program resources.</span></li>
            <li><strong>Student Recruitment</strong><span>Launch student recruitment through the participating school or partner organization.</span></li>
            <li><strong>Final Confirmation &amp; Contract</strong><span>Confirm the final number of participants, finalize program arrangements and complete the formal agreement.</span></li>
          </ol>
        </div></details>
      </div></section>

      <section className="immersion-cta"><Label>Build Your Journey</Label><h2>Bring Chinese Culture to Life for Your Students</h2><p>Tell us your preferred dates, group size, student ages and learning goals. Our team will design a meaningful cultural journey through China.</p><a className="button-primary" href="#footer">Plan Your Program</a></section>
      <Footer />
      <FloatingContactBar />
    </>
  )
}


function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const isChineseLanguagePage = currentPath === '/programs/chinese-language'
  const isSchoolImmersionPage = currentPath === '/programs/school-immersion'
  const isTravelToChinaProgramPage =
    currentPath === '/programs/travel-to-china' || currentPath === '/programs/chinese-cultural-discovery'

  return (
    <main className="site-page">
      {isChineseLanguagePage ? (
        <ChineseLanguageProgramsPage />
      ) : isTravelToChinaProgramPage ? (
        <TravelToChinaProgramPage />
      ) : isSchoolImmersionPage ? (
        <SchoolImmersionProgramsPage />
      ) : (
        <>
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
        </>
      )}
    </main>
  )
}

export default App
