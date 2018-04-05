import {createStore} from 'redux'
import Rootreducer from './reducers/Rootreducer'

export default(initialState) => {
    return createStore(
      Rootreducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }


