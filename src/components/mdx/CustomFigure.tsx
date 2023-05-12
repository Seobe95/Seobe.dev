import { HTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'

interface FigurePropsType extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string
  alt: string
  title: string
  caption: ReactNode
}

const CustomFigure= ({ alt, caption, src, title, props}: any) => {
  return (
    <figure {...props}>
      <img src={src} alt={alt} title={title} />
      {caption}
    </figure>
  )
}

export default CustomFigure
