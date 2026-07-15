import { useRef } from 'react'
import { Range } from '@/components/range'

export function Example() {
    const startElement = useRef<HTMLInputElement>(null)
    const endElement = useRef<HTMLInputElement>(null)

    return (
        <>
            <Range className="accent-warning" refs={{ startElement, endElement }}>
                {({ setValue }) => (
                    <>
                        <input ref={startElement} type="range" defaultValue="0" step="100" max="10000" min="0" id="range-from" aria-labelledby="from" onInput={setValue} />
                        <input ref={endElement} type="range" defaultValue="10000" step="100" max="10000" min="0" id="range-to" aria-labelledby="to" onInput={setValue} />
                    </>
                )}
            </Range>

            <div className="flex-between items-center">
                <output className="before:content-[attr(data-unit)]" data-unit="$" aria-label="Price from" id="from">0</output>
                <output className="before:content-[attr(data-unit)]" data-unit="$" aria-label="Price to" id="to">10 000</output>
            </div>
        </>
    )
}

