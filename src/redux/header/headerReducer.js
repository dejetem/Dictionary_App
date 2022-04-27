import {
  FETCH_HEADER_REQUEST,
  FETCH_HEADER_SUCCESS,
  FETCH_HEADER_FAILURE
} from './headerType'

const initialState = {
  loading: false,
  datas: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_HEADER_SUCCESS:
      return {
        loading: false,
        datas: action.payload,
        error: ''
      }
    case FETCH_HEADER_FAILURE:
      return {
        loading: false,
        datas: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer