import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    interface Star {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      twinkleSpeed: number
    }
    const stars: Star[] = []
    const numStars = 200
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.015 + 0.003,
      })
    }
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed
        if (star.opacity >= 1 || star.opacity <= 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed
        }
        star.y -= star.speed
        star.x += star.speed * 0.2
        if (star.y < 0) {
          star.y = canvas.height
          star.x = Math.random() * canvas.width
        }
        if (star.x > canvas.width) {
          star.x = 0
        }
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.9})`
        ctx.fill()
        if (star.size > 1) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.1})`
          ctx.fill()
        }
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
