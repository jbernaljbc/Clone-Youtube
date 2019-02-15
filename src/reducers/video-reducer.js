import { CURRENT_VIDEO, SET_VIDEOS, IS_FETCHING } from '../constants/action-types'
import initialState from '../store/initial-state'

export const videos = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return {
        ...state,
        list: action.payload
      }
    case CURRENT_VIDEO:
      return {
        ...state,
        item: action.payload
      }

    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    default:
      return state
  }
}