import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types';
import AuthService from '../../server/auth/local/auth.service';

export function register({ username, email, password }) {
  return async (dispatch) => {
    try {
      await AuthService.register(username, email, password);
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        // eslint-disable-next-line no-undef
        payload: response.data.message,
      });
    } catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };
}

export function login(email, password) {
  return async (dispatch) => {
    try {
      const data = await AuthService.login(email, password);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
    } catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString();
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      /*       dispatch(setInterval(() => {
        window.location.reload();
      }, 800)); */
    }
  };
}

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
