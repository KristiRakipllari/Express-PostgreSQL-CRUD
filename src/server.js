import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import createUserTable from './data/createUserTable.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

// Testing POSTGRES connection

app.get("/" , async (req, res) => {
   
    const result = await pool.query("SELECT current_database()")
    res.send(`The database name is : ${result.rows[0].current_database}`);
    
 })



//Error handling middleware
app.use(errorHandler)


// Create User Table 
createUserTable()


// Server running 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
