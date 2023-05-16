import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';

const RepostConfirmation = ({ open, handleClose, handleConfirm }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="repost-confirmation-dialog-title"
            aria-describedby="repost-confirmation-dialog-description"
            sx={{
                '.MuiDialogTitle-root': {
                    padding: 2,
                    backgroundColor: 'background.paper',
                },
                '.MuiDialogContent-root': {
                    fontSize: 'fontSize',
                    color: 'text.primary',
                },
                '.MuiDialogActions-root': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 1,
                    padding: 2,
                    backgroundColor: 'background.paper',
                    '& button': {
                        padding: '1 2',
                        borderRadius: 'borderRadius',
                        fontSize: 'fontSize',
                        fontWeight: 'fontWeightBold',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                    },
                    '& .confirm-btn': {
                        backgroundColor: 'primary.main',
                        color: 'common.white',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        },
                    },
                    '& .cancel-btn': {
                        backgroundColor: 'grey.300',
                        color: 'text.primary',
                        '&:hover': {
                            backgroundColor: 'grey.400',
                        },
                    },
                },
            }}
        >
            <DialogTitle id="repost-confirmation-dialog-title">
                Repost Confirmation
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="repost-confirmation-dialog-description">
                    Are you sure you want to repost this content?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="primary"
                    className="cancel-btn"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleConfirm}
                    color="primary"
                    autoFocus
                    className="confirm-btn"
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RepostConfirmation;
