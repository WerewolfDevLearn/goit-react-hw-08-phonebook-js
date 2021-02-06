import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export function userRegister(user) {
  return axios.post('/users/signup', user);
}

export function userLogIn(userData) {
  return axios.post('/users/login', userData);
}

export function userLogOut() {
  return axios.post('/users/logout');
}

export function currentUser() {
  return axios.get('users/current');
}
