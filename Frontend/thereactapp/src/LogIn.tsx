// import { Box, Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function LogIn() {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log('username:', username);
//         console.log('password:', password);
//     };

//     const [open, setOpen] = React.useState(false);
//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };


//     return (
//         <>
//             <Box sx={{
//                 border: "1px solid black",
//                 width: "500px", height: "500px",
//                 marginLeft: "40rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center"
//             }}>
//                 <h1 style={{ display: "flex", justifyContent: "center" }}>User Login</h1>
//                 <Box sx={{ flex: 1, flexDirection: "column", width: "24rem", paddingLeft: "2.5rem", display: "flex", justifyContent: "space-around" }}>
//                     <TextField label="username"></TextField>
//                     <TextField label="password"></TextField>

//                 </Box>
//                 <Box sx={{ flex: 2, display: "flex", justifyContent: "center" }}>
//                     <Link to="/Homepage">
//                         <Button style={{ fontSize: "20px", width: "24rem", height: "50px", backgroundColor: "#bebebe", color: "black", boxShadow: "2px 2px 4px gray" }}>Submit</Button>
//                     </Link>
//                 </Box>
//             </Box>


//         </>

//     )
// }
// export default LogIn

// SignIn.js
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

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
        // Here, you can perform authentication logic (e.g., API call) with formData

        // For demonstration purposes, let's assume authentication is successful
        // Redirect to the homepage
        navigate('/homepage');
    };

    return (
        <div>
            <Box sx={{
                border: "1px solid black",
                width: "500px", height: "500px",
                marginLeft: "40rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>User Login</h1>
                <form onSubmit={handleSubmit}>
                    {/* <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div> */}
                    <Box sx={{ flex: 1, flexDirection: "column", width: "24rem", paddingLeft: "2.5rem", display: "flex", justifyContent: "space-around" }}>
                        <TextField onChange={handleInputChange} label="username"></TextField>
                        <TextField onChange={handleInputChange} label="password"></TextField>

                    </Box>
                    {/* <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                    </div> */}
                    <Button type="submit" style={{ fontSize: "20px", width: "24rem", height: "50px", backgroundColor: "#bebebe", color: "black", boxShadow: "2px 2px 4px gray" }}>Submit</Button>

                </form>
            </Box>
        </div>
    );
};

export default SignIn;
