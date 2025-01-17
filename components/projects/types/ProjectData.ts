import { Images } from "@/types"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface ProjectData {
    name: string
    slug: string
    year: string
    images: Images[]
    technologiesImages: StaticImport[]
}
