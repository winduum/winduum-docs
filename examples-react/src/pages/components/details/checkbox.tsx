import { Details } from '@/components/details'

export function Example() {
    return (
        <Details className="group bg-body-secondary p-4 rounded-md">
            <summary className="w-fit flex">
                <label className="x-check">
                    <input type="checkbox" autoComplete="off" />
                    Fill more
                </label>
            </summary>
            <div className="x-control max-w-96 mt-4">
                <input />
            </div>
        </Details>
    )
}

