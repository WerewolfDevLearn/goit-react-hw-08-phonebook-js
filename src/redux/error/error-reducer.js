import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerError,
  loginError,
  logoutError,
  getCurrentUserError,
} from '../auth/auth-action';
import {
  deleteContactError,
  addContactError,
  fetchContactsError,
} from '../contacts/contacts-actions';

const errorTostate = (_, action) => action.payload;

const error = createReducer(null, {
  [registerError]: errorTostate,
  [loginError]: errorTostate,
  [logoutError]: errorTostate,

  [getCurrentUserError]: errorTostate,
  [deleteContactError]: errorTostate,
  [addContactError]: errorTostate,
  [fetchContactsError]: errorTostate,
});
export default combineReducers({
  error,
});
