import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';

const ErrorDialog = ({ open, handleClose, errorMessage }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="error-dialog-title"
            aria-describedby="error-dialog-description"
        >
            <DialogTitle id="error-dialog-title">Error</DialogTitle>
            <DialogContent>
                <DialogContentText id="error-dialog-description">
                    {errorMessage}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Okay
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ErrorDialog;
