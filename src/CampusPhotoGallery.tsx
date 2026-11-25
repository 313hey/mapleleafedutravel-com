import { lazy, Suspense, useRef, useState } from 'react'
import type { CampusPhotoSlide } from './CampusPhotoLightbox'
import './CampusPhotoGallery.css'

const CampusPhotoLightbox = lazy(() => import('./CampusPhotoLightbox'))

export type CampusPhoto = CampusPhotoSlide & { thumbnail: string }

type Props = {
  className: string
  dialogId: string
  label: string
  photos: readonly CampusPhoto[]
}

export default function CampusPhotoGallery({ className, dialogId, label, photos }: Props) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const trigger = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <div className={className}>
        {photos.map((photo, index) => (
          <figure key={photo.src}>
            <button
              type="button"
              className="campus-photo-button"
              aria-label={`Enlarge ${photo.caption}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                trigger.current = event.currentTarget
                setSelectedPhoto(index)
              }}
            >
              <img src={photo.thumbnail} alt={photo.alt} loading="lazy" decoding="async" />
              <span className="campus-photo-expand" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 5h5v5m0-5-5 5M10 19H5v-5m0 5 5-5" />
                </svg>
              </span>
            </button>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      {selectedPhoto !== null && (
        <Suspense>
          <CampusPhotoLightbox
            slides={photos}
            index={selectedPhoto}
            dialogId={dialogId}
            label={label}
            close={() => setSelectedPhoto(null)}
            restoreFocus={() => trigger.current?.focus({ preventScroll: true })}
          />
        </Suspense>
      )}
    </>
  )
}
