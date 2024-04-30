import { Movie } from "../models/movie-model";
import { RequestHandler } from "express";

export const validateMovie:RequestHandler = (req,res,next) => {
  const { title, director, year, rating, genre, description, poster, trailer } = req.body as Movie;
 
  if (!title || !director || !year || !rating || !genre || !description || !poster || !trailer) {
    return  res.status(400).json("All fields are required!");
  }
  next();
}
