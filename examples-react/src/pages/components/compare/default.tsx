import { Compare } from '@/components/compare'

export function Example() {
    return (
        <Compare className="rounded size-fit accent-light">
            <input type="range" step="0.1" aria-hidden="true" />
            <div className="x-button circle" aria-hidden="true">
                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                    <path className="-translate-x-1.5 scale-75 origin-center" strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    <path className="translate-x-1.5 scale-75 origin-center" strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className="x-image">
                <img src="https://placehold.co/896x504/333/webp" alt="Image 1" loading="lazy" width="896" height="504" />
                <img src="https://placehold.co/896x504/888/webp" alt="Image 2" loading="lazy" width="896" height="504" />
            </div>
        </Compare>
    )
}

