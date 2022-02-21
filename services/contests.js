import { URL } from '../constants/API'
import axios from 'axios';


export const getUpcomingContests = (data) => {
    return  axios.post(`${URL}get-upcoming-contests`, data)
  };

  export const getContestDetails = (data) => {
    return  axios.post(`${URL}get-contests-details`,data)
  };
  export const submitContest = (data) => {
    return  axios.post(`${URL}submit-contest`,data)
  };
  export const getMyContests = (data) => {
    return  axios.post(`${URL}my-contests`, data)
  };
  export const getCoinsData = () => {
// ....TESTING API
    // const headers = {
    //   'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
    // }
    // return  axios.get(`https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD`,{

// ..... LIVE API
    const headers = {
      'X-CMC_PRO_API_KEY': 'b7603765-62b7-44d1-827c-75e0ab60b116',
    }
      return  axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD`,{
      headers: headers
    })
  };


