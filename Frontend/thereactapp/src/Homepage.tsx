import React, { useEffect, useState } from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import InfoDisplay from './InfoChart';
import UsageData from './UsageData';

import UserGuide from './UserGuide';
import { useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Homepage() {
<<<<<<< HEAD
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

=======
    const [showNav, setShowNav] = useState(false)
    setBodyColor({ color: "#d9d9d9" })
    const handleClick = (e: any) => {
        setShowNav(current => !current)
    }
>>>>>>> 63113e9cb026310b14acf854524966aea906bfd5
    return (
        <>
            <Button onClick={handleClick} sx={{ color: "black" }}>
                <Tooltip title="User Guide">
                    <HelpOutlineIcon>
                    </HelpOutlineIcon>
                </Tooltip>
            </Button>
            {showNav && (
                <UserGuide />
            )}

            <h1>Message from Backend:</h1>
            <p id="message">{message}</p>

            <RobotStatus />

            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "5rem" }}>
                <UsageData />
                <PieDisplay />
                <InfoDisplay />
            </Box>


        </>
<<<<<<< HEAD
=======


>>>>>>> 63113e9cb026310b14acf854524966aea906bfd5
    )

}

export default Homepage;
