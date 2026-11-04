import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = bookModel.fetch();
    return books;
}

export const createBooks = async(book) =>{
    const bookId = await bookModel.insert(book);
    return bookId;
} 

//update
export const updateBooks = async(student) =>{
    const updatedBooks = await bookModel.update(book);
    return updatedBooks;
}

//dlelete
export const deleteBooks = async (id) => {
    const deletedBooks = await bookModel.remove(id);

    return deletedBooks;
};