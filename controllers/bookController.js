import * as bookServices from '../services/bookService.js';

export const fetchAllBooks = async(req, res) => {
    const books = await bookServices.fetchAllBooks();
    res.status(200).json(books);
}


// Insert
export const createBooks = async (req, res) => {
    console.log(req);
    const {name, author} = req.body;
    const book = {name, author};

    try{
        const bookId = await bookServices.createBooks(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

// Update
export const editBooks = async (req, res) =>{
    const {name, author} = req.body;
    const { id } = req.params;
    const book = {id: parseInt(id), name, author};

    try{
        const updatedBook = await bookServices.updateBooks(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Interval Server Error"
        });
    }
<<<<<<< HEAD
}


//DELETE

export const deleteBooks = async (req, res) =>{
    const { id } = req.params;

    try{
        const deletedBook = await bookServices.deleteBooks(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedBook
        });
    }catch(e){
        console.log(e);
=======
} 
//update

export const editBooks = async (req, res) => {
    const { name, author } = req.body;
    const { id } = req.params;

    const book = {
        id: parseInt(id),
        name,
        author,
    };

    try {
        const updatedBooks = await bookService.updateBooks(book);

        res.status(200).json({
            success: true,
            message: updatedBooks
        });

    } catch (e) {
        console.log(e);

>>>>>>> 9cc4633fcdba3259a1ee2d2c73468112f572b023
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
<<<<<<< HEAD
}
=======
};

// Delete
export const deleteBooks = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBooks = await bookService.deleteBooks(parseInt(id));

        res.status(200).json({
            success: true,
            message: deletedBooks
        });

    } catch (e) {
        console.log(e);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};
>>>>>>> 9cc4633fcdba3259a1ee2d2c73468112f572b023
