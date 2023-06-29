
import mongoose from 'mongoose';
const {connect} = mongoose;


const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/test';

export const Connection = connect(MONGO_URI, {})

Connection.then(db => {
  console.log('Connected to mongo', db.connections[0].name);
});
