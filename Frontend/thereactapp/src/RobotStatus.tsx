import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Box } from '@mui/material';
import StartStopButton from './StartStopButton';


export default function RobotStatus() {

    const inactiveColor = "#bebebe"
    return (
        <>
            <div style={{ display: "flex" }}>

                <Box style={{ paddingRight: "0.5rem", }}>
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",
                            width: "12rem",
                            height: "12rem",

                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: inactiveColor
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignSelf: "center",
                                fontSize: "22px"
                            }}
                        > <b>Robot status</b>
                        </div>
                    </Button >
                </Box>
                <Box style={{ paddingRight: "0.5rem", }}>
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",
                            width: "12rem",
                            height: "12rem",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: inactiveColor
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignSelf: "center",
                                fontSize: "22px"
                            }}
                        > <b>Task Status</b>
                        </div>
                    </Button>
                </Box>
                <Box style={{ paddingRight: "0.5rem", }}>
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",
                            width: "12rem",
                            height: "12rem",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: inactiveColor
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignSelf: "center",
                                fontSize: "22px"
                            }}
                        > <b>Com. Status</b>
                        </div>
                    </Button>
                </Box>

                <Box >
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",
                            width: "12rem",
                            height: "12rem",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: inactiveColor

                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignSelf: "center",
                                fontSize: "22px"
                            }}
                        > <b>Task %</b>
                        </div>
                    </Button>
                </Box>

            </div >
        </>
    )

}
