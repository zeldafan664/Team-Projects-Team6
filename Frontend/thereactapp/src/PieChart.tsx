import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';

export default function PieDisplay() {
    const inactiveColor = "#bebebe"
    return (
        <>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <Box style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid black",
                    width: "20rem",
                    height: "20rem",
                    borderRadius: "0.5rem",
                    boxShadow: "3px 3px 8px gray",
                    backgroundColor: inactiveColor
                }}>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200} />
                </Box><Box style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid black",
                    width: "20rem",
                    height: "20rem",
                    borderRadius: "0.5rem",
                    boxShadow: "3px 3px 8px gray",
                    backgroundColor: inactiveColor
                }}>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200} />
                </Box>
            </Box>
        </>
    );
}