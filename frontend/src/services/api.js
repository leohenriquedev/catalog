import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:3333/api'
});

export default api;