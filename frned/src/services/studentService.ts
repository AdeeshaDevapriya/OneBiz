// src/services/studentService.ts
import axios from 'axios';
import { Student } from '../types/Student';

const API_URL = "http://localhost:8080/students";

export const addStudent = async (studentData: Student) => {
    const response = await axios.post<Student>(API_URL, studentData);
    return response.data;
};