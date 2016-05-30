import axios from 'axios';

const API_ROOT = 'http://api.fixer.io';

function callApi(endpoint) {
  return axios.get(`${API_ROOT}/${endpoint}`)
    .then(response => ({ response: response.data }))
    .catch(err => ({ error: err.message || 'Something bad happened' }));
}

export function getLatestRates() {
  return callApi('latest');
}
