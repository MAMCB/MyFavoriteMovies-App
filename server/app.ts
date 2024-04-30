import express from 'express';
import moviesRouter from './routes/movies-router';
const app = express();
const port = 3000;

app.use(express.json());
app.use('/movies', moviesRouter);
app.use((err:Error, req:express.Request, res:express.Response, next:express.NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });