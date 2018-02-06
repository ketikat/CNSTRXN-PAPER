import React from 'react'
import { connect } from 'react-redux'
import { changeColor } from '../store'
import PaletteMaker  from './PaletteMaker'

function ColorNav(props){

  const clrBtns = ['#bec4c8', '#4a9eda', '#6872e0', '#9966e0', '#d665e0', '#cc0077', '#cc0011', '#cc5500', '#d7c938', '#96d73b', '#54da48', '#46da84', '#44d9cd' ]

  const { w, h } = props
  const innerWidth = w * 0.8
  const qnt = clrBtns.length
  const btnMax = innerWidth / qnt
  const btnWidth = btnMax * 0.80
  const spacing = btnWidth * 0.20

  const selectedColor =  (evt) => {
    evt.preventDefault()
    console.log('EVT TARGET ', evt.target)
    const num =  evt.target.getAttribute('palette')
    const colorP = PaletteMaker(num)
    props.changeColor(colorP)
  }


  return (
    clrBtns.map( (clr, idx) => {
        return (

            <rect
              key={idx}
              palette={idx}
              //Do NOT delete the equation below.
              x={ ((w - innerWidth) / 2) + (btnWidth * idx) + (idx * spacing)}
              y={ (0.1 * h) }
              width={btnWidth}
              height={ 0.1 * h }
              onClick={selectedColor}
              fill={ clr }
            />
        )
    })
  )
}


 function mapState (state) {
  console.log(state)
  return {
      color: state.color
  }
}

  const mapDispatch = {changeColor}

export default connect(mapState, mapDispatch)(ColorNav)
