import settings from '../../config/settings.example';
import axios from './axios';

const {apiBaseURL} = settings;

export default class AuthApi {
  static login(username, password) {
    return axios.post(`${apiBaseURL}/login`,
      {
        username, password
      });
  }

  static register(profile) {
    console.log('fgfgfgf',apiBaseURL);
    return axios.post(`${apiBaseURL}/register`, profile);
  }
}
