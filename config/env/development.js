var port = 3000;

module.exports = {
    port: port,
    db: 'mongodb://localhost/drift_local',
    facebook: {
      app_id: "",
      app_secret: "",
      callback_url: "http://localhost:"+ port +"/user/auth/facebook/callback/"
    }
};
