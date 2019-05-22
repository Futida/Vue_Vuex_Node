import axios from 'axios';
import api from '~/constants/api';

export function getUser() {
  return axios({
    method: 'get',
    url: api.users.get,
  });
}
