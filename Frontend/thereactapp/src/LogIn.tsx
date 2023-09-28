import { Button, Dialog, DialogActions, DialogContent, Link } from '@mui/material';
import React, { useState } from 'react';

function LogIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div>
                <p>This is the first page.</p>
                {/* <Link to="/Homepage"><button>
                    Go to Page 2
                </button>
                </Link> */}
            </div>
            <Dialog open={open}
                keepMounted
                onClose={handleClose}>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username:
                            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </label>
                        <label>
                            Password:
                            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>


        </>

    )
}
export default LogIn