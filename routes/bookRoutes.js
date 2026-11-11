import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBooks)
bookRoutes.post('/', bookController.createBooks);
bookRoutes.put('/:id',bookController.editBooks);
bookRoutes.delete('/:id', bookController.deleteBooks);

<<<<<<< HEAD
=======

export default bookRoutes;
>>>>>>> 9cc4633fcdba3259a1ee2d2c73468112f572b023

