import axios from 'axios'
import {
  FETCH_HOMECARD_REQUEST,
  FETCH_HOMECARD_SUCCESS,
  FETCH_HOMECARD_FAILURE
} from './homecardType'

export const fetchHome = (word) => {
  return (dispatch) => {
    dispatch(fetchHomeRequest())
    axios
      .get('https://random-word-api.herokuapp.com/word?number=1')
      .then(response => {
        word = response.data
        console.log(word)
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
        // response.data is the users
        const input = response.data
        dispatch(fetchHomeSuccess(input))
      })
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