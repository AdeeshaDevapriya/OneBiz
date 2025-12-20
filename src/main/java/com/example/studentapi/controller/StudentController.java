package com.example.studentapi.controller;

import com.example.studentapi.model.Student;
import com.example.studentapi.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/students")
public class StudentController {


    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student saved = studentService.saveStudent(student);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<Student>> getStudents() {
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable Integer id) {
        Student s = studentService.getStudentById(id);
        if (s == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(s);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable Integer id,
            @RequestBody Student student
    ) {
        Student updated = studentService.updateStudent(id, student);
        if (updated == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Integer id) {
        boolean deleted = studentService.deleteStudent(id);
        if (!deleted) return ResponseEntity.notFound().build();
        return ResponseEntity.ok("Student deleted !");
    }
}
