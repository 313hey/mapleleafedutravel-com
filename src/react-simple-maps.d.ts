declare module 'react-simple-maps' {
  import type { ComponentType, ReactNode, SVGProps } from 'react'

  export type GeographyObject = {
    rsmKey: string
    properties: Record<string, string>
  }

  export const ComposableMap: ComponentType<
    SVGProps<SVGSVGElement> & {
      projectionConfig?: Record<string, unknown>
      projection?: string
    }
  >

  export const Geographies: ComponentType<{
    geography: string | Record<string, unknown>
    children: (args: { geographies: GeographyObject[] }) => ReactNode
  }>

  export const Geography: ComponentType<
    SVGProps<SVGPathElement> & {
      geography: GeographyObject
      style?: Record<string, Record<string, unknown>>
    }
  >

  export const Marker: ComponentType<
    SVGProps<SVGGElement> & {
      coordinates: [number, number]
      children?: ReactNode
    }
  >
}
