import React from 'react'

export default function Alphabet(color, movement, x, y, width, height, key) {


  function randomColor() {
      return color[Math.floor(Math.random() * color.length)]
  }

  function styleSelector() {
      const num = Math.floor(Math.random() * 50)
      let animationName= `animation${num} 2s ease-in-out`

      return (
              { animation: animationName ,
                transformOrigin: '50% 50%',
                animationDelay: '5ms'}
      )
  }

  return (
      {
        a:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64' >
          <polygon opacity='.8' style={movement?styleSelector(): {} } fill={randomColor()} points='30.4,40.7 40,52 64,63.9 47.2,31.9 30.3,-0.1 28,20 30.4,40.7 30.4,40.7'/>
          <polygon opacity='.8' style={movement?styleSelector(): {} } fill={randomColor()} points='30,38.4 15.3,54.9 0,64 14.5,31.5 29,-1.1 31.3,18.9 30,38.4 30,38.4'/>
        </svg>
        ),

      b:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='22.8,30 4,16 4,40 4,64 20,56 28,40 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='20.7,24.8 15.8,8 4,0 4,26 4,52 12,39 '/>
        </svg>
        ),

      c:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='12.4,9.9 24,5.1 46.7,2.1 26.8,23.4 6.8,44.6 6.8,27.1 12.4,9.9 12.4,9.9 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='19.9,60.7 9.9,48.2 5,30.2 29.3,43.4 53.6,56.7 36.9,60.7 19.9,60.7 19.9,60.7 '/>
        </svg>
        ),

      d:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='25.4,13.7 5.7,0 5.7,32 5.7,64 25,51.5 34.4,32 '/>
        </svg>
        ),

      e:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='12.4,54.2 24.9,61.4 41.1,63 22.3,44.2 3.6,25.5 5.6,41.6 12.4,54.2 12.4,54.2 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='29.6,0 12.4,8.9 3.3,27.4 29.6,27.4 56,27.4 49.4,9.9 29.6,0 29.6,0 '/>
         </svg>
        ),

      f:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='19,39.4 15.8,10.4 3.7,-0.2 3.7,31.8 3.7,63.8 13.7,47.8 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='47.5,9.2 62,-0.2 33,-0.2 4,-0.2 19,15.5 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='27.5,34 40.4,31.8 51,22 27.5,22 4,22 15.8,28 27.5,34 27.5,34 '/>
          </svg>
        ),

      g:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='51.9,34.1 42.1,24.4 41.9,43.6 41.7,62.8 53,55.1 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='10.6,8.8 27.3,2.8 47.3,0.5 26,23.2 4.6,46 4.6,27.7 10.6,8.8 10.6,8.8 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='17.2,62.8 7.3,48 2.1,30.6 27.3,44.4 52.5,58.1 34.4,62.8 17.2,62.8 17.2,62.8 '/>
          </svg>
        ),

      h:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='35.8,38.5 43,32 27,32 11,32 17.4,38.1 27,42.4 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='44.6,14.7 35,0 35,32 35,64 43,48 45.9,32 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='13.4,47.8 3,64 3,32 3,0 14.5,20.4 '/>
        </svg>
        ),

      i:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='6,36.7 10.9,48 17.8,64 17.8,32 17.8,0 9.3,8 '/>
        </svg>
        ),

      j:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='49.7,30 45.8,16.8 36.3,0 36.3,30 36.3,60 45.3,46.2 49.7,30 49.7,30 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='25.1,64 41.2,60 46.7,44 25.1,44 3.4,44 10.7,58.1 25.1,64 25.1,64 '/>
        </svg>
        ),

      k:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='4.5,32 10.5,52.2 16.5,64 16.5,32 16.5,0 9,10.3 4.5,32 4.5,32 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='37.2,16.8 44.4,0 24.6,16.8 4.7,33.7 17.4,33.7 29.4,30 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='34.3,48.1 44.4,64.7 22,48.6 1.8,34.1 21.1,34.1 '/>
        </svg>
        ),

      l:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='18.5,32 15.1,51 3,64 3,32 3,0 10.7,16 18.5,32 18.5,32 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='41.3,54.2 52,63.8 28,63.8 4,63.8 12.5,54.8 28,51.4 '/>
        </svg>
        ),

      m:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='7,56.3 14.1,64 14.1,32 14.1,0 6.1,10.6 2.5,32.5 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='25.1,11.5 25.8,19.4 26.6,27.4 19,14.2 11.5,1 21.5,5.3 25.1,11.5 25.1,11.5 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='57.2,32 51.2,48 42.4,64 42.4,32 42.4,0 52.6,13.1 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='26.7,10.6 26.5,19.3 26.2,28 34.3,14 42.5,0 32.1,5.1 26.7,10.6 26.7,10.6 '/>
        </svg>
        ),

      n:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='36.3,26.5 42.3,43.9 44.3,62.3 24.7,32.5 5.1,2.6 20.7,14.6 36.3,26.5 36.3,26.5 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='33,32.5 39.1,54.4 47.1,64.5 47.1,32.5 47.1,0.5 37.3,15.3 33,32.5 33,32.5 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='12,16 4.9,0 4.9,32 4.9,64 14.5,49.8 15.9,32 '/>
        </svg>
        ),

      o:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='60,32 50.2,11.7 32,0 32,32 32,64 48.8,54.2 60,32 60,32 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='4,32 14.1,56.2 28,64 28,32 28,0 12.5,8 4,32 4,32 '/>
        </svg>
        ),

      p:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='40.4,19.1 32.3,7.1 14,0 14,20 14,40 30,33 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='2.8,51.6 13,64 13,32 13,0 5,16 '/>
        </svg>
        ),

      q:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='6.8,46.1 26.4,54.2 46.9,54.2 26.4,29.7 5.9,5.2 3.7,25.4 6.8,46.1 6.8,46.1 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='48.4,11.3 27.7,3.4 8.9,2.6 29.5,27.1 50,51.7 52.4,29.7 48.4,11.3 48.4,11.3 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='58.3,48.3 46.9,39.1 38.7,38.4 49.7,51.6 60.8,64.8 59.3,54.8 '/>
        </svg>
        ),

      r:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='18.8,36.6 14,48 4,64 4,32 4,0 14,10 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='47.8,64 6.5,36.5 19.5,34.9 29.2,38.1 40.9,50.4 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='35.1,19.8 29.1,4.9 13.3,-0.2 13.3,19.8 13.3,39.8 26.3,29.8 '/>
         </svg>
        ),

      s:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='26.7,7.6 21.3,23.5 22.5,36.8 39.2,20.1 55.9,3.4 39.9,3.4 26.7,7.6 26.7,7.6 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='35.9,58.2 40.6,42.1 36.8,25.2 19.9,42.1 3,59 19.1,62.5 '/>
         </svg>
        ),

      t:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='28,48 36,64 36,32 36,0 23.1,25.8 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='32,13.6 12.9,11 0,0 32,0 64,0 50.2,11.5 '/>
        </svg>
        ),

      u:(
         <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='33.1,64 50.2,59.8 60.2,40 33.1,40 5.9,40 17,58.5 33.1,64 33.1,64 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='7.9,48.8 14.8,56.4 14.8,30.4 14.8,4.4 7.9,13.8 3.4,32.1 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='59.8,26.4 56.9,13.4 50,0.4 50,26.4 50,52.4 60,40.9 '/>
         </svg>
        ),

      v:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='53.3,41 44.3,54 30,64 42.6,32 55.2,0 56.9,22 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='15.8,54 30,64 17.5,32 4.9,0 3.2,22 5.6,44.2 '/>
         </svg>
        ),

      w:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='46.4,46.1 51.7,63.2 56.9,31.6 62,0 46.4,23.7 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='15,42.3 12.7,53.1 10.4,64 24.8,51.4 38.7,37.5 22.8,38.9 15,42.3 15,42.3 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='17.9,29 16.6,46.1 11.3,63.2 6.1,31.6 1,0 14.5,12.8 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='49.6,43.6 52,54.2 54.4,64.9 40.1,52.4 25.9,40 38.6,40 49.6,43.6 49.6,43.6 '/>
         </svg>
        ),

      x:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='44.3,28.6 24.2,13.5 2,9.4 31.7,36.9 61.3,64.3 52.8,43.5 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='27.6,25.5 41.6,9.5 59,-0.2 17.1,65.1 27.6,25.5 '/>
         </svg>
        ),

      y:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='31,29.8 29,48.8 39,63.7 43.1,32 47.1,0.3 36.5,15 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='18,36.6 7.8,23.6 4.3,4.2 23.3,20.4 42.3,36.6 30.1,36.6 18,36.6 18,36.6 '/>
         </svg>
        ),

      z:(
        <svg overflow="visible" key={key} x={x} y={y} width={width} height={height} viewBox='0 0 64 64'>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='30.4,49.3 15.2,53.1 3.9,63 30.4,63 56.9,63 46.2,54.2 30.4,49.3 30.4,49.3 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='45.8,13.7 58,4 30,4 2,4 13.9,13 '/>
          <polygon opacity='.8'  style={movement?styleSelector(): {} } fill={randomColor()} points='16.8,27.7 8.9,40.7 7.2,60.1 50,12.2 32,14.9 '/>
        </svg>
        )
  }
)
}
