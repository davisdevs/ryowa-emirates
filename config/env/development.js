var port = 3000;

module.exports = {
    port: port,
    db: 'mongodb://localhost/drift_local',
    facebook: {
      app_id: "",
      app_secret: "",
      callback_url: "http://localhost:"+ port +"/user/auth/facebook/callback/"
    },
    xola: {
      url: "https://dev.xola.com",
      id: "563e8530c683b1d6668b4567",
      api_key: "mygUAFiMlWVzVEwFH4dxZP0ZDWjGd6o6gjH3X2CVFIM"
    }
};
