import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'name', label: 'Last Used', minWidth: 50 },
    { id: 'code', label: 'Runtime', minWidth: 50 },
    {
        id: 'anotherdatavalue',
        label: 'Another Data Value',
        minWidth: 50,
        align: 'right',
        format: (value: any) => value.toLocaleString('en-US'),
    }
];

function createData(name: any, code: any, anotherdatavalue: any) {

    return { name, code, anotherdatavalue };
}

const rows = [
    createData('10/30/2023', '5:00', "XXXXX"),
    createData('10/31/2023', '6:32', "XXXXX"),
    createData('11/1/2023', '3:44', "XXXXX"),
    createData('11/2/2023', '10:57', "XXXXX"),
    createData('11/1/2023', '3:44', "XXXXX"),
    createData('11/2/2023', '10:57', "XXXXX"),
    createData('11/1/2023', '3:44', "XXXXX"),
    createData('11/2/2023', '10:57', "XXXXX"),


];


export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const inactiveColor = "#bebebe"
    return (
        <Paper sx={{
            width: '50%', overflow: 'hidden', borderRadius: "0.5rem", height: '50%',
            boxShadow: "3px 3px 8px gray",
            backgroundColor: inactiveColor
        }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ fontWeight: "bold" }}>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={"center"}
                                    style={{ minWidth: column.minWidth, fontWeight: "bold", fontSize: "16.5px" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={"center"}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}