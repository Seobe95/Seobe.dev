import Image from 'next/image'

export default function CustomImage(props: any) {
  const { title, alt, src } = props
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={768}
      height={384}
      style={{ width: 'auto', height: 'auto' }}
      priority
    />
  )
}
