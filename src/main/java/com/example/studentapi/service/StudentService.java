//package com.example.studentapi.service;
//
//import com.example.studentapi.model.Student;
//import com.example.studentapi.repository.StudentRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class StudentService {
//
//    private final StudentRepository studentRepository;
//
//    public StudentService(StudentRepository studentRepository) {
//        this.studentRepository = studentRepository;
//    }
//
//    public Student saveStudent(Student student) {
//        return studentRepository.save(student);
//    }
//
//    public List<Student> getAllStudents() {
//        return studentRepository.findAll();
//    }
//
//    public Student getStudentById(Integer id) {
//        return studentRepository.findById(id).orElse(null);
//    }
//
//    public Student updateStudent(Integer id, Student updatedStudent) {
//        Student existing = getStudentById(id);
//        if (existing == null) return null;
//
//        existing.setName(updatedStudent.getName());
//        existing.setAge(updatedStudent.getAge());
//        existing.setCity(updatedStudent.getCity());
//
//        return studentRepository.save(existing);
//    }
//
//    public boolean deleteStudent(Integer id) {
//        if (!studentRepository.existsById(id)) return false;
//        studentRepository.deleteById(id);
//        return true;
//    }
//}


package com.example.studentapi.service;

import com.example.studentapi.dto.StudentDTO;
import java.util.List;

public interface StudentService {
    StudentDTO saveStudent(StudentDTO studentDTO);
    List<StudentDTO> getAllStudents();
    StudentDTO getStudentById(Integer id);
    void deleteStudent(Integer id);
}
