import { useRef, useState } from 'react'

interface DragScrollProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>
  handleMouseDown: (e: React.MouseEvent) => void
  handleScroll: () => void
  handleMouseUp: () => void
  handleMouseLeave: () => void
  handleMouseMove: (e: React.MouseEvent) => void
}

const useDragScroll = (): DragScrollProps => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDown, setisDown] = useState(false)
  const [pos, setPos] = useState({ left: 0, top: 0, x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    setisDown(true)
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollTop } = scrollContainerRef.current
      setPos({
        left: scrollLeft,
        top: scrollTop,
        x: e.clientX,
        y: e.clientY
      })

      const scrollContainer = scrollContainerRef.current
    }
  }

  const handleMouseLeave = () => {
    setisDown(false)
  }

  const handleMouseUp = () => {
    setisDown(false)
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDown) {
      const x = e.clientX - pos.x
      if (scrollContainerRef.current) {
        const scrollContainer = scrollContainerRef.current
        scrollContainer.scrollLeft = pos.left - x
      }
    }
  }

  const handleScroll = () => {
    return
  }

  return { scrollContainerRef, handleScroll, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove }
}

export default useDragScroll
