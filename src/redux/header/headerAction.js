import axios from 'axios'
import {
  FETCH_HEADER_REQUEST,
  FETCH_HEADER_SUCCESS,
  FETCH_HEADER_FAILURE
} from './headerType'

export const fetchSearch = (word) => {
  return (dispatch) => {
    dispatch(fetchSearchRequest())
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => {
        // response.data is the home
        const info = response.data
        dispatch(fetchSearchSuccess(info))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchSearchFailure(error.message))
      })
  }
}

export const fetchSearchRequest = () => {
  return {
    type: FETCH_HEADER_REQUEST
  }
}

export const fetchSearchSuccess = info => {
  return {
    type: FETCH_HEADER_SUCCESS,
    payload: info
  }
}

export const fetchSearchFailure = error => {
  return {
    type: FETCH_HEADER_FAILURE,
    payload: error
  }
}