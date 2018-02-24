import React, { Component } from 'react'
import { connect } from 'react-redux'
import { windowResize } from '../store'
import WordsContainer from './WordsContainer'
import Canvas from './Canvas'
import WordsForm from './WordsForm'
import ColorNav from './ColorNav'

require('../styles.css')


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

  handleResize () {
    this.props.windowResize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  render() {

    return (
      <div>
          {/* NO OTHER HTML CAN GO INSIDE OF THE CANVAS */}
          <Canvas className="CanvasContainer"{ ...this.props }>
            <ColorNav className="ColorNavContainer" {...this.props } />
            <WordsContainer ref="myExport" { ...this.props } />
          </Canvas>

          <WordsForm />
      </div>
    )
  }
}

function mapState(state) {
  return {
      w: window.innerWidth,
      h: window.innerHeight,
      width: state.windowPROPS.width,
      height: state.windowPROPS.height,
      input: state.input
  }
}

const mapDispatch = {windowResize}

export default connect(mapState, mapDispatch)(App)



