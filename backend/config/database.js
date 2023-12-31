const mongoose = require("mongoose")

const connectDatabase = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
      });
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

module.exports = connectDatabase;