import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function RobotStatus() {

    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);

    const handleClick1 = () => {
        setActive1(current => !current);
    };
    const handleClick2 = () => {
        setActive2(current => !current);
    };
    const handleClick3 = () => {
        setActive3(current => !current);
    };
    const handleClick4 = () => {
        setActive4(current => !current);
    };
    const handleClick5 = () => {
        setActive5(current => !current);
    };

    const inactiveColor = "#bebebe"
    function hover1(e: any) {
        if (active1 === false) {
            e.target.style.background = "gray"
        }
    }
    function unhover1(e: any) {
        if (active1 === false) {
            e.target.style.background = "#bebebe"
        }
    }
    function hover2(e: any) {
        if (active2 === false) {
            e.target.style.background = "gray"
        }
    }
    function unhover2(e: any) {
        if (active2 === false) {
            e.target.style.background = "#bebebe"
        }
    }
    function hover3(e: any) {
        if (active3 === false) {
            e.target.style.background = "gray"
        }
    }
    function unhover3(e: any) {
        if (active3 === false) {
            e.target.style.background = "#bebebe"
        }
    }
    function hover4(e: any) {
        if (active4 === false) {
            e.target.style.background = "gray"
        }
    }
    function unhover4(e: any) {
        if (active4 === false) {
            e.target.style.background = "#bebebe"
        }
    }
    function hover5(e: any) {
        if (active5 === false) {
            e.target.style.background = "gray"
        }
    }
    function unhover5(e: any) {
        if (active5 === false) {
            e.target.style.background = "#bebebe"
        }
    }
    return (


        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "65rem" }}>
                <Box >
                    <Button onClick={handleClick1}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",

                            width: "10rem",
                            height: "10rem",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: active1 ? "green" : inactiveColor
                        }}
                    >
                        <div
                            style={{
                                color: active1 ? "white" : "black",
                                display: "flex",
                                alignSelf: "center",
                                fontSize: "22px"
                            }}
                        > Power Status

                        </div>
                    </Button >
                </Box>
                <Box onMouseEnter={hover2} onMouseLeave={unhover2} >
                    <Button onClick={handleClick2}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",

                            width: "10rem",
                            height: "10rem",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: active2 ? "green" : inactiveColor
                        }}
                    >
                        <div
                            style={{
                                color: active2 ? "white" : "black",
                                display: "flex",
                                alignSelf: "center",
                                fontSize: "22px"
                            }}
                        > Task Status
                        </div>
                    </Button>
                </Box>
                <Box onMouseEnter={hover3} onMouseLeave={unhover3} >
                    <Button onClick={handleClick3}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",

                            width: "10rem",
                            height: "10rem",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: active3 ? "green" : inactiveColor
                        }}
                    >
                        <div
                            style={{
                                color: active3 ? "white" : "black",
                                display: "flex",
                                alignSelf: "center",
                                fontSize: "22px"
                            }}
                        > Com. Status
                        </div>
                    </Button>
                </Box>
                <Box onMouseEnter={hover4} onMouseLeave={unhover4} >
                    <Button onClick={handleClick4}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",

                            width: "10rem",
                            height: "10rem",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: active4 ? "green" : inactiveColor
                        }}
                    >
                        <div
                            style={{
                                color: active4 ? "white" : "black",
                                display: "flex",
                                alignSelf: "center",
                                fontSize: "22px"
                            }}
                        > Battery %
                        </div>
                    </Button>
                </Box>
                <Box onMouseEnter={hover5} onMouseLeave={unhover5} >
                    <Button onClick={handleClick5}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "2px solid black",

                            width: "10rem",
                            height: "10rem",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 8px gray",
                            backgroundColor: active5 ? "green" : inactiveColor

                        }}
                    >
                        <div
                            style={{
                                color: active5 ? "white" : "black",
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
