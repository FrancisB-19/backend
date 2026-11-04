import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() =>{
    const student = studentModel.fetch();
    return student;
}

export const createStudents = async(students) =>{
    const studentId = await bookModel.insert(students);
    return studentId;
} 

//update
export const updateStudents = async(student) =>{
    const updatedStudents = await studentModel.update(student);
    return updatedStudents;
}

//delete
export const deleteStudents = async (id) => {
    const deletedStudents = await studentModel.remove(id);

    return deletedStudents;
};