export type ImageAsset = {
  src: string
  srcSet: string
  sizes: string
  alt: string
}

export type ArtworkItem = {
  title: string
  category: string
  year: string
  medium: string
  dimensions: string
  description: string
  image: ImageAsset
}

export type FeaturedArtworkItem = ArtworkItem & {
  thumb: ImageAsset
}