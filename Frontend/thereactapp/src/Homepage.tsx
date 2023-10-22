import React, { useEffect, useState } from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import UsageData from './UsageData';
import UserGuide from './UserGuide';
import { Button, TextField, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Homepage() {
    const [message, setMessage] = useState("Testing default value");

    // Fetch the message from the backend when the component mounts
    useEffect(() => {
        fetch('http://localhost:8080/api/message')

            .then((response) => response.text())

            .then((data) => {
                // Set the message state with the data from the backend
                console.log("Data Received: " , data);
                setMessage(prevMessage => data);
            })
            .catch((error) => {
                console.error('Error fetching message:', error);
            });
    }, []);

    

    // Set the body color
    // useEffect(() => {
    //     setBodyColor({ color: "#d9d9d9" });
    // }, []);

    const [showNav, setShowNav] = useState(false)
    setBodyColor({ color: "#d0d0d0" })
    const handleClick = (e: any) => {
        setShowNav(current => !current)
    }


    return (
        <>
            {/* <LogIn /> */}
            <Box sx={{
                border: "1px solid black",
                width: "500px", height: "500px",
                marginLeft: "40rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>User Login</h1>
                <Box sx={{ flex: 1, flexDirection: "column", width: "24rem", paddingLeft: "2.5rem", display: "flex", justifyContent: "space-around" }}>
                    <TextField label="username">test</TextField>
                    <TextField label="password">test</TextField>

                </Box>
                <Box sx={{ flex: 2, display: "flex", justifyContent: "center" }}>
                    <Button style={{ fontSize: "20px", width: "24rem", height: "50px", backgroundColor: "#bebebe", color: "black", boxShadow: "2px 2px 4px gray" }}>Submit</Button>

                </Box>
            </Box>
            {/* <UserGuide /> */}
            <Box sx={{ display: "flex", flex: 2, justifyContent: "space-evenly" }}>
                <RobotStatus />
                <UsageData />
                <PieDisplay />
            </Box>

            <div style={{ fontSize: '24px', color: 'red', backgroundColor: 'yellow' }}>{message}</div>

        </>
    );
}

export default Homepage;
