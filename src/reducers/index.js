import { combineReducers } from 'redux'
import { videos } from './video-reducer'


const rootReducer = combineReducers({
  videos
})

export default rootReducer