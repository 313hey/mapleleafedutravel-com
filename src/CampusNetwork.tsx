import { useEffect, useRef, useState } from 'react'
import { campusCardId, campusMapView, featuredCampuses, groupCampuses, overseasCampuses } from './campusNetworkData'
import type { Campus } from './campusNetworkData'
import { officialSchoolDirectory } from './campusOfficialSources'
import './CampusNetwork.css'

const mappedCampuses = [...featuredCampuses, ...groupCampuses].flatMap((campus) => {
  if (!campus.point) return []
  const [x, y] = campus.point
  return [{
    campus,
    x: (x - campusMapView.x) / campusMapView.width,
    y: (y - campusMapView.y) / campusMapView.height,
  }]
})
const allCampuses = [...featuredCampuses, ...groupCampuses, ...overseasCampuses]
const featuredMapLabels = mappedCampuses.filter(({ campus }) => campus.profile)

function closestCampus(map: HTMLDivElement, clientX: number, clientY: number) {
  const { left, top, width, height } = map.getBoundingClientRect()
  // Touch targets can overlap at small sizes. Give the gesture to the nearest dot.
  let nearest = mappedCampuses[0].campus
  let distance = Infinity
  for (const marker of mappedCampuses) {
    const dx = clientX - (left + marker.x * width)
    const dy = clientY - (top + marker.y * height)
    const squared = dx * dx + dy * dy
    if (squared < distance) {
      nearest = marker.campus
      distance = squared
    }
  }
  return nearest
}

function exploreCampus(campus: Campus) {
  const card = document.getElementById(campusCardId(campus.id))
  if (!card) return
  card.focus({ preventScroll: true })
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  card.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'instant' : 'smooth' })
}

