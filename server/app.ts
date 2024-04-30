import express from 'express';
import moviesRouter from './routes/movies-router';
const app = express();
import cors from 'cors';


const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use('/api/movies', moviesRouter);
app.use((err:Error, req:express.Request, res:express.Response, next:express.NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });