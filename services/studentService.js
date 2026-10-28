import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() =>{
    const student = studentModel.fetch();
    return student;
}

export const createStudents = async(students) =>{
    const studentId = await bookModel.insert(students);
    return studentId;
} 