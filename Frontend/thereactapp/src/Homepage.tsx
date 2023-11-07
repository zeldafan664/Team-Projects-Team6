import React, { useEffect, useState } from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import UsageData from './UsageData';
import UserGuide from './UserGuide';
import { Button, TextField, ThemeProvider, Tooltip, createTheme } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogIn from './LogIn';
import { Link } from 'react-router-dom';
import StartStopButton from './StartStopButton';
import backgroundImage from './circle-5090539_1280.jpg';

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


    const theme = createTheme({
        components: {
            MuiTextField: {
                defaultProps: {
                    variant: 'outlined',
                    size: 'small',
                },
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', // Set the border color
                            },
                            '&:hover fieldset': {
                                borderColor: 'white', // Set the border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white', // Set the border color when focused
                            },
                        },
                    },
                },
            },
        },
    });

    return (
        <>
            {/* <UserGuide /> */}
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
                    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white overlay
                    // color: "white", // Text color
                }} >
                    <Box sx={{ display: "flex", flex: 1, justifyContent: "space-evenly" }}>
                        <StartStopButton />
                        <RobotStatus />

                    </Box>
                    {/* <div style={{ fontSize: '24px', color: 'red', backgroundColor: 'yellow' }}>{message}</div> */}
                </div>
            </ThemeProvider >
        </>
    );
}

export default Homepage;
