import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export function userSignup(user) {
  return axios.post('/user/signup', user).then(({ data }) => data);
}

export function userLogIn(userData) {
  return axios.post('/user/login', userData).then(({ data }) => data);
}

export function userRegiter(fullUserData) {
  return;
}
