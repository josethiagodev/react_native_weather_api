import axios from 'axios';

// https://api.hgbrasil.com/weather?key=3c433743&lat=-23.682&lon=-46.875
export const key = 'a0da1ab8';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;
