import * as bookModel from '../models/bookModel';

export const fetchAllBooks = async() =>{
    const books = bookModel.fetch();
    return books;
}