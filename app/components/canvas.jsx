import React from 'react'

/**
 * SVG Canvas
 * This component generates the base SVG
 * and sets up all the sub-components
 */
const Canvas = ({ w, h, children }) => {
  const viewBox = [0, 0, w, h].join(' ')
  // console.log("!!!!!!!FROM CANVAS PROPS w,h,children!!!!!!!! : ", w, h, children)

  return (
    <svg version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={ viewBox }
      style={ styles }>
      { children }
    </svg>
  )
}

const styles = { display: 'block' }

export default Canvas
