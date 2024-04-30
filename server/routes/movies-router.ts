import { Router } from "express";
import { getAllMovies,getMovieById,addMovie } from "../controllers/movies-controllers";
import {validateMovie} from "../middlewares/movie-validation";

const router = Router();



router.get("/",getAllMovies);

router.get("/:id",getMovieById);


router.post("/",validateMovie,addMovie);

router.put("/:id");

router.delete("/:id");

export default router;