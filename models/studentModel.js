import pool from '../config/db.js';

export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM students");
    return rows;
};
export const insert = async (student) =>{
    const [result] = await pool.query(
        "INSERT INTO students(name, srcode, program) VALUES (?,?)",
        [student.name, student.srcode, student.program]
    );
    
    return result.insertId;
}

// Update 
export const update = async () => {
    const [result] = await pool.query(
        "UPDATE students SET name = ?, srcode = ?, program = ? WHERE id = ?",
        [student.name, student.srcode, student.program, student.id]
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