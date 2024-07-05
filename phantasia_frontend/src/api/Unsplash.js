import axios from 'axios';
import UNSPLASH_API_KEY from config.js;

const unsplash = axios.create({
  baseURL: 'https://unsplash.com/',
  headers: {
    Authorization: `Client-ID` + UNSPLASH_API_KEY,
  }
});

export default unsplash;