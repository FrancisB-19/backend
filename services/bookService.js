import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = bookModel.fetch();
    return books;
}

export const createBooks = async(book) =>{
    const bookId = await bookModel.insert(book);
    return bookId;
} 