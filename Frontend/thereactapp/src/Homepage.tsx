import React, { useEffect, useState } from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import InfoDisplay from './InfoChart';
import UsageData from './UsageData';

import UserGuide from './UserGuide';
import { Button, Tooltip } from '@mui/material';
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

    const [showNav, setShowNav] = useState(false)
    setBodyColor({ color: "#d9d9d9" })
    const handleClick = (e: any) => {
        setShowNav(current => !current)
    }
    return (
        <>

            <UserGuide />
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
