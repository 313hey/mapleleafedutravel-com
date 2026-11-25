import { campusOfficialInfo } from './campusOfficialSources'
import type { CampusOfficialInfo } from './campusOfficialSources'

const immersionLocationsById = {
  shenzhen: {
    id: 'shenzhen',
    name: 'SHENZHEN',
    image: '/images/campuses/shenzhen.webp',
    levels: 'Primary · Middle · High School',
    focus: 'Technology & Innovation',
    description: 'Study at the home campus of Maple Leaf Education Group and explore Shenzhen’s technology and innovation ecosystem.',
  },
  chongqing: {
    id: 'chongqing',
    name: 'CHONGQING',
    image: '/images/campuses/chongqing-cropped.webp',
    levels: 'Kindergarten · Primary · Middle · High School',
    focus: 'Culture & Urban Exploration',
    description: 'Experience school life while discovering Chongqing’s distinctive landscape, three-dimensional cityscape and urban development.',
  },
  wuhan: {
    id: 'wuhan',
    name: 'WUHAN',
    image: '/images/campuses/wuhan.webp',
    levels: 'Primary · Middle · High School · School for Foreign Nationals',
    focus: 'International Education & Sports',
    description: 'Learn in a multicultural campus environment with international education resources and access to a professional-standard ice hockey facility.',
  },
  shanghai: {
    id: 'shanghai',
    name: 'SHANGHAI',
    image: '/images/campuses/shanghai.webp',
    levels: 'High School',
    focus: 'Global City & Culture',
    description: 'Combine high school learning with the culture, international outlook and modern development of Shanghai.',
  },
  hainan: {
    id: 'hainan',
    name: 'HAINAN',
    image: '/images/campuses/hainan.webp',
    levels: 'Kindergarten · Primary · Middle · High School',
    focus: 'Boarding Life & Tropical China',
    description: 'Experience boarding school life while discovering the culture, nature and tropical environment of China’s island province.',
  },
  dalian: {
    id: 'dalian',
    name: 'DALIAN',
    image: '/images/campuses/dalian.webp',
    levels: 'Kindergarten · Primary · Middle · High School · School for Foreign Nationals',
    focus: 'Ice & Snow · Coastal China',
    description: 'Experience northern China’s snow-covered winter landscapes alongside a multicultural campus experience in one of the country’s leading coastal cities.',
  },
} as const

type ImmersionLocation = (typeof immersionLocationsById)[keyof typeof immersionLocationsById]
type Campus = CampusOfficialInfo & {
  id: string
  name: string
  location: string
  point?: readonly [number, number]
  profile?: ImmersionLocation
}

// Coordinates are in the official September 2026 PDF map's SVG viewBox,
// expressed on the same 1,400-unit scale used to extract the base artwork.
export const campusMapView = { x: 176, y: 195, width: 900, height: 745 }

function featuredCampus(
  name: string,
  location: string,
  point: readonly [number, number],
  detail: ImmersionLocation,
): FeaturedCampus {
  return {
    id: detail.id,
    name,
    location,
    point,
    profile: detail,
    ...campusOfficialInfo[detail.id],
  }
}

type FeaturedCampus = Campus & { point: readonly [number, number]; profile: ImmersionLocation }

const { shenzhen, chongqing, wuhan, shanghai, hainan, dalian } = immersionLocationsById

export const featuredCampuses: readonly FeaturedCampus[] = [
  featuredCampus('Shenzhen', 'Guangdong, China', [796, 819], shenzhen),
  featuredCampus('Chongqing', 'Chongqing, China', [678, 697], chongqing),
  featuredCampus('Wuhan', 'Hubei, China', [793, 677], wuhan),
  featuredCampus('Shanghai', 'Shanghai, China', [898, 649], shanghai),
  featuredCampus('Hainan (Haikou)', 'Haifeng & Jiangdong · Hainan, China', [727, 879], hainan),
  featuredCampus('Dalian', 'Liaoning, China', [888, 502], dalian),
]

export const groupCampuses: readonly Campus[] = ([
  { id: 'horinger', name: 'Horinger', location: 'Inner Mongolia, China', point: [744, 490] },
  { id: 'tianjin-teda', name: 'Tianjin TEDA', location: 'Tianjin, China', point: [836, 512] },
  { id: 'tianjin-huayuan', name: 'Tianjin Huayuan', location: 'Tianjin, China', point: [825, 498] },
  { id: 'jinan', name: 'Jinan', location: 'Shandong, China', point: [828, 554] },
  { id: 'xian', name: 'Xi’an', location: 'Shaanxi, China', point: [711, 610] },
  { id: 'luoyang', name: 'Luoyang', location: 'Henan, China', point: [760, 608] },
  { id: 'huaian', name: 'Huai’an', location: 'Jiangsu, China', point: [859, 613] },
  { id: 'yancheng', name: 'Yancheng', location: 'Jiangsu, China', point: [878, 610] },
  { id: 'zhenjiang', name: 'Zhenjiang', location: 'Jiangsu, China', point: [873, 637] },
  { id: 'xiangyang', name: 'Xiangyang', location: 'Hubei, China', point: [761, 652] },
  { id: 'huzhou', name: 'Huzhou', location: 'Zhejiang, China', point: [882, 657] },
  { id: 'yiwu', name: 'Yiwu', location: 'Zhejiang, China', point: [888, 691] },
  { id: 'luzhou', name: 'Luzhou', location: 'Sichuan, China', point: [657, 706] },
] satisfies readonly Campus[]).map((campus) => ({ ...campus, ...campusOfficialInfo[campus.id] }))

export const overseasCampuses: readonly Campus[] = ([
  { id: 'kingsley', name: 'Maple Leaf Kingsley International School', location: 'Kuala Lumpur, Malaysia' },
  { id: 'cis', name: 'Canadian International School', location: 'Singapore' },
] satisfies readonly Campus[]).map((campus) => ({ ...campus, ...campusOfficialInfo[campus.id] }))

export const campusCardId = (id: string) => `immersion-campus-${id}`

export type { Campus }
