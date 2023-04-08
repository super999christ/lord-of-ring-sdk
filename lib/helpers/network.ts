import axios from 'axios';

/**
 * fetches API data from The Lord of the Rings server
 * @param url {String} API URL
 * @returns Promise<Response>
 */
const fetchData = (url) => {
  return axios.get(url);
};

export default {
  fetchData
};