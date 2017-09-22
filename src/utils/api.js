import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export {getAccessToken, register}

function getAccessToken () {
  const url = `${BASE_URL}/oauth/token`
  var data = {}
  return axios.post(url, data).then(response => response.data)
}

function register () {
  const url = `${BASE_URL}/user/register`
  return axios.post(url).then(response => response.data)
}
