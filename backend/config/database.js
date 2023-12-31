const mongoose = require("mongoose")

const connectDatabase = async () => {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
      })
      .then((data) => {
         console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
      //yaha se catch hata diya because of unhandled  promise rejection jo hamne server.js ke last me likha hai
  };

module.exports = connectDatabase;