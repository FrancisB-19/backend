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
<<<<<<< HEAD
export const updateBooks = async(book) =>{
=======
export const updateBooks = async(student) =>{
>>>>>>> 9cc4633fcdba3259a1ee2d2c73468112f572b023
    const updatedBooks = await bookModel.update(book);
    return updatedBooks;
}

//dlelete
export const deleteBooks = async (id) => {
    const deletedBooks = await bookModel.remove(id);

    return deletedBooks;
};