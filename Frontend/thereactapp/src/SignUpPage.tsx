import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ThemeProvider,
    createTheme,
    TextField,
    Button,
} from '@mui/material';
import backgroundImage from './circle-5090539_1280.jpg';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    });

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUp = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Form Data to be Sent: ", formData);
    
        try {
            const response = await fetch('/signupPage.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });
    
            if (response.status === 200) {
                // Registration was successful
                navigate('/homepage');
            } else {
                // Registration failed
                console.error("User registration failed");
            }
        } catch (error) {
            console.error("Error during the fetch:", error);
        }
    };
    

    const theme = createTheme({
        // ... (your theme settings)
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
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "white",
            }}>
                <div style={{
                    borderRadius: "10px",
                    border: "2px solid white",
                    boxShadow: "3px 3px 8px rgba(255, 255, 255, 0.5)",
                    width: "400px",
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
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
                        onSubmit={handleSignUp}
                    >
                        <TextField
                            sx={{ width: "100%", marginBottom: "20px" }}
                            label="Username"
                            variant="outlined"
                            size="small"
                            name="username"
                            type="text"
                            required
                            value={formData.username}
                            onChange={handleInputChange}
                            InputLabelProps={{
                                style: { color: "white" },
                            }}
                            InputProps={{
                                style: { color: "white", borderColor: "white" },
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
                                style: { color: "white" },
                            }}
                            InputProps={{
                                style: { color: "white", borderColor: "white" },
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
                                style: { color: "white" },
                            }}
                            InputProps={{
                                style: { color: "white", borderColor: "white" },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                                width: "100%",
                                height: "50px",
                                backgroundColor: "#4caf50",
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

