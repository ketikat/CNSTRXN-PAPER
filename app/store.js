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
      color: "#e4f0f9"
}

//--ACTION TYPES----------------------------------------------------

const WINDOW_RESIZE = 'WINDOW_RESIZE'
const SET_COLOR = 'SET_COLOR'


//--ACTION CREATORS----------------------------------------------------
export function windowResize({ width, height }) {
  const w = width >= height ? 100 : width * 100 / height
  const h = height > width ? 100 : height * 100 / width
// console.log("I AM INSIDE THE WINDOW RESIZE ACTION!!!!!!!")
  return {
    type: WINDOW_RESIZE,
    windowPROPS: { width, height, w, h }
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

  default:
    return state
  }
}


// CONFIGURING STORE----------------------------------------------------

const logger = createLogger({collapsed: true})

const middleware = applyMiddleware(thunkMiddleware, logger)

const store = createStore(rootReducer, middleware)

export default store





