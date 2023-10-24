import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './circle-5090539_1280.jpg';
import setBodyColor from './setBodyColor';

const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate('/homepage');
    };


    return (
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
        }}>
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
                }}>User Login</h1>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%"
                    }}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        sx={{ width: "100%", marginBottom: "20px" }}
                        onChange={handleInputChange}
                        label="Username"
                        variant="outlined"
                        size="small"
                        color="primary"

                        InputLabelProps={{
                            style: { color: "white" }, // Label color
                        }}
                        InputProps={{
                            style: { color: "white", borderColor: "white" }, // Text color and border color
                        }}
                    />
                    <TextField
                        sx={{ width: "100%", marginBottom: "20px" }}
                        onChange={handleInputChange}
                        label="Password"
                        variant="outlined"
                        size="small"
                        type="password"
                        color="primary"
                        InputLabelProps={{
                            style: { color: "white" }, // Label color
                        }}
                        InputProps={{
                            style: { color: "white", borderColor: "white" }, // Text color and border color
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            width: "100%",
                            height: "50px",
                            backgroundColor: "#4caf50", // Green color
                            color: "white",
                            fontSize: "18px",
                            borderRadius: "25px",
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
