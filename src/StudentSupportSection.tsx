import { useEffect, useRef } from 'react'
import CampusPhotoGallery from './CampusPhotoGallery'
import type { CampusPhoto } from './CampusPhotoGallery'
import './StudentSupportSection.css'

const services = [
  {
    title: 'Comfortable Accommodation',
    description: 'Campus boarding facilities or carefully selected hotels.',
    icon: 'M3 18V6m0 9h18v3M3 11h15a3 3 0 0 1 3 3v1M7 11V8h4a2 2 0 0 1 2 2v1',
  },
  {
    title: 'Meals & Dietary Support',
    description: 'Daily meals, with halal options available upon request.',
    icon: 'M4 3v5a3 3 0 0 0 6 0V3M7 3v18m13-18c-2.7 1.8-4 4.5-4 8h4m0-8v18',
  },
  {
    title: 'Safety & Supervision',
    description: 'Supervised student activities and controlled access to campus and accommodation areas.',
    icon: 'M12 3 5 6v5c0 4.4 2.7 7.5 7 10 4.3-2.5 7-5.6 7-10V6l-7-3Zm-3 9 2 2 4-4',
  },
  {
    title: 'Reliable Transportation',
    description: 'Licensed transportation providers.',
    icon: 'M5 18V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12H5Zm0-7h14M7 18v2m10-2v2m-9-5h.01m8 0h.01',
  },
  {
    title: 'Dedicated Program Support',
    description: 'Program coordination and 24-hour support where applicable, including residential supervision where arranged.',
    icon: 'M4 13v-1a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-3m-10-7h3v5H6a2 2 0 0 1-2-2v-3Zm16 0h-3v5h1a2 2 0 0 0 2-2v-3Z',
  },
  {
    title: 'Emergency Preparedness',
    description: 'Established risk management and emergency response procedures.',
    icon: 'M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm7 3v7m-3-3.5h6',
  },
]

const photos: readonly CampusPhoto[] = [
  {
    src: '/images/student-support/boarding-room-secondary.png',
    thumbnail: '/images/student-support/thumbnails/boarding-room-secondary.webp',
    width: 1448,
    height: 1086,
    caption: 'Student Accommodation',
    alt: 'Maple Leaf boarding room with a loft bed, study desk and wardrobe',
  },
  {
    src: '/images/student-support/cafeteria-students.jpg',
    thumbnail: '/images/student-support/thumbnails/cafeteria-students.webp',
    width: 1920,
    height: 1280,
    caption: 'School Dining',
    alt: 'Students eating lunch together in a Maple Leaf campus cafeteria',
  },
  {
    src: '/images/student-support/laundry-facility.png',
    thumbnail: '/images/student-support/thumbnails/laundry-facility.webp',
    width: 1448,
    height: 1086,
    caption: 'Laundry Facilities',
    alt: 'Washing machines and storage in a student accommodation laundry room',
  },
]

export default function StudentSupportSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.location.hash !== '#student-support') return
    const revealSection = () => sectionRef.current?.scrollIntoView({ behavior: 'instant' })
    revealSection()
    if (document.readyState === 'complete') return
    window.addEventListener('load', revealSection, { once: true })
    return () => window.removeEventListener('load', revealSection)
  }, [])

  return (
    <section ref={sectionRef} className="student-support" id="student-support" aria-labelledby="student-support-title">
      <div className="student-support-inner">
        <div className="student-support-layout">
          <div className="student-support-content">
            <header className="student-support-heading">
              <div className="section-label"><span aria-hidden="true" /><p>Accommodation &amp; Student Support</p></div>
              <h2 id="student-support-title">Designed for Student Groups</h2>
              <p>A safe, comfortable and supportive environment for students throughout their journey in China.</p>
            </header>

            <ul className="student-support-services">
              {services.map(({ title, description, icon }) => (
                <li key={title}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={icon} />
                  </svg>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <CampusPhotoGallery
            className="student-support-gallery"
            dialogId="student-support-lightbox"
            label="Accommodation and student support photo gallery"
            photos={photos}
          />
        </div>
        <p className="student-support-note">Accommodation, meals, transportation, supervision arrangements and safety procedures vary by campus and program. Full details will be confirmed in the final proposal.</p>
      </div>
    </section>
  )
}
