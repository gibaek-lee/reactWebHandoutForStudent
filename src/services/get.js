import axios from 'axios';

export default function getData() {
  return axios.get('/api/fetchProblem');
}
