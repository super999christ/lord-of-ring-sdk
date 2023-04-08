import axios, { AxiosRequestConfig } from 'axios';

/**
 * fetches API data from The Lord of the Rings server
 * @param url {String} API URL
 * @returns Promise<Response>
 */
const fetchData = (url: string, config: AxiosRequestConfig<any>) => {
  return axios.get(url, config);
};

export default {
  fetchData
};