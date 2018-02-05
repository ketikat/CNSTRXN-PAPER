import React, { Component } from 'react'
import { connect } from 'react-redux'
import Canvas from './canvas.jsx'
import {AllSVGs} from './SVGs.jsx'
import { windowResize } from '../store'
import ColorNav from './colorNav.jsx'

require('../styles.css')


class App extends Component {

  constructor(props) {
    super(props)
    this.handleResize = this.handleResize.bind(this)
    // this.handleColorClick = this.handleColorClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    setTimeout(() => this.handleResize(), 150)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize () {
    this.props.windowResize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  render() {
    return (
          <Canvas { ...this.props }>
              <ColorNav { ...this.props } />
              <AllSVGs { ...this.props } />
          </Canvas>
    )
  }
}

function mapState(state) {
  return {
      w: window.innerWidth,
      h: window.innerHeight,
      width: state.windowPROPS.width,
      height: state.windowPROPS.height
  }
}

const mapDispatch = {windowResize}

export default connect(mapState, mapDispatch)(App)
