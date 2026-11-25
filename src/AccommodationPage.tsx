import CampusPhotoGallery from './CampusPhotoGallery'
import { accommodationCampuses } from './accommodationData'
import './AccommodationPage.css'

export default function AccommodationPage() {
  return (
    <div className="accommodation-page">
      <section className="immersion-hero accommodation-hero" aria-labelledby="accommodation-title">
        <img className="immersion-hero-image" src="/images/accommodation/shanghai-1.webp"
          alt="Gardens and school buildings at Maple Leaf Shanghai campus" fetchPriority="high" />
        <div className="immersion-hero-shade" />
        <div className="immersion-hero-copy">
          <div className="section-label"><span aria-hidden="true" /><p>Accommodation & Campus Facilities</p></div>
          <h1 id="accommodation-title">A Place to Settle In</h1>
          <p>Explore student accommodation, campus surroundings and everyday facilities at Maple Leaf schools in China.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#accommodation-campuses">Explore Campuses</a>
            <a className="button-secondary" href="#footer">Plan Your Stay</a>
          </div>
        </div>
      </section>
      <div className="accommodation-intro" id="accommodation-campuses">
        <nav className="accommodation-jump" aria-label="Browse campus accommodation">
          {['Shanghai', 'Shenzhen', 'Hainan', 'Chongqing', 'Tianjin', 'Wuhan'].map((city) => (
            <a key={city} href={'#stay-' + (city === 'Tianjin' ? 'tianjin-teda' : city.toLowerCase())}>{city}</a>
          ))}
        </nav>
      </div>
      {accommodationCampuses.map((campus) => (
        <section className="accommodation-campus" id={'stay-' + campus.id} key={campus.id} aria-labelledby={'stay-title-' + campus.id}>
          <header>
            <div className="section-label"><span aria-hidden="true" /><p>Maple Leaf Schools</p></div>
            <h2 id={'stay-title-' + campus.id}>{campus.name}</h2>
            <p>Explore the accommodation and facilities shown in this campus’s photo collection.</p>
          </header>
          <CampusPhotoGallery className="accommodation-gallery" dialogId={'stay-gallery-' + campus.id}
            label={campus.name + ' accommodation and facilities'} photos={campus.photos} />
        </section>
      ))}
      <section className="accommodation-planning">
        <div className="section-label"><span aria-hidden="true" /><p>Plan Your Stay</p></div>
        <h2>Accommodation for Your Student Group</h2>
        <p>Campus boarding or selected hotel accommodation may be arranged according to your destination, group profile and travel dates. Room type, occupancy, bathroom arrangements, meals and supervision will be confirmed in your final proposal.</p>
        <p className="accommodation-note">Photographs show specific campus spaces. Room allocation and access to facilities depend on availability and the agreed program.</p>
        <a className="button-primary" href="#footer">Discuss Your Group’s Stay</a>
      </section>
    </div>
  )
}
