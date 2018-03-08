import constants from '../constants';
import { signUserUpApi } from '../utils/APIManager';

const signUserUpUrl = process.env.SIGN_USER_UP_URL || 'http://localhost:3000/user/signup';

export const signUserUp = (user) => {
  return async (dispatch) => {
    try {
      const createdUser = await signUserUpApi(signUserUpUrl, user);
      console.log('ASDASDS');
      console.log(createdUser);
      dispatch({
        type: constants.SIGN_USER_UP,
        user: createdUser,
      });
      return createdUser;
    } catch (error) {
      return error;
    }
  };
};

export const signUserIn = (user) => {
  return {
    type: constants.SIGN_USER_UP,
    user,
  };
};
