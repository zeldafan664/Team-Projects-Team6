import * as React from 'react';
import RobotStatus from "./RobotStatus"
import setBodyColor from "./setBodyColor"
import Box from '@mui/material/Box';
import PieDisplay from './PieChart';
import InfoDisplay from './InfoChart';
import UsageData from './UsageData';

import UserGuide from './Tooltip';
import { useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Homepage() {
    const [showNav, setShowNav] = useState(false)
    setBodyColor({ color: "#d9d9d9" })
    const handleClick = (e: any) => {
        setShowNav(current => !current)
    }
    return (
        <>
            <Button onClick={handleClick}>
                <Tooltip title="User Guide">
                    <HelpOutlineIcon>
                    </HelpOutlineIcon>
                </Tooltip>
            </Button>
            {showNav && (
                <UserGuide />
            )}

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