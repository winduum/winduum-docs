import { useRef } from 'react'
import { Carousel } from '@/components/carousel'

const slides = [1, 2, 3, 4, 5, 6]

export function Example() {
    const contentElement = useRef<HTMLDivElement>(null)
    const prevElement = useRef<HTMLButtonElement>(null)
    const nextElement = useRef<HTMLButtonElement>(null)
    const paginationElement = useRef<HTMLDivElement>(null)

    return (
        <Carousel
            className="flex flex-col gap-4"
            refs={{ contentElement, prevElement, nextElement, paginationElement }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Carousel gallery"
        >
            {({ scrollPrev, scrollNext, onScroll }) => (
                <>
                    <div className="flex gap-4 items-center">
                        <button ref={prevElement} className="x-button circle muted" aria-label="Prev" disabled onClick={scrollPrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <div
                            ref={contentElement}
                            className="x-carousel-content gap-4 w-full"
                            tabIndex={-1}
                            onScroll={(event) => onScroll(event, {
                                pagination: { element: paginationElement.current ?? undefined }
                            })}
                        >
                            {slides.map((slide) => (
                                <div key={slide} className="x-image rounded-md w-full">
                                    <img src="https://placehold.co/160x240" alt="" loading="lazy" width="160" height="240" />
                                </div>
                            ))}
                        </div>
                        <button ref={nextElement} className="x-button circle muted" aria-label="Next" onClick={scrollNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div ref={paginationElement} className="justify-center flex gap-1.5 h-4 py-4" aria-hidden="true">
                        {slides.map((slide, index) => (
                            <div
                                key={slide}
                                className="dot size-2 bg-body-secondary transition data-active:bg-accent"
                                data-active={index === 0 ? true : undefined}
                            ></div>
                        ))}
                    </div>
                </>
            )}
        </Carousel>
    )
}
