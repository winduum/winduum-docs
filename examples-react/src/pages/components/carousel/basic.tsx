import { useRef } from 'react'
import { Carousel } from '@/components/carousel'

export function Example() {
    const contentElement = useRef<HTMLDivElement>(null)
    const prevElement = useRef<HTMLButtonElement>(null)
    const nextElement = useRef<HTMLButtonElement>(null)

    return (
        <Carousel
            className="flex gap-4 items-center w-full"
            refs={{ contentElement, prevElement, nextElement }}
        >
            {({ scrollPrev, scrollNext, onScroll }) => (
                <>
                    <button ref={prevElement} className="x-button circle muted" aria-label="Prev" disabled onClick={scrollPrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <div ref={contentElement} className="x-carousel-content gap-2 w-full" tabIndex={-1} onScroll={onScroll}>
                        <div className="x-image w-full rounded-md aspect-square">
                            <img src="https://placehold.co/512" alt="" loading="lazy" />
                        </div>
                        <div className="x-image w-full rounded-md aspect-square">
                            <img src="https://placehold.co/512" alt="" loading="lazy" />
                        </div>
                    </div>
                    <button ref={nextElement} className="x-button circle muted" aria-label="Next" onClick={scrollNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </>
            )}
        </Carousel>
    )
}
