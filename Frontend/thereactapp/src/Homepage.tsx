import * as React from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';

function Homepage() {
    setBodyColor({ color: "#d9d9d9" })

    return (
        <RobotStatus />

    )
}

export default Homepage