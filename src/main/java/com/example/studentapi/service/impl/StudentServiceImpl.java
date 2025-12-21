package com.example.studentapi.service.impl;

import com.example.studentapi.dto.StudentDTO;
import com.example.studentapi.model.Student;
import com.example.studentapi.repository.StudentRepository;
import com.example.studentapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public StudentDTO saveStudent(StudentDTO studentDTO) {
        // DTO to Entity
        Student student = new Student();
        student.setName(studentDTO.getName());
        student.setCity(studentDTO.getCity());
        student.setAge(studentDTO.getAge());

        Student savedStudent = studentRepository.save(student);

        // Entity to DTO
        return new StudentDTO(savedStudent.getId(), savedStudent.getName(), savedStudent.getCity(), savedStudent.getAge());
    }

    @Override
    public List<StudentDTO> getAllStudents() {
        return studentRepository.findAll().stream()
                .map(s -> new StudentDTO(s.getId(), s.getName(), s.getCity(), s.getAge()))
                .collect(Collectors.toList());
    }

    @Override
    public StudentDTO getStudentById(Integer id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + id));

        return new StudentDTO(student.getId(), student.getName(), student.getCity(), student.getAge());
    }

    @Override
    public void deleteStudent(Integer id) {
        studentRepository.deleteById(id);
    }
}