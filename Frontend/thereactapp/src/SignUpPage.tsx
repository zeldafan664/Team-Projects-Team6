import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ThemeProvider,
    createTheme,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import backgroundImage from './circle-5090539_1280.jpg';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSignUp = (e: any) => {
        e.preventDefault();
        navigate('/homepage');
    };
    const theme = createTheme({
        components: {
            MuiTextField: {
                defaultProps: {
                    variant: 'outlined',
                    size: 'small',
                },
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', // Set the border color
                            },
                            '&:hover fieldset': {
                                borderColor: 'white', // Set the border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white', // Set the border color when focused
                            },
                        },
                    },
                },
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white overlay
                color: "white", // Text color
            }} >
                <div style={{
                    borderRadius: "10px",
                    border: "2px solid white",
                    boxShadow: "3px 3px 8px rgba(255, 255, 255, 0.5)", // Slightly transparent white shadow
                    width: "400px",
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
                }}>
                    <h1 style={{
                        fontSize: "28px",
                        marginBottom: "20px",
                        textAlign: "center",
                    }}>Create an Account</h1>
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%"
                        }}

                    >
                        <TextField
                            sx={{ width: "100%", marginBottom: "20px" }}
                            label="Username"
                            variant="outlined"
                            size="small"
                            name="username"
                            type="username"
                            required
                            value={formData.username}
                            onChange={handleInputChange}
                            InputLabelProps={{
                                style: { color: "white" }, // Label color
                            }}
                            InputProps={{
                                style: { color: "white", borderColor: "white" }, // Text color and border color
                            }}
                        />
                        <TextField
                            sx={{ width: "100%", marginBottom: "20px" }}
                            label="Email"
                            variant="outlined"
                            size="small"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            InputLabelProps={{
                                style: { color: "white" }, // Label color
                            }}
                            InputProps={{
                                style: { color: "white", borderColor: "white" }, // Text color and border color
                            }}
                        />
                        <TextField
                            sx={{ width: "100%", marginBottom: "20px" }}
                            label="Password"
                            variant="outlined"
                            size="small"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleInputChange}
                            InputLabelProps={{
                                style: { color: "white" }, // Label color
                            }}
                            InputProps={{
                                style: { color: "white", borderColor: "white" }, // Text color and border color
                            }}
                        />
                        <TextField
                            sx={{ width: "100%", marginBottom: "20px" }}
                            label="Confirm Password"
                            variant="outlined"
                            size="small"
                            name="confirmPassword"
                            type="password"
                            required
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            InputLabelProps={{
                                style: { color: "white" }, // Label color
                            }}
                            InputProps={{
                                style: { color: "white", borderColor: "white" }, // Text color and border color
                            }}
                        />
                        <Button
                            type="submit"
                            onClick={handleSignUp}
                            variant="contained"
                            color="primary"
                            style={{
                                width: "100%",
                                height: "50px",
                                backgroundColor: "#4caf50", // Green color
                                color: "white",
                                fontSize: "18px",
                                borderRadius: "25px",
                            }}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default SignUp;
