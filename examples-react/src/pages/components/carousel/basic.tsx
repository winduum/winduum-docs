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
                        Prev
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
                        Next
                    </button>
                </>
            )}
        </Carousel>
    )
}

