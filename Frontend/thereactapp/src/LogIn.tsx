import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
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
    setBodyColor({ color: "#d0d0d0" })
    return (
        <div style={{ transform: "translate(35%, 50%)", }}>
            <Box sx={{

                border: "1px solid black",
                width: "500px", height: "500px",

                //alignItems: 'center',


            }}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>User Login</h1>
                <form
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        transform: "translateY(50%)"

                    }}

                    onSubmit={handleSubmit}>
                    {/* <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div> */}
                    <Box sx={{ flexDirection: "column", width: "24rem", display: "flex", alignItems: "space-around" }}>
                        <TextField onChange={handleInputChange} label="username"></TextField>
                        <TextField onChange={handleInputChange} label="password"></TextField>
                        <Button type="submit" style={{ fontSize: "20px", width: "24rem", height: "50px", backgroundColor: "#bebebe", color: "black", boxShadow: "2px 2px 4px gray" }}>Submit</Button>
                    </Box>
                    {/* <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                    </div> */}

                </form>
            </Box>
        </div>
    );
};

export default SignIn;
