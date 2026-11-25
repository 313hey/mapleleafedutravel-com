import CampusPhotoGallery from './CampusPhotoGallery'
import { accommodationCampuses } from './accommodationData'
import './AccommodationPage.css'

export default function AccommodationPage() {
  return (
    <div className="accommodation-page">
      <header className="accommodation-intro">
        <div className="section-label"><span aria-hidden="true" /><p>Accommodation & Campus Facilities</p></div>
        <h1>A Place to Settle In</h1>
        <p>Explore student accommodation, campus surroundings and everyday facilities at Maple Leaf schools in China.</p>
        <nav className="accommodation-jump" aria-label="Browse campus accommodation">
          {['Shanghai', 'Shenzhen', 'Hainan', 'Chongqing', 'Tianjin', 'Wuhan'].map((city) => (
            <a key={city} href={'#stay-' + (city === 'Tianjin' ? 'tianjin-teda' : city.toLowerCase())}>{city}</a>
          ))}
        </nav>
      </header>
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
