import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = bookModel.fetch();
    return books;
}