import React, {Component} from 'react'
import { connect } from 'react-redux'
import Alphabet  from './Alphabet'


function SvgWords({input, w, h, width, height, color, movement}) {
    const newW  = w * 0.8
    const inputArr = input.toLowerCase().split("")


  const innerWidth = w * 0.8
  const qnt = input.length
  const btnMax = innerWidth / qnt
  const btnWidth = btnMax * 0.80
  const spacing = btnWidth * 0.20


  let y =  (0.5 * h)

    return(
      inputArr.map((letter, idx) => {


      let x = ((w - innerWidth) / 2) + (btnWidth * idx) + (idx * spacing)
      // let y =  (0.5 * h)

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
          // console.log(Alphabet(color, movement).a)
          return Alphabet(color, movement, x, "600", "200", "200", idx)[letter]
        }


})
)
// return (
//             inputArr.map((letter) => {
//                   return Alphabet(color, movement, x, "200", "200", "200")[letter]
//               })
//           )


}



// class WordsForm extends Component

class WordsContainer extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    console.log("FINAL HOME RUN", this.props)
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


export default connect(mapState, null)(WordsContainer)


  //   <g>
  // {/* A */}
  //   <svg  x={ w * 0.1 + ((newW / 2) * 0 ) } y={ 0.25 * h }  width={ (newW / 2)}  height={ 0.5 * h }  viewBox='0 0 64 64'>
  //       <polygon opacity=".8"  fill="#006128" points='30.4,40.7 40,52 64,63.9 47.2,31.9 30.3,-0.1 28,20 30.4,40.7 30.4,40.7'/>
  //       <polygon opacity=".8" fill="#a2ecc1" points='30,38.4 15.3,54.9 0,64 14.5,31.5 29,-1.1 31.3,18.9 30,38.4 30,38.4'/>
  //   </svg>

  // {/* B */}
  //   <svg x={ w * 0.1 + ((newW / 2) * 1 ) } y={ 0.25 * h }  width={ (newW / 2)}  height={ 0.5 * h } viewBox="0 0 32 64" >
  //     <polygon opacity=".8"  fill="#00cc55" points="22.8,30 4,16 4,40 4,64 20,56 28,40 "/>
  //     <polygon opacity=".8"  fill="#79e4a6" points="20.7,24.8 15.8,8 4,0 4,26 4,52 12,39 "/>
  //   </svg>




// input&& inputArr.map((letter) => {
//       if (letter === ' ') {
//         return (
//           <svg
//             x={ w * 0.1 + ( (newW / 2) * 0 ) } y={ 0.25 * h }
//             width={ (newW / 2)}
//             height={ 0.5 * h }
//             viewBox='0 0 64 64'
//           >
//           </svg>
//         )
//       }
//       else if ( 'abcdefghijklmnopqrstuvwxyz'.includes(letter) ) {
//         console.log(Alphabet(color, movement).a)
//         return ( Alphabet(color, movement)[letter] )
//       }
//     })
