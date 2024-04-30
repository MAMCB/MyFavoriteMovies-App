import express from 'express';
import moviesRouter from './routes/movies-router';
const app = express();
import cors from 'cors';
import * as dotenv from "dotenv";
dotenv.config();
import client from './DB/db';

const port = process.env.PORT || 5432;


app.use(express.json());
app.use(cors());
// app.use("/" , (req, res) => {
//     res.send("Welcome to the movie API");
// });
app.use('/api/movies', moviesRouter);
app.use((err:Error, req:express.Request, res:express.Response, next:express.NextFunction) => {
    res.status(500).json({message: err.message});
});



client.connect(function (err) {
  if (err) throw err;
  client.query("SELECT VERSION()", [], function (err, result) {
    if (err) throw err;

    console.log(result.rows[0].version);
    client.end(function (err) {
      if (err) throw err;
    });
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });