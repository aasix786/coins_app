import { URL } from '../constants/API'
import axios from 'axios';


export const loginRequest = (email, password) => {
    return  axios.post(`${URL}login`, {
        "email": email,
        "password": password
  })
  };

export const signupRequest = (data) => {
    return  axios.post(`${URL}register`, data)
  };
