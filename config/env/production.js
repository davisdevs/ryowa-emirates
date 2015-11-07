var port = process.env.PORT || 3000;;

module.exports = {
    port: port,
    db: 'mongodb://admin:admin@ds045454.mongolab.com:45454/heroku_dm9g606d',
    facebook: {
      app_id: "",
      app_secret: "",
      callback_url: "http://drift.herokuapp.com/user/auth/facebook/callback/"
    }
};
