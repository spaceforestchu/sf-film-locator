import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { signinReducer } from '../reducers';

let store;

export default {
  initialize: () => {
    const reducers = combineReducers({
      signup: signinReducer,
      form: formReducer,
    });

    store = createStore(
      reducers,
      applyMiddleware(thunk),
    );

    return store;
  },

  currentStore: () => {
    return store;
  },
};
