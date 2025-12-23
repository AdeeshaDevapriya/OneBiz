import React, { useState } from 'react';
// Assuming the Student interface is correctly located at this path
import { Student } from './../types/Student';
import { TextField, Button, Box, Typography, Alert, Container } from '@mui/material';
import { addStudent } from '../services/studentService';

// Backend API Endpoint
const API_URL = "http://localhost:8080/students";

const StudentForm: React.FC = () => {
    // State used for storing form data (id is initially 0)
    const [formData, setFormData] = useState<Student>({
        id: 0,
        name: '',
        age: 0,
        city: ''
    });
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

    // Handles changes in Input Fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData(prevData => ({
            ...prevData,
            // Uses parseInt() for Number type data
            [name]: type === 'number' ? parseInt(value) || 0 : value
        }));
    };

    // Handles Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim() || formData.id <= 0 || formData.age <= 0 || !formData.city.trim()) {
            setMessage('Please fill all required fields correctly.');
            setIsSuccess(false);
            return;
        }
        setMessage('Sending data...');
        setIsSuccess(null);

        try {
            const result = await addStudent(formData);

            setMessage(`✅ Success! Student data added. ID: ${result.id}`);
            setIsSuccess(true);
            setFormData({ id: 0, name: '', age: 0, city: '' });

        } catch (error: any) {
            console.error('Error:', error);
            const errorMessage = error.response?.data?.message || error.message || 'Unknown error';

            setMessage(`❌ Error: ${errorMessage}`);
            setIsSuccess(false);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: 'white'
                }}
            >
                <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                    Student Data Center
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>

                    {/* ID Field */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="ID"
                        name="id"
                        type="number"
                        value={formData.id === 0 ? '' : formData.id} // Prevents '0' being shown initially
                        onChange={handleChange}
                        autoFocus
                        inputProps={{ min: 1 }} // ID should typically be positive
                        error={isSuccess === false && formData.id <= 0}
                        helperText={isSuccess === false && formData.id <= 0 ? "ID is required and must be greater than 0" : ""}
                    />

                    {/* Name Field */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={isSuccess === false && !formData.name.trim()}
                        helperText={isSuccess === false && !formData.name.trim() ? "Name is required" : ""}
                    />

                    {/* Age Field */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                        type="number"
                        value={formData.age === 0 ? '' : formData.age}
                        onChange={handleChange}
                        inputProps={{ min: 1 }}
                        error={isSuccess === false && formData.age <= 0}
                        helperText={isSuccess === false && formData.age <= 0 ? "Age is required and must be greater than 0" : ""}
                    />

                    {/* City Field */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        error={isSuccess === false && !formData.city.trim()}
                        helperText={isSuccess === false && !formData.city.trim() ? "City is required" : ""}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Student
                    </Button>
                </Box>

                {/* Response Message */}
                {message && (
                    <Alert
                        severity={isSuccess ? 'success' : 'error'}
                        sx={{ mt: 2, width: '100%' }}
                    >
                        {message}
                    </Alert>
                )}
            </Box>
        </Container>
    );
};

export default StudentForm;