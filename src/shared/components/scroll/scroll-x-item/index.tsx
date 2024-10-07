import React, { useEffect, useState } from 'react'
import { ScrollXType } from './props'
import useDragScroll from '../drag-x-scroll/drag_scroll'

const ScrollXComponent = (props: ScrollXType) => {
  const { scrollContainerRef, handleMouseDown, handleMouseUp, handleMouseMove, handleMouseLeave } = useDragScroll()

  const [isScroll, setIsScroll] = useState<boolean>(false)

  useEffect(() => {
    if (scrollContainerRef.current && props.scrollExist && props.id && !isScroll) {
      const dataEl = document.getElementById(props.id as string)
      console.log(dataEl?.scrollWidth, 'Data Element')
      if (scrollContainerRef.current.scrollWidth > 500) {
        scrollContainerRef.current.scrollLeft = props.scrollExist ?? 0
        setIsScroll(true)
      }
    }
  }, [props.scrollExist, props.triggerData])

  return (
    <div
      ref={scrollContainerRef}
      id={props.id ?? 'vertical-scroll'}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onScroll={e => {
        if (props.onScroll) {
          props.onScroll(e)
        }
      }}
      className={`flex overflow-x-auto w-full select-none cursor-pointer scroll-smooth ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  )
}

export default ScrollXComponent
