import { useRef } from 'react'
import { Carousel } from '@/components/carousel-experimental'

const slides = [1, 2, 3, 4, 5, 6]

export function Example() {
    const contentElement = useRef<HTMLDivElement>(null)
    const markerGroupElement = useRef<HTMLElement>(null)
    const prevElement = useRef<HTMLButtonElement>(null)
    const nextElement = useRef<HTMLButtonElement>(null)

    return (
        <Carousel
            className="flex flex-col gap-4"
            refs={{ contentElement, markerGroupElement, prevElement, nextElement }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Carousel gallery"
        >
            {({ scrollPrev, scrollNext, toggleScrollState, scrollToMarker }) => (
                <>
                    <div className="flex gap-4 items-center">
                        <button ref={prevElement} className="x-button circle muted" aria-label="Prev" disabled onClick={scrollPrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <div ref={contentElement} className="x-carousel-experimental-content gap-4 w-full" tabIndex={-1} onScroll={toggleScrollState}>
                            {slides.map((slide) => (
                                <div key={slide} className="x-image rounded-md" id={`slide-${slide}`} data-snapped={slide === 1 ? '' : undefined}>
                                    <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240" />
                                </div>
                            ))}
                        </div>
                        <button ref={nextElement} className="x-button circle muted" aria-label="Next" onClick={scrollNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <nav ref={markerGroupElement} className="x-carousel-experimental-marker-group justify-center flex gap-1.5 py-4" aria-label="Carousel navigation">
                        {slides.map((slide) => (
                            <a
                                key={slide}
                                href={`#slide-${slide}`}
                                className="x-carousel-experimental-marker"
                                aria-label={`Slide ${slide}`}
                                aria-current={slide === 1 ? 'true' : undefined}
                                onClick={scrollToMarker}
                            ></a>
                        ))}
                    </nav>
                </>
            )}
        </Carousel>
    )
}

