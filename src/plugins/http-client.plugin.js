//patron adaptador de todas las peticiones a otros servidores
const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url);
    const resp = await fetch(url);
    // return await resp.json();
    return data;
  },
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

module.exports = {
  httpClientPlugin,
};
