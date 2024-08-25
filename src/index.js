// require('dotenv').config({path:'../env'});
import 'dotenv/config';
import connectDB from "./db/index.js";
import app from './app.js';
const port = process.env.PORT || 8080;
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log(`ERRR : `, error);
            throw error;
        })
        app.listen(port, () => {
            console.log(`App is listening at port ${port}`);
        })
    })
    .catch((error) => {
        console.log(`Error in database connection`, error);
    })