import { Image } from '@/components/image'

export function Example() {
    return (
        <Image className="before:skeleton">
            <img className="aspect-[3/2]" src="https://picsum.photos/seed/picsum/300/200" loading="lazy" alt="" />
        </Image>
    )
}
