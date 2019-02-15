import { ADD_VIDEO, SET_VIDEOS, IS_FETCHING } from "../constants/action-types"

export function addVideo(payload) {
  return {
    type: ADD_VIDEO,
    payload
  }
}

export function setVideos(payload) {
  return {
    type: SET_VIDEOS,
    payload
  }
}

export function isFetching(payload) {
  return {
    type: IS_FETCHING,
    payload
  }
}