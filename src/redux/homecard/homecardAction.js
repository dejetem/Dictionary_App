import axios from 'axios'
import {
  FETCH_HOMECARD_REQUEST,
  FETCH_HOMECARD_SUCCESS,
  FETCH_HOMECARD_FAILURE
} from './homecardTypes'

export const fetchHome = (word) => {
  return (dispatch) => {
    dispatch(fetchHomeRequest())
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.textContent}`)
      .then(response => {
        // response.data is the home
        const info = response.data
        dispatch(fetchHomeSuccess(info))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchHomeFailure(error.message))
      })
  }
}

export const fetchHomeRequest = () => {
  return {
    type: FETCH_HOMECARD_REQUEST
  }
}

export const fetchHomeSuccess = info => {
  return {
    type: FETCH_HOMECARD_SUCCESS,
    payload: info
  }
}

export const fetchHomeFailure = error => {
  return {
    type: FETCH_HOMECARD_FAILURE,
    payload: error
  }
}