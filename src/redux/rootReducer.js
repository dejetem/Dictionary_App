import { combineReducers } from 'redux'
import headerReducer from './header/headerReducer'
import homecardReducer from './homecard/homecardReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  homecard: homecardReducer
})

export default rootReducer