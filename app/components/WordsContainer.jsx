import React, {Component} from 'react'


export default class WordsContainer extends Component{

  constructor(props) {
    super(props)
    this.state =  {
  	clicked: false
    }
    this.clickhandler = this.clickhandler.bind(this)
  }

 clickhandler( evt ) {
    this.setState({clicked: !this.state.clicked})
 }


  render() {
    const stylesArray = [ {
	    animation: 'scatter1 1s',
	    transformOrigin: '50% 100%',
	    animationDelay: '2ms',
	  },
    {
	    animation: 'scatter2 2s',
	    transformOrigin: '50% 100%',
	    animationDelay: '2ms',
	  },
    {
	    animation: 'scatter3 3s',
	    transformOrigin: '50% 100%',
	    animationDelay: '2ms',
	  }]

		function getRandomStyle(stylesArr) {
		  return stylesArr[Math.floor(Math.random() * stylesArr.length)]
		}

  	const movement = this.state.clicked? getRandomStyle(stylesArray) : {}

  	const TRANSFORM = this.props.transform? this.props.transform : 'rotate(0)'
  	const COLOR = this.props.color? this.props.color : '#c5f3d8'
  	const SHAPE = this.props.shape? this.props.shape : "25.4,13.7 5.7,0 5.7,32 5.7,64 25,51.5 34.4,32 "

  	return(

	 	 	<svg
	 	 		onClick={this.clickhandler}
		  	className = 'letter'
		  	opacity='.8'
		  	fill={COLOR}>
		    <polygon style={movement} transform={TRANSFORM} points={SHAPE}/>
		  </svg>

  		)
	}



}




// <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
    // <polygon opacity=".8"  fill="#006128" points='30.4,40.7 40,52 64,63.9 47.2,31.9 30.3,-0.1 28,20 30.4,40.7 30.4,40.7'
    // />
    // <polygon opacity=".8" fill="#a2ecc1" points='30,38.4 15.3,54.9 0,64 14.5,31.5 29,-1.1 31.3,18.9 30,38.4 30,38.4'
    // />
// </svg>




// const { w, h } = this.props

//   const color = '#b8a900'
//   const x = 50
//   const y = 200

//   const angles = [45, 0, 0].join(' ')

//     return (
//       <svg  x={x} y={y}>
//         <path transform={`rotate(${angles})`} style={ styles } d={ pathData } fill={ color } />
//       </svg>
//     )

