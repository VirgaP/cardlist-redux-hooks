import axios        from "axios"

const url = 'http://localhost:3002'

const axiosInstance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  })

  export default {
    axiosInstance
  }