import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

import Button from '@mui/material/Button';
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { useState } from 'react';


export default function UserGuide() {

    return (
        <>

            <div style={{ display: "flex", height: "100px" }}>
                <Sidebar>
                    <Menu>
                        <MenuItem> Dashboard </MenuItem>
                        <MenuItem> Invoices </MenuItem>
                        <MenuItem> Charts </MenuItem>
                        <MenuItem> Wallets </MenuItem>
                        <MenuItem> Transactions </MenuItem>
                        <MenuItem> Settings </MenuItem>
                        <MenuItem> Logout </MenuItem>
                    </Menu>
                </Sidebar>
            </div>


        </>
    )
}