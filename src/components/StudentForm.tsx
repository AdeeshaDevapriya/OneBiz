import React, { useState, useEffect } from 'react';
// Assuming the Student interface is correctly located at this path
import { Student } from './../types/Student';
import { TextField, Button, Box, Typography, Alert, Container, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Slide } from '@mui/material';
import { Close as CloseIcon, CheckCircle as CheckCircleIcon, Error as ErrorIcon } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';
import { addStudent } from '../services/studentService';

// Backend API Endpoint
const API_URL = "http://localhost:8080/api/v1/students";

// Slide transition component for popup animation
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
    const [popupOpen, setPopupOpen] = useState(false);

    // Handles changes in Input Fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData(prevData => ({
            ...prevData,
            // Uses parseInt() for Number type data
            [name]: type === 'number' ? parseInt(value) || 0 : value
        }));
    };

    // Auto-close popup after 5 seconds
    useEffect(() => {
        if (popupOpen) {
            const timer = setTimeout(() => {
                setPopupOpen(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [popupOpen]);

    // Handle popup close
    const handlePopupClose = () => {
        setPopupOpen(false);
    };

    // Handles Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim() || formData.id <= 0 || formData.age <= 0 || !formData.city.trim()) {
            setMessage('Please fill all required fields correctly.');
            setIsSuccess(false);
            setPopupOpen(true);
            return;
        }
        setMessage('Sending data...');
        setIsSuccess(null);

        try {
            const result = await addStudent(formData);

            setMessage(`✅ Success! Student data added. ID: ${result.id}`);
            setIsSuccess(true);
            setPopupOpen(true);
            setFormData({ id: 0, name: '', age: 0, city: '' });

        } catch (error: any) {
            console.error('Error:', error);
            const errorMessage = error.response?.data?.message || error.message || 'Unknown error';

            setMessage(`❌ Error: ${errorMessage}`);
            setIsSuccess(false);
            setPopupOpen(true);
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

                {/* Response Message (keeping original alert for reference, but popup is primary) */}
                {message && !popupOpen && (
                    <Alert
                        severity={isSuccess ? 'success' : 'error'}
                        sx={{ mt: 2, width: '100%' }}
                    >
                        {message}
                    </Alert>
                )}
            </Box>

            {/* Animated Popup Alert */}
            <Dialog
                open={popupOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handlePopupClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        minWidth: 320,
                        maxWidth: 400,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                        animation: popupOpen ? 'popupBounce 0.5s ease-out' : 'none',
                    }
                }}
                sx={{
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(4px)',
                    },
                }}
            >
                <DialogTitle
                    id="alert-dialog-title"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        pb: 1,
                        pt: 2.5,
                        px: 2.5,
                        backgroundColor: isSuccess ? '#e8f5e9' : '#ffebee',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        {isSuccess ? (
                            <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 32 }} />
                        ) : (
                            <ErrorIcon sx={{ color: '#f44336', fontSize: 32 }} />
                        )}
                        <Typography
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 600,
                                color: isSuccess ? '#2e7d32' : '#c62828',
                            }}
                        >
                            {isSuccess ? 'Success!' : 'Error'}
                        </Typography>
                    </Box>
                    <IconButton
                        aria-label="close"
                        onClick={handlePopupClose}
                        sx={{
                            color: (theme) => theme.palette.grey[500],
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent
                    sx={{
                        px: 2.5,
                        py: 2.5,
                        backgroundColor: isSuccess ? '#f1f8f4' : '#fff5f5',
                    }}
                >
                    <Typography
                        id="alert-dialog-description"
                        variant="body1"
                        sx={{
                            color: isSuccess ? '#1b5e20' : '#b71c1c',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                        }}
                    >
                        {message.replace(/✅|❌/g, '').trim()}
                    </Typography>
                </DialogContent>
                <DialogActions
                    sx={{
                        px: 2.5,
                        pb: 2,
                        pt: 1,
                        backgroundColor: isSuccess ? '#e8f5e9' : '#ffebee',
                    }}
                >
                    <Button
                        onClick={handlePopupClose}
                        variant="contained"
                        sx={{
                            backgroundColor: isSuccess ? '#4caf50' : '#f44336',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 500,
                            px: 3,
                            '&:hover': {
                                backgroundColor: isSuccess ? '#45a049' : '#da190b',
                            },
                        }}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            {/* CSS Animation Keyframes */}
            <style>{`
                @keyframes popupBounce {
                    0% {
                        transform: scale(0.7) translateY(20px);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.05) translateY(-5px);
                    }
                    100% {
                        transform: scale(1) translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </Container>
    );
};

export default StudentForm;