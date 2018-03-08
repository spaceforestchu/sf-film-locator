import constants from '../constants';

const initialState = {
  user: null,
};

const signUpReducer = (state = initialState, action) => {
  let updated = Object.assign({}, state);
  switch (action.type) {
    case constants.SIGN_USER_UP:
      console.log('-------');
      console.log(action.user);
      console.log(updated);
      return updated;
    default:
      return state;
  }
};

export default signUpReducer;
