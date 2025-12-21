package com.example.studentapi;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import com.example.studentapi.dto.StudentDTO;
import com.example.studentapi.model.Student;
import com.example.studentapi.repository.StudentRepository;
import com.example.studentapi.service.impl.StudentServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class StudentServiceTest {

    @Mock
    private StudentRepository studentRepository;

    @InjectMocks
    private StudentServiceImpl studentService;

    @Test
    void testGetStudentById() {
        Student mockStudent = new Student(1, "Adeesha", 25, "Colombo");
        when(studentRepository.findById(1)).thenReturn(Optional.of(mockStudent));

        StudentDTO foundStudentDTO = studentService.getStudentById(1);

        assertNotNull(foundStudentDTO);
        assertEquals("Adeesha", foundStudentDTO.getName());
        verify(studentRepository, times(1)).findById(1);
    }

    @Test
    void testSaveStudent() {
        Student student = new Student(1, "Adeesha", 25, "Colombo");
        when(studentRepository.save(any(Student.class))).thenReturn(student);

        StudentDTO savedDTO = studentService.saveStudent(new StudentDTO(0, "Adeesha", "Colombo", 25));

        assertNotNull(savedDTO);
        assertEquals("Adeesha", savedDTO.getName());
        verify(studentRepository, times(1)).save(any(Student.class));
    }

    @Test
    void testGetAllStudents() {
        List<Student> students = List.of(
                new Student(1, "Adeesha", 25, "Colombo"),
                new Student(2, "Kamal", 22, "Galle")
        );
        when(studentRepository.findAll()).thenReturn(students);

        List<StudentDTO> result = studentService.getAllStudents();

        assertEquals(2, result.size());
        verify(studentRepository, times(1)).findAll();
    }

    @Test
    void testDeleteStudent() {
        int studentId = 1;
        doNothing().when(studentRepository).deleteById(studentId);

        studentService.deleteStudent(studentId);

        verify(studentRepository, times(1)).deleteById(studentId);
    }

    @Test
    void testUpdateStudent() {
        Student existingStudent = new Student(1, "Adeesha", 25, "Colombo");
        StudentDTO updateDTO = new StudentDTO(1, "Adeesha Updated", "Kandy", 26);

        when(studentRepository.findById(1)).thenReturn(Optional.of(existingStudent));
        when(studentRepository.save(any(Student.class))).thenReturn(existingStudent);

        StudentDTO result = studentService.updateStudent(1, updateDTO);

        assertNotNull(result);
        assertEquals("Adeesha Updated", result.getName());
        verify(studentRepository, times(1)).save(any(Student.class));
    }

    @Test
    void testGetStudentById_NotFound() {
        when(studentRepository.findById(99)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> {
            studentService.getStudentById(99);
        });
    }
}