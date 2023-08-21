import mongoose from 'mongoose'


export default connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        throw new Error('Connection failed');
      }
};

// export default connect

