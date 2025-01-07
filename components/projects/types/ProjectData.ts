import { StaticImageData } from "next/image"

export type Images = {
    name: string,
    imagePath: StaticImageData
}

export interface ProjectData {
    name: string
    slug: string
    year: string
    images: Images[]
}
