import { useEffect, useRef } from 'react'
import CampusPhotoGallery from './CampusPhotoGallery'
import type { CampusPhoto } from './CampusPhotoGallery'
import './CampusLifeGallery.css'

const imageDirectory = '/images/campus-life'

const photos = [
  { file: 'classroom-learning.webp', width: 1920, height: 1280, caption: 'Classrooms & Learning Spaces', alt: 'Students working together around a classroom table' },
  { file: 'ai-learning-space.jpg', width: 2784, height: 1856, caption: 'AI & Technology Labs', alt: 'Technology classroom with rows of computer workstations' },
  { file: 'swimming-pool.jpg', width: 1440, height: 1080, caption: 'Swimming Pools', alt: 'Outdoor campus swimming pool surrounded by trees' },
  { file: 'ice-sports-center.jpg', width: 1440, height: 1080, caption: 'Ice Sports Facilities', alt: 'Exterior of the Maple Leaf International Ice Sports Center beyond a playing field' },
  { file: 'auditorium.jpg', width: 3663, height: 2441, caption: 'Performing Arts', alt: 'School auditorium seating and performance stage' },
  { file: 'boarding-room.png', width: 1448, height: 1086, caption: 'Boarding Houses', alt: 'Boarding room with a loft bed, desk and wardrobe' },
  { file: 'dining-hall.png', width: 1448, height: 1086, caption: 'Dining Facilities', alt: 'Campus dining hall with long tables beside large windows' },
]

const galleryPhotos: readonly CampusPhoto[] = photos.map(({ file, ...photo }) => ({
  ...photo,
  src: `${imageDirectory}/${file}`,
  thumbnail: `${imageDirectory}/thumbnails/${file.replace(/\.[^.]+$/, '.webp')}`,
}))

export default function CampusLifeGallery() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.location.hash !== '#campus-life') return
    const revealGallery = () => sectionRef.current?.scrollIntoView({ behavior: 'instant' })
    revealGallery()
    if (document.readyState === 'complete') return
    window.addEventListener('load', revealGallery, { once: true })
    return () => window.removeEventListener('load', revealGallery)
  }, [])

  return (
    <section ref={sectionRef} className="immersion-campus-life" id="campus-life" aria-labelledby="campus-life-title">
      <div className="campus-life-content">
        <header className="campus-life-heading">
          <div className="section-label"><span aria-hidden="true" /><p>Campus Life</p></div>
          <h2 id="campus-life-title">Learn, Live, Play &amp; Create</h2>
          <p>Discover the learning spaces, sports facilities and residential environments that support everyday life at Maple Leaf schools.</p>
        </header>

        <CampusPhotoGallery
          className="campus-life-grid"
          dialogId="campus-life-lightbox"
          label="Campus facilities photo gallery"
          photos={galleryPhotos}
        />

        <p className="campus-life-note">Facilities and access arrangements vary by campus. Some facilities are available only as part of scheduled activities.</p>
      </div>
    </section>
  )
}
