import React, { useEffect, useState } from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import UsageData from './UsageData';
import { BorderAll } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';


function Homepage() {

    const [message, setMessage] = useState("");

    // Fetch the message from the backend when the component mounts
    useEffect(() => {
        fetch('/api/message')
            .then((response) => response.text())
            .then((data) => {
                // Set the message state with the data from the backend
                setMessage(data);
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
                flex: 1,
            }}>
                <Box sx={{ flex: 2, display: "flex", justifyContent: "space-evenly" }}>
                    <TextField label="username">test</TextField>
                    <TextField label="password">test</TextField>

                </Box>
                <Box sx={{ flex: 3, display: "flex", justifyContent: "space-evenly" }}>
                    <Button style={{ fontSize: "11px", width: "30px", height: "40px", backgroundColor: "#bebebe", color: "black", boxShadow: "3px 3px 4px gray", }}>Back</Button>
                    <Button style={{ fontSize: "11px", width: "30px", height: "40px", backgroundColor: "#bebebe", color: "black", boxShadow: "3px 3px 4px gray" }}>Log-In</Button>
                </Box>
            </Box>
            {/* <UserGuide /> */}
            <Box sx={{ display: "flex", flex: 2, justifyContent: "space-evenly" }}>
                <RobotStatus />
                <UsageData />
                <PieDisplay />
            </Box>

        </>


    )

}

export default Homepage;
