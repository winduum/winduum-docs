import { Image } from '@/components/image'

export function Example() {
    return (
        <Image className="before:skeleton">
            <img className="aspect-[3/2]" src="https://placehold.co/600x400/webp" loading="lazy" alt="" />
        </Image>
    )
}

