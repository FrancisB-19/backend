import pool from '../config/db.js';

export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};

export const insert = async (book) =>{
    const [result] = await pool.query(
        "INSERT INTO book(name, author) VALUES (?,?)",
        [book.name, book.author]
    );
    
    return result.insertId;
}

// Update 
<<<<<<< HEAD
export const update = async (book) => {
    const [result] = await pool.query(
        "UPDATE book SET name = ?, author = ? WHERE id = ?",
        [book.name, book.author, book.id]
=======
export const update = async () => {
    const [result] = await pool.query(
        "UPDATE book SET name = ?, author = ? WHERE id = ?",
        [book.name, book.author,]
>>>>>>> 9cc4633fcdba3259a1ee2d2c73468112f572b023
    );

    return result.affectedRows;
};

// Delete
export const remove = async (id) => {
    const [result] = await pool.query(
<<<<<<< HEAD
        "DELETE FROM book WHERE id = ?", [id]
=======
        "DELETE FROM student WHERE id = ?",
        [id]
>>>>>>> 9cc4633fcdba3259a1ee2d2c73468112f572b023
    );

    return result.affectedRows;
};