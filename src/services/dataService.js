import axios from 'axios'

const url = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_PUBLIC_KEY;
const HASH = process.env.REAC_APP_HASH;

export const getData = () => {
  return axios(`${url}?ts=1&apikey=${API_KEY}&hash=${HASH}&limit=30`)
    .then((response) => response.data)
}