declare module '*.svg' {
  import React from 'react'
  export const svg: React.FC<React.SVGProps<SVGSVGElement>>
  export default svg
}
