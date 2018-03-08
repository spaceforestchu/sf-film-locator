import constants from '../constants';
import { signUserUpApi } from '../utils/APIManager';

const signUserUpUrl = process.env.SIGN_USER_UP_URL || 'http://localhost:3000/user/signup';

export const signUserUp = (user) => {
  return async (dispatch) => {
    try {
      const createdUser = await signUserUpApi(signUserUpUrl, user);
      dispatch({
        type: constants.SIGN_USER_UP,
        user: createdUser,
      });
      return createdUser;
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const signUserIn = (user) => {
  return {
    type: constants.SIGN_USER_UP,
    user,
  };
};
