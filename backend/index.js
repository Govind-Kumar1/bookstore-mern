import express from 'express';
import dotenv from 'dotenv';
// import { PORT, MONGOURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/temp.js';
import cors from 'cors'; 

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001; 
const MONGOURL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';
  
// Middleware for parsing request body
app.use(express.json());
 
 
 
// Middleware for handling CORS POLICY 
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });