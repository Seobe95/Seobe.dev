import Image from 'next/image'
import styled from 'styled-components'

const ImageContainer = styled(Image)`
    width: 100%;
    height: auto;
`

export default function CustomImage(props: any) {
  const { title, alt, src } = props
  return <ImageContainer src={src} alt={alt} title={title} width={768} height={413} priority />
}
