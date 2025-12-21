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

import java.util.Optional;

@ExtendWith(MockitoExtension.class)

class StudentServiceTest {

    @Mock
    private StudentRepository studentRepository;

    @InjectMocks
    private StudentServiceImpl studentService;

    @Test
    void testGetStudentById() {
        // 1. Arrange: Prepare mock data and define behavior
        Student mockStudent = new Student(1, "Adeesha", 25, "Colombo");
        when(studentRepository.findById(1)).thenReturn(Optional.of(mockStudent));

        // 2. Act: Execute the service method
        StudentDTO foundStudentDTO = studentService.getStudentById(1);

        // 3. Assert: Verify the results and behavior
        assertNotNull(foundStudentDTO, "The returned StudentDTO should not be null");
        assertEquals("Adeesha", foundStudentDTO.getName(), "Name should match the mock student");
        assertEquals("Colombo", foundStudentDTO.getCity(), "City should match the mock student");
        assertEquals(25, foundStudentDTO.getAge(), "Age should match the mock student");

        // Ensure the repository was called exactly once with the correct ID
        verify(studentRepository, times(1)).findById(1);
    }
}