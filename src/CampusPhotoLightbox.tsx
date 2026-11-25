import type { KeyboardEvent } from 'react'
import Lightbox, { useLightboxState } from 'yet-another-react-lightbox'
import type { SlideImage } from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

export type CampusPhotoSlide = SlideImage & { caption: string }

type Props = {
  slides: readonly CampusPhotoSlide[]
  index: number
  dialogId: string
  label: string
  close: () => void
  restoreFocus: () => void
}

const closeLabel = 'Close gallery'

function keepFocusInGallery(event: KeyboardEvent<HTMLDivElement>) {
  if (event.key !== 'Tab') return

  const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')
  const first = buttons[0]
  const last = buttons[buttons.length - 1]
  const focused = event.currentTarget.ownerDocument.activeElement
  const wrapTo = event.shiftKey && focused === first ? last : !event.shiftKey && focused === last ? first : null
  if (!wrapTo) return

  event.preventDefault()
  wrapTo.focus()
}

function PhotoDetails({ slides }: { slides: Props['slides'] }) {
  const { currentIndex } = useLightboxState()
  return (
    <div className="campus-photo-lightbox-details" role="status" aria-atomic="true">
      <span>{slides[currentIndex].caption}</span>
      <span className="campus-photo-counter">{currentIndex + 1} / {slides.length}</span>
    </div>
  )
}

export default function CampusPhotoLightbox({ slides, index, dialogId, label, close, restoreFocus }: Props) {
  return (
    <Lightbox
      open
      index={index}
      close={close}
      slides={slides}
      plugins={[Zoom]}
      className="campus-photo-lightbox"
      carousel={{ imageFit: 'contain', padding: 12, preload: 1 }}
      animation={{ fade: 180, navigation: 220, swipe: 260 }}
      controller={{ closeOnBackdropClick: true }}
      portal={{ container: { id: dialogId, onKeyDown: keepFocusInGallery } }}
      labels={{
        Lightbox: label,
        Close: closeLabel,
        Previous: 'Previous photo',
        Next: 'Next photo',
      }}
      on={{
        entered: () => document.getElementById(dialogId)?.querySelector<HTMLButtonElement>(`[aria-label="${closeLabel}"]`)?.focus({ preventScroll: true }),
        exited: restoreFocus,
      }}
      render={{ controls: () => <PhotoDetails slides={slides} /> }}
    />
  )
}
