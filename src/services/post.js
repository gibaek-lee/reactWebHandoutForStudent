import axios from 'axios';

export default function postData(input) {
  /*const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  return axios.post('/api/submit', input, config)
  .then(function (response) {
    console.log("Success to get results");
    console.log(response);
    return response;
   })
   .catch(function (error) {
     console.log(error);
   });*/
  return axios({
    method: 'post',
    url: '/api/submit',
    baseURL: 'http://localhost:3000/',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: input,
    withCredentials: true,
    proxy: {
      host: '127.0.0.1',
      port: 3000
    }
  })
}
