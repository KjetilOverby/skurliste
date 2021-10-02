const Dotenv = require("dotenv-webpack");

module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  env: {
    REACT_APP_AUTH0_DOMAIN: "ktldesign.eu.auth0.com",
    REACT_APP_AUTH0_CLIENT_ID: "kUDTejKkQumy6alQrQU2xcBTATvQPKuo",
    MONGO_URI:
      "mongodb+srv://kjetil:puxwik-3veGpu-xevkak@cluster0-t07vg.mongodb.net/Poster?retryWrites=true&w=majority",
  },
};
