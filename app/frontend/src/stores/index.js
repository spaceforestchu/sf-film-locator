import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import signUpReducer from '../reducers';

let store;

export default {
  initialize: () => {
    const reducers = combineReducers({
      form: formReducer,
      signup: signUpReducer,
    });

    store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk),
    );
    return store;
  },
  currentStore: () => {
    return store;
  },
};
