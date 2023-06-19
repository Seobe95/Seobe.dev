import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function CustomImage(props: any) {
  const { title, alt, src } = props
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      const heightRatio = 0.523 // 이미지의 가로세로 비율 (512 / 768)
      const windowHeight = window.innerHeight
      const maxImageHeight = windowHeight * 0.8 // 이미지의 최대 높이 (뷰포트 높이의 80%)
      const imageWidth = Math.min(768, window.innerWidth)
      const imageHeight = Math.min(maxImageHeight, imageWidth * heightRatio)
      setHeight(imageHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={768}
      height={402}
      style={{ height: "auto", maxHeight: "402" }}
      priority
    />
  )
}
