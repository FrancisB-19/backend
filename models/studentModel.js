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
export const update = async (students) => {
    const [result] = await pool.query(
        "UPDATE students SET name = ?, srcode = ?, program = ? WHERE id = ?",
        [students.name, students.srcode, students.program, students.id]

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