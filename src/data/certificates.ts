import { getImageAsset } from '../lib/assets'
import type { ImageAsset } from '../types/artwork'

export type CertificateItem = {
  title: string
  issuer: string
  year: string
  note: string
  image: ImageAsset
}

export const certificates: CertificateItem[] = [
  {
    title: 'Ihe Ncheta Exhibition',
    issuer: 'Dominican University Archives and Center for Igbo Studies',
    year: '2025',
    note:
      'Certificate of participation recognizing several artworks shown at the Ihe Ncheta Exhibition in River Forest, Illinois.',
    image: getImageAsset(
      'certificate-ihe-ncheta-exhibition',
      undefined,
      'Ihe Ncheta Exhibition certificate',
    ),
  },
  {
    title: 'Overall Best Student in Art SS2',
    issuer: 'Command Day Secondary School Oshodi',
    year: '2017',
    note:
      'Certificate of honour awarded for outstanding qualities and excellent performance during the 2016/2017 academic session.',
    image: getImageAsset(
      'certificate-best-in-arts',
      undefined,
      'Overall Best Student in Art SS2 certificate',
    ),
  },
  {
    title: 'Inter CSSs/NMS Cultural Presentation Competition',
    issuer: 'Command Day Secondary School Oshodi',
    year: '2018',
    note:
      'Recognition plaque presented for outstanding performance at the Inter CSSs/NMS Cultural Presentation Competition.',
    image: getImageAsset(
      'certificate-aso-rock-abuja',
      undefined,
      'Inter CSSs/NMS Cultural Presentation Competition plaque',
    ),
  },
]
