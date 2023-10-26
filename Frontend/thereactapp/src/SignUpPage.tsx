import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ThemeProvider,
    createTheme,
    TextField,
    Button,
    Typography,
} from '@mui/material';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  

    const theme = createTheme({
        // Your theme configurations here
    });

    return (
        <ThemeProvider theme={theme}>
            <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                   
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        size="small"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        size="small"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        size="small"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '16px' }}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </ThemeProvider>
    );
};

export default SignUp;
