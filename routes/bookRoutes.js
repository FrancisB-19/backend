import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBooks)
bookRoutes.post('/', bookController.createBooks);
bookRoutes.put('/:id',bookController.editBooks);
bookRoutes.delete('/:id', bookController.deleteBooks);


export default bookRoutes;