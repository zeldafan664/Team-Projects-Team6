import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import setBodyColor from './setBodyColor';
import backgroundImage from '../public/BlueBackground.jpeg'

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
    setBodyColor({ color: "#d0d0d0" })





    return (
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>
            <Box sx={{
                borderRadius: "10px",
                border: "2px solid black",
                boxShadow: "3px 3px 8px gray",
                width: "400px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px"
            }}>
                <h1 style={{
                    fontSize: "24px",
                    marginBottom: "20px",
                    textAlign: "center"
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
                    />
                    <TextField
                        sx={{ width: "100%", marginBottom: "20px" }}
                        onChange={handleInputChange}
                        label="Password"
                        variant="outlined"
                        size="small"
                        type="password"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            width: "100%",
                            height: "50px",
                            backgroundColor: "#bebebe",
                            color: "black",
                            boxShadow: "2px 2px 4px gray",
                            fontSize: "18px"
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </div>

    );
};

export default SignIn;
