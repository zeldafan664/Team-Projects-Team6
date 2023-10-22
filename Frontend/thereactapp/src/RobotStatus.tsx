import * as React from 'react';
import Box from '@mui/material/Box';

export default function RobotStatus() {

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "1px solid gray",
                        width: "8rem",
                        height: "8rem",
                        borderRadius: "0.5rem",
                        boxShadow: "3px 3px 8px gray",
                        backgroundColor: "#EEEEEE"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignSelf: "center",
                            fontSize: "22px"
                        }}
                    > test
                    </div>
                </Box>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "1px solid gray",
                        width: "8rem",
                        height: "8rem",
                        borderRadius: "0.5rem",
                        boxShadow: "3px 3px 8px gray",
                        backgroundColor: "#EEEEEE"
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
                </Box>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "1px solid gray",
                        width: "8rem",
                        height: "8rem",
                        borderRadius: "0.5rem",
                        boxShadow: "3px 3px 8px gray",
                        backgroundColor: "#EEEEEE"
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
                </Box>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "1px solid gray",
                        width: "8rem",
                        height: "8rem",
                        borderRadius: "0.5rem",
                        boxShadow: "3px 3px 8px gray",
                        backgroundColor: "#EEEEEE"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignSelf: "center",
                            fontSize: "22px"
                        }}
                    > Battery %
                    </div>
                </Box>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "1px solid gray",
                        width: "8rem",
                        height: "8rem",
                        borderRadius: "0.5rem",
                        boxShadow: "3px 3px 8px gray",
                        backgroundColor: "#EEEEEE"
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
                </Box>
            </div>
        </>
    )

}
