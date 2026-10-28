import * as bookService from "../services/bookService.js";

export const fetchAllBooks = async (req, res) =>{
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
}

export const createBooks = async (req, res) =>{
    console.log(req);
    const {name, author} = req.body;
    const book = {name, author};

    try{
        const bookId = await bookService.createBooks(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal  Seerver Error"
        });
    }
} 