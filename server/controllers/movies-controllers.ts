import pool from "../DB/db";
import { RequestHandler} from "express";
import { Movie } from "../models/movie-model";


const getAllMovies:RequestHandler =  (req,res,next) => {
   
        if (req.query.title) {
          const query = "%" + req.query.title + "%";
          pool
            .query("SELECT * FROM movies WHERE title ILIKE $1;", [query])
            .then((data) => {
              res.json(data.rows);
            })
            .catch((e) => {
              res.status(500).json({ message: e.message });
            });
        } else {
          pool
            .query("SELECT * FROM movies;")
            .then((data) => {
              res.json(data.rows);
            })
            .catch((e) => {
              res.status(500).json({ message: e.message });
            });
        }
};

const getMovieById:RequestHandler = (req,res,next) => {
    const id = req.params.id;
    pool.query("SELECT * FROM movies WHERE id=$1;",[id]).then(data=>{
        res.json(data.rows[0]);
    }).catch(e=>{
        res.status(500).json({message:e.message});
    });
};

const addMovie:RequestHandler = (req,res,next) => {
  const { title, director, year, rating, genre, description, poster, trailer } =
    req.body as Movie;
  pool
    .query(
      "INSERT INTO movies (title,director,year,rating,poster,trailer,genre,description) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;",
      [title, director, year, rating, poster, trailer, genre, description]
    )
    .then((data) => {
      res.status(201).json(data.rows[0]);
    })
    .catch((e) => {
      res.status(500).json({ message: e.message });
    });
}

export {getAllMovies,getMovieById,addMovie};