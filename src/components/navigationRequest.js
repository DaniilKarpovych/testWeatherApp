import { useState, useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './navigationRequest.css'
import { useGetCordinate } from '../hook/useGetCords';
import { Context } from '../lib/settingContext';

export const SimpleBackdrop = () => {
    const [open, setOpen] = useState(true);
    const {setAllowment} = useContext(Context)
    const handleClose = () => {
        setOpen(false);
    };
    useGetCordinate()
    const handleAccept = () => {
       setOpen(true)
       setAllowment(true)
    }
    return (
        <div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div className='buttonBox'>
                    <h2>Allow access to your location</h2>
                    <Stack spacing={2} direction="row" justifyContent="center">
                        <Button 
                        onClick = {handleAccept}
                        variant="contained">
                        accept</Button>
                        <Button 
                        variant="outlined"
                        onClick={handleClose}
                        >decline</Button>
                    </Stack>
                </div>
            </Backdrop>

        </div>
    );
}