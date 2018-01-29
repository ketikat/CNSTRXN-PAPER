import React, { Component } from 'react'
import { connect } from 'react-redux'
import Canvas from './canvas.jsx'
import {AllSVGs} from './SVGs.jsx'
import { windowResize } from '../store'

require ('../styles.css')


class App extends Component {

  constructor(props) {
    super(props)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    setTimeout(() => this.handleResize(), 150)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    const { width, height, w, h } = this.props
    // const newW  = w * 0.8

    console.log(this.props)
    const clrs= ["#e3f9ec", "#c5f3d8", "#a2ecc1", "#79e4a6", "#46da84", "#00cc55", "#00b84c", "#00a243", "#008638", "#006128"]


                // const newW  = w * 0.8;
                // x={ w * 0.1 + ((newW / clrs.length) * idx ) } y={ 0.25 * h }
                // width={ (newW / clrs.length)}
                // height={ 0.5 * h }



    return (

              <Canvas{ ...this.props }>
              <AllSVGs { ...this.props }/>
              </Canvas>

    )
  }

  handleResize () {
    this.props.windowResize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

}

function mapState(state) {
  return {
    w: window.innerWidth,
    h: window.innerHeight,
    // color: state.color
    width: state.windowPROPS.width,
    height: state.windowPROPS.height,
}
}

const mapDispatch = {windowResize}

export default connect(mapState,mapDispatch)(App)


// x={ 0.1625 * w + (0.15 * w * idx) } y={ 0.25 * h }
// https://github.com/winkerVSbecks/react-svg-starter/blob/master/src/containers/app.js
