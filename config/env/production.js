var port = process.env.PORT || 3000;;

module.exports = {
    port: port,
    db: "",
    //db: 'mongodb://admin:admin@ds045454.mongolab.com:45454/heroku_dm9g606d',
    facebook: {
      app_id: "",
      app_secret: "",
      callback_url: "http://drift.herokuapp.com/user/auth/facebook/callback/"
    },
    xola: {
      url: "https://dev.xola.com", //sandbox
      id: "563e8530c683b1d6668b4567", //sandbox
      api_key: "mygUAFiMlWVzVEwFH4dxZP0ZDWjGd6o6gjH3X2CVFIM" //sandbox
    },
    stubhub: {
      url: "https:api.stubhub.com",
      api_key: "WS7ummfbl6TbvXba1bb8R4ABglsa"
    },
    googleGeocoder: {
      api_key: "AIzaSyDcDuzIfe8iyezzHuFn5KXtIyj7f1enN70"
    }
};
