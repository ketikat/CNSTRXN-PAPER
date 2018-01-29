import React, { Component } from 'react'
import WordsContainer from './WordsContainer.jsx'


const clrs= ["#e3f9ec", "#c5f3d8", "#a2ecc1", "#79e4a6", "#46da84", "#00cc55", "#00b84c", "#00a243", "#008638", "#006128"]


function getRandomColor(clrs) {
  return newColor = clrs[Math.floor(Math.random() * clrs.length)]
}


export const AllSVGs = ({width, height, w, h }) =>{
  console.log(width, height)
  const newW  = w * 0.8

                // width={ (newW / 2)}
                // height={ 0.5 * h }
                // x={ w * 0.1 + ((newW / clrs.length) * idx ) } y={ 0.25 * h }

  return (
		<g>

    <svg  x={ w * 0.1 + ((newW / 2) * 0 ) } y={ 0.25 * h }  width={ (newW / 2)}  height={ 0.5 * h }  viewBox='0 0 64 64'>
        <polygon opacity=".8"  fill="#006128" points='30.4,40.7 40,52 64,63.9 47.2,31.9 30.3,-0.1 28,20 30.4,40.7 30.4,40.7'/>
        <polygon opacity=".8" fill="#a2ecc1" points='30,38.4 15.3,54.9 0,64 14.5,31.5 29,-1.1 31.3,18.9 30,38.4 30,38.4'/>
    </svg>


    <svg x={ w * 0.1 + ((newW / 2) * 1 ) } y={ 0.25 * h }  width={ (newW / 2)}  height={ 0.5 * h } viewBox="0 0 32 64" >
      <polygon opacity=".8"  fill="#00cc55" points="22.8,30 4,16 4,40 4,64 20,56 28,40 "/>
      <polygon opacity=".8"  fill="#79e4a6" points="20.7,24.8 15.8,8 4,0 4,26 4,52 12,39 "/>
    </svg>

		</g>
	)
}


      // <WordsContainer color={clrs[5]} />
// x={ 0.1625 * w + (0.15 * w * 1) }


// <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
//     <polygon points='30.4,40.7 40,52 64,63.9 47.2,31.9 30.3,-0.1 28,20 30.4,40.7 30.4,40.7'
//     />
//     <polygon points='30,38.4 15.3,54.9 0,64 14.5,31.5 29,-1.1 31.3,18.9 30,38.4 30,38.4'
//     />
// </svg>
