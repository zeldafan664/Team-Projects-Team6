import * as React from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import InfoDisplay from './InfoChart';
import UsageData from './UsageData';

function Homepage() {
    setBodyColor({ color: "#d9d9d9" })

    return (
        <>
            <RobotStatus />
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "5rem" }}>
                <UsageData />
                <PieDisplay />
                <InfoDisplay />

            </Box>
        </>

    )
}

export default Homepage