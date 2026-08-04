import { useRef } from "react"
import { Range } from "@/components/range"

export function Example() {
    const startElement = useRef<HTMLInputElement>(null)

    return (
        <>
            <Range refs={{ startElement }}>
                {({ setValue }) => (
                    <input ref={startElement} type="range" defaultValue="0" step="10" max="100" min="0" aria-labelledby="single" id="range-single" onInput={setValue} />
                )}
            </Range>

            <output className="before:content-[attr(data-unit)]" data-unit="$" aria-label="Price" id="single">10 000</output>
        </>
    )
}

