import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

import Button from '@mui/material/Button';
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { useState } from 'react';


export default function UserGuide() {

    return (
        <>
            <div style={{ width: "250px", backgroundColor: "#EEEEEE" }}>
                {/* Update name and acronym */}
                <i>Welcome to the Automated Floor Buffing Robot (AFBR)!</i> <br />
                <br /> <li>View varius status of the robot in the top. (will become buttons)</li> <br />
                <li>In the middle left, view data about previous runtimes.</li> <br />
                <li>View some charts with data about the robot on the right hand side. </li> <br />
            </div>

        </>
    )
}