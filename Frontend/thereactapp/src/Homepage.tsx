import React, { useEffect, useState } from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import InfoDisplay from './InfoChart';
import UsageData from './UsageData';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
    useEffect(() => {
        setBodyColor({ color: "#d9d9d9" });
    }, []);

    return (
        <>
            <Tooltip title="User Guide">
                <HelpOutlineIcon></HelpOutlineIcon>
            </Tooltip>

            <h1>Message from Backend:</h1>
            <p id="message">{message}</p>

            <RobotStatus />
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "5rem" }}>
                <UsageData />
                <PieDisplay />
                <InfoDisplay />
            </Box>
        </>
    )
}

export default Homepage;
