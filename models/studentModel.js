import pool from '../config/db.js';

export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM students");
    return rows;
};
export const insert = async (students) =>{
    const [result] = await pool.query(
        "INSERT INTO students(name, srcode, program) VALUES (?, ?, ?)",
        [students.name, students.srcode, students.program]
    );
    
    return result.insertId;
}

// Update 
<<<<<<< HEAD
export const update = async (students) => {
    const [result] = await pool.query(
        "UPDATE students SET name = ?, srcode = ?, program = ? WHERE id = ?",
        [students.name, students.srcode, students.program, students.id]
=======
export const update = async () => {
    const [result] = await pool.query(
        "UPDATE students SET name = ?, srcode = ?, program = ? WHERE id = ?",
        [student.name, student.srcode, student.program, student.id]
>>>>>>> 9cc4633fcdba3259a1ee2d2c73468112f572b023
    );

    return result.affectedRows;
};

// Delete
export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM students WHERE id = ?",
        [id]
    );

    return result.affectedRows;
};