import { Compare } from '@/components/compare'

export function Example() {
    return (
        <Compare className="rounded w-fit accent-dark">
            <input type="range" step="0.1" aria-hidden="true" />
            <div className="x-button circle" aria-hidden="true">
                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                    <path className="-translate-x-1.5 scale-75 origin-center" strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    <path className="translate-x-1.5 scale-75 origin-center" strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className="x-image">
                <div className="bg-primary text-light text-9xl font-black grid place-content-center p-6">PRIMARY</div>
                <div className="bg-main text-body text-9xl font-black grid place-content-center p-6">PRIMARY</div>
            </div>
        </Compare>
    )
}

