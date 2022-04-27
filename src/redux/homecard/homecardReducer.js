import {
  FETCH_HOMECARD_REQUEST,
  FETCH_HOMECARD_SUCCESS,
  FETCH_HOMECARD_FAILURE
} from './homecardType'

const initialState = {
  loading: false,
  datas: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOMECARD_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_HOMECARD_SUCCESS:
      return {
        loading: false,
        datas: action.payload,
        error: ''
      }
    case FETCH_HOMECARD_FAILURE:
      return {
        loading: false,
        datas: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer