import {
  token,
  userRegister,
  userLogIn,
  userLogOut,
  currentUser,
} from '../../services/user-api';
import * as authActions from './auth-action';

const register = user => async dispatch => {
  authActions.registerRequest();
  try {
    const response = await userRegister(user);
    console.log(response.data.token);
    token.set(response.data.token);
    dispatch(authActions.registerSeccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = userData => async dispatch => {
  authActions.loginRequest();
  try {
    const response = await userLogIn(userData);
    console.log(response);
    token.set(response.data.token);
    dispatch(authActions.loginSeccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await userLogOut();
    token.unset();
    dispatch(authActions.logoutSeccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());
  try {
    const response = await currentUser();
    dispatch(authActions.getCurrentUserSeccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export { register, logIn, logOut, getCurrentUser };
