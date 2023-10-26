import React, { useEffect, useState } from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import UsageData from './UsageData';
import UserGuide from './UserGuide';
import { Button, TextField, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogIn from './LogIn';
import { Link } from 'react-router-dom';
import StartStopButton from './StartStopButton';

function Homepage() {
    const [message, setMessage] = useState("Testing default value");

    // Fetch the message from the backend when the component mounts
    useEffect(() => {
        fetch('http://localhost:8080/api/message')

            .then((response) => response.text())

            .then((data) => {
                // Set the message state with the data from the backend
                console.log("Data Received: ", data);
                setMessage(prevMessage => data);
            })
            .catch((error) => {
                console.error('Error fetching message:', error);
            });
    }, []);


    setBodyColor({ color: "#d0d0d0" })


    return (
        <>
            {/* <UserGuide /> */}

            <Box sx={{ display: "flex", flex: 1, justifyContent: "space-evenly" }}>

                <RobotStatus />
                <StartStopButton />
                <UsageData />
            </Box>
            <div style={{ fontSize: '24px', color: 'red', backgroundColor: 'yellow' }}>{message}</div>
        </>
    );
}

export default Homepage;