export default function CampusNetwork() {
  const [selected, setSelected] = useState<Campus>(featuredCampuses[0])
  const [hovered, setHovered] = useState<Campus>()
  const [focused, setFocused] = useState<Campus>()
  const sectionRef = useRef<HTMLElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const labelCampus = hovered ?? focused ?? selected
  const labelMarker = labelCampus.profile ? undefined : mappedCampuses.find(({ campus }) => campus.id === labelCampus.id)

  useEffect(() => {
    if (window.location.hash !== '#campus-network') return
    const scrollToNetwork = () => sectionRef.current?.scrollIntoView({ behavior: 'instant' })
    scrollToNetwork()
    if (document.readyState === 'complete') return
    window.addEventListener('load', scrollToNetwork, { once: true })
    return () => window.removeEventListener('load', scrollToNetwork)
  }, [])

  return (
    <section ref={sectionRef} className="campus-network" id="campus-network" aria-labelledby="campus-network-title">
      <div className="campus-network-inner">
        <header className="campus-network-heading">
          <div className="section-label"><span aria-hidden="true" /><p>Our Campus Network</p></div>
          <h2 id="campus-network-title">Choose Your Campus</h2>
          <p>School immersion programs are available at selected Maple Leaf campuses across China, offering different academic, cultural and regional experiences.</p>
        </header>

        <div className="campus-network-layout">
          <div className="campus-network-map-panel">
            <div
              ref={mapRef}
              className="campus-network-map"
              role="group"
              aria-label="Maple Leaf campuses in China"
              onPointerMove={(event) => {
                if (event.pointerType === 'touch') return
                const overMarker = event.target instanceof Element && event.target.closest('.campus-network-pin')
                setHovered(overMarker ? closestCampus(event.currentTarget, event.clientX, event.clientY) : undefined)
              }}
              onPointerLeave={() => setHovered(undefined)}
            >
              <img
                className="campus-network-basemap"
                src="/images/campuses/china-campus-map.svg"
                alt="China map with the South China Sea islands inset"
                width={campusMapView.width}
                height={campusMapView.height}
                loading="lazy"
              />
              {mappedCampuses.map(({ campus, x, y }) => (
                <button
                  key={campus.id}
                  className={`campus-network-pin${campus.profile ? ' campus-network-pin-featured' : ''}`}
                  style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
                  type="button"
                  aria-label={campus.name}
                  aria-pressed={selected.id === campus.id}
                  aria-controls="campus-network-profile"
                  onFocus={(event) => {
                    if (event.currentTarget.matches(':focus-visible')) {
                      setHovered(undefined)
                      setFocused(campus)
                    }
                  }}
                  onBlur={() => setFocused(undefined)}
                  onClick={(event) => {
                    const map = mapRef.current
                    setSelected(event.detail && map ? closestCampus(map, event.clientX, event.clientY) : campus)
                  }}
                >
                  <span className="campus-network-dot" aria-hidden="true" />
                </button>
              ))}
              {featuredMapLabels.map(({ campus, x, y }) => (
                <span
                  key={campus.id}
                  className="campus-network-map-label"
                  data-campus={campus.id}
                  style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
                  aria-hidden="true"
                >
                  {campus.id === 'hainan' ? 'Haikou' : campus.name}
                </span>
              ))}
              {labelMarker && (
                <span
                  className="campus-network-tooltip"
                  data-campus={labelCampus.id}
                  style={{ left: `${labelMarker.x * 100}%`, top: `${labelMarker.y * 100}%` }}
                  aria-hidden="true"
                >
                  {labelCampus.name}
                </span>
              )}
            </div>
            <div className="campus-network-controls">
              <ul className="campus-network-legend" aria-label="Map legend">
                <li><span aria-hidden="true" /> School immersion</li>
                <li><span aria-hidden="true" /> Other Maple Leaf campuses</li>
              </ul>
              <label className="campus-network-picker">
                <span>Find a campus</span>
                <select
                  value={selected.id}
                  onChange={(event) => {
                    const campus = allCampuses.find((entry) => entry.id === event.target.value)
                    if (campus) setSelected(campus)
                  }}
                  aria-controls="campus-network-profile"
                >
                  <optgroup label="School immersion">
                    {featuredCampuses.map((campus) => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                  </optgroup>
                  <optgroup label="Other campuses in China">
                    {groupCampuses.map((campus) => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                  </optgroup>
                  <optgroup label="Outside China">
                    {overseasCampuses.map((campus) => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                  </optgroup>
                </select>
              </label>
            </div>
            <a className="campus-network-external campus-network-directory" href={officialSchoolDirectory} target="_blank" rel="noopener noreferrer">
              Explore the Full Maple Leaf School Network <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="campus-network-profiles" id="campus-network-profile">
            <span className="campus-network-status" role="status">{selected.name} · {selected.location}</span>
            {allCampuses.map((campus) => {
              const active = selected.id === campus.id
              const profile = campus.profile
              const image = campus.campusImage ?? profile?.image
              return (
                <article
                  key={campus.id}
                  className="campus-network-card"
                  aria-hidden={!active}
                  aria-labelledby={`campus-network-name-${campus.id}`}
                >
                  {image && (
                    <div className="campus-network-media">
                      {active && <img src={image} alt={`Maple Leaf campus in ${campus.name}`} loading="lazy" decoding="async" />}
                    </div>
                  )}
                  <div className="campus-network-card-body">
                    <p className="campus-network-category">{profile ? 'School Immersion' : 'Maple Leaf Campus'}</p>
                    <h3 id={`campus-network-name-${campus.id}`}>{campus.name}</h3>
                    <p className="campus-network-location">{campus.location}</p>
                    {profile && (
                      <>
                        <p className="campus-network-levels">{profile.levels}</p>
                        <p className="campus-network-focus">{profile.focus}</p>
                        <p className="campus-network-description">{profile.description}</p>
                      </>
                    )}
                    {!profile && campus.schoolInfo && <p className="campus-network-school-info">{campus.schoolInfo}</p>}
                    <div className="campus-network-actions">
                      {profile && (
                        <button type="button" className="button-primary campus-network-explore" onClick={() => exploreCampus(campus)}>
                          Explore Campus <span aria-hidden="true">↓</span>
                        </button>
                      )}
                      {campus.officialWebsite && (
                        <a className="campus-network-external" href={campus.officialWebsite} target="_blank" rel="noopener noreferrer">
                          Visit Official School Website <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="campus-network-featured" aria-labelledby="campus-network-featured-title">
          <h3 id="campus-network-featured-title">Featured Campuses</h3>
          <div className="campus-network-grid">
            {featuredCampuses.map(({ id, name, profile, officialWebsite }) => (
              <article key={id} id={campusCardId(id)} tabIndex={-1}>
                <img src={profile.image} alt={`${profile.name} Maple Leaf campus`} loading="lazy" decoding="async" />
                <h4>{profile.name}</h4>
                <p className="campus-network-grid-levels">{profile.levels}</p>
                <p className="campus-network-focus">{profile.focus}</p>
                <p>{profile.description}</p>
                {officialWebsite && (
                  <a
                    className="campus-network-external campus-network-card-link"
                    href={officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit School Website for ${name}`}
                  >
                    Visit School Website <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
        <p className="campus-network-disclaimer">Campus availability, eligible age groups and program experiences are subject to school calendars and individual campus arrangements.</p>
      </div>
    </section>
  )
}
