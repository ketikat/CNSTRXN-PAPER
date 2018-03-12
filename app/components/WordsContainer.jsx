import React, {Component} from 'react'
import { connect } from 'react-redux'
import Alphabet  from './Alphabet'
import ReactDOM from 'react-dom'
import {changeExportData} from '../store'

function SvgWords({input, w, h, width, height, color, movement}) {

  const newW  = w * 0.8
  const inputArr = input.toLowerCase().split("")
  const innerWidth = w * 0.8
  const qnt = input.length
  const btnMax = innerWidth / qnt
  const btnWidth = btnMax * 0.80
  const spacing = btnWidth * 0.20
  const y =  (0.5 * h)
  const viewBox = [0, 0, w, h].join(' ')

  return(
    <svg  overflow="visible" viewBox={viewBox} y={75}>

      { inputArr.map((letter, idx) => {

          let x = ((w - innerWidth) / 2) + (btnWidth * idx) + (idx * spacing)
          let y =  (0.5 * h)

            if (letter === ' ') {
              return(
                      <svg key={idx}
                        x={x}
                        y={y}
                        width={btnWidth}
                        height={y}
                      >
                      </svg>
              )
            }
            else if ('abcdefghijklmnopqrstuvwxyz'.includes(letter)) {
              return Alphabet(color, movement, x, 100, btnWidth, y, idx)[letter]
            }
        })
      }
    </svg>
  )

}

class WordsContainer extends Component {

  constructor (props) {
    super(props)
  }

   componentDidUpdate() {
    const toExport = ReactDOM.findDOMNode(this)
    this.props.changeExportData(toExport)

 }

  render () {
    return (
          <SvgWords {...this.props} />
    )
  }
}

function mapState(state) {
  return {
    color: state.color,
    movement: state.movement
  }
}

const mapDispatch = {changeExportData}

export default connect(mapState, mapDispatch)(WordsContainer)
