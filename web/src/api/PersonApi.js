import settings from '../../config/settings.example';
import axios from './axios';
import _ from 'lodash';

const {apiBaseURL} = settings;

export default class PersonApi {
  static getPerson(id) {
    return axios.get(`${apiBaseURL}/people/${id}`);
  }
}


