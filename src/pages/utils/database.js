import { connect } from 'mongoose';

const connectDb = async function () {
  try {
    await connect(process.env.MONGODB_URI_DEV);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectDb;
