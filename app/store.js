import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

//--INTIAL STATE----------------------------------------------------

const INITIAL_STATE = {
      windowPROPS: {
                    width: 100,
                    height: 100,
                    w: 100,
                    h: 100
      },
      color: ['#e5f9e4', '#c9f3c6', '#a9eca3', '#84e47b', '#54da48', '#11cc00', '#0fb800', '#0da200', '#0b8600', '#086100'],
      movement: [
                  {
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
                  }
     ],
     input: 'a'
}

//--ACTION TYPES----------------------------------------------------

const WINDOW_RESIZE = 'WINDOW_RESIZE'
const SET_COLOR = 'SET_COLOR'
const SET_INPUT = 'SET_INPUT'


//--ACTION CREATORS----------------------------------------------------
export function windowResize({ width, height }) {
  const w = width >= height ? 100 : width * 100 / height
  const h = height > width ? 100 : height * 100 / width

  return {
    type: WINDOW_RESIZE,
    windowPROPS: { width, height, w, h }
  }
}

export function changeInput (input){
    return {
      type: SET_INPUT,
      input: input
    }
  }

export function changeColor (color){
    return {
      type: SET_COLOR,
      color
    }
  }




//--ROOT REDUCER----------------------------------------------------
function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer is runnnning', INITIAL_STATE)
  switch (action.type) {

  case WINDOW_RESIZE:
    return Object.assign({}, state, {windowPROPS: action.windowPROPS})

  case SET_COLOR:
    return Object.assign({}, state,  {color: action.color})

  case SET_INPUT:
    return Object.assign({}, state,  {input: action.input})

  default:
    return state
  }
}


// CONFIGURING STORE----------------------------------------------------

const logger = createLogger({collapsed: true})

const middleware = applyMiddleware(thunkMiddleware, logger)

const store = createStore(rootReducer, middleware)

export default store
