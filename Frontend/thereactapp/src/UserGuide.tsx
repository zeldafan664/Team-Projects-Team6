import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="right" ref={ref} {...props} />;
});

export default function UserGuide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} sx={{ color: "black" }}>
                <Tooltip title="User Guide">
                    <HelpOutlineIcon>
                    </HelpOutlineIcon>
                </Tooltip>
            </Button>
            <Dialog

                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle fontSize={"25px"}>{"Welcome to the Automated Robot Floor Cleaner (ARFC)!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText fontSize={"20px"} id="alert-dialog-slide-description">
                        <li>View varius status of the robot in the top.</li>
                        <li>In the middle left, view data about previous runtimes.</li>
                        <li>View some charts with data about the robot on the right hand side.</li>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}