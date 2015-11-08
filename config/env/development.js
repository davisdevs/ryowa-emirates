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
    },
    stubhub: {
      url: "https:api.stubhub.com",
      api_key: "WS7ummfbl6TbvXba1bb8R4ABglsa"
    },
    googleGeocoder: {
      api_key: "AIzaSyDcDuzIfe8iyezzHuFn5KXtIyj7f1enN70"
    }
};
