import { Image } from '@/components/image'

export function Example() {
    return (
        <Image className="before:skeleton" as="picture">
            <source srcSet="https://placehold.co/250x250/333333/webp" media="(min-width: 40rem)" />
            <img className="aspect-[3/2]" src="https://placehold.co/150x150/777777/webp" loading="lazy" alt="" />
        </Image>
    )
}

