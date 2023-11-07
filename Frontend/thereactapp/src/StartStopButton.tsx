import React, { useState } from "react";
import Button from "@mui/material/Button";

const StartStopButton = () => {
    const [isRunning, setIsRunning] = useState(false);

    const toggleButton = () => {
        setIsRunning(!isRunning);
        // Add logic here to handle start and stop actions
        if (isRunning) {
            // Handle stop action
            console.log("Stop Action");
        } else {
            // Handle start action
            console.log("Start Action");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
                variant="contained"
                sx={{
                    fontSize: "22px",
                    width: "12rem",
                    height: "12rem",
                    borderRadius: "0.5rem",
                    boxShadow: "3px 3px 8px gray",
                    backgroundColor: isRunning ? "#e74c3c" : "#3498db",
                    color: "white",
                    "&:hover": {
                        backgroundColor: isRunning ? "#c0392b" : "#2980b9",
                    },
                }}
                onClick={toggleButton}
            >
                {isRunning ? "Stop" : "Start"}
            </Button>

        </div>
    );
};

export default StartStopButton;
