declare module '*.svg' {
  import React from 'react'
  export const svg: React.FC<React.SVGProps<SVGSVGElement>>
  export default svg
}

declare module '@code-hike/mdx/dist/components.cjs' {
  import { CH } from '@code-hike/mdx/dist/components.cjs'

  export const CH
  export default CH
}
