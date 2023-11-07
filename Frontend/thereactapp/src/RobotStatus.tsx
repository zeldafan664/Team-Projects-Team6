import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Box } from '@mui/material';
import StartStopButton from './StartStopButton';


export default function RobotStatus() {

    const inactiveColor = "#bebebe"
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                <Box >
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",
                            width: "10rem",
                            height: "10rem",
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
                        > Robot status
                        </div>
                    </Button >
                </Box>
                <Box>
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",
                            width: "10rem",
                            height: "10rem",
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
                        > Task Status
                        </div>
                    </Button>
                </Box>
                <Box >
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",
                            width: "10rem",
                            height: "10rem",
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
                        > Com. Status
                        </div>
                    </Button>
                </Box>

                <Box >
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",

                            width: "10rem",
                            height: "10rem",
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
                        > Task %
                        </div>
                    </Button>
                </Box>

            </div >
        </>
    )

}
