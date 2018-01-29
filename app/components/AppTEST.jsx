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
    const { w, h } = this.props

    const clrs= ["#e3f9ec", "#c5f3d8", "#a2ecc1", "#79e4a6", "#46da84", "#00cc55", "#00b84c", "#00a243", "#008638", "#006128"]

    return (

              <Canvas{ ...this.props }>
              <AllSVGs />
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
    color: state.color
  }
}

const mapDispatch = {windowResize}

export default connect(mapState,mapDispatch)(App)
