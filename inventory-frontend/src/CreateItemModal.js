import React, { useState } from 'react';
import { Modal, TextField, Button, Grid, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function CreateItemModal({ open, onClose, onSave }) {
    const [barcode, setBarcode] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            hideBackdrop={true}
        >

            <Grid container sx={style} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        Create/Edit Item
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="barcode"
                        label="Barcode"
                        value={barcode}
                        onChange={e => setBarcode(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="name"
                        label="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="description"
                        label="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="price"
                        label="Price"
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="quantity"
                        label="Quantity"
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='outlined' onClick={() => onClose()}>
                        Cancel
                    </Button>
                    <Button variant='outlined' onClick={() => onSave({
                        barcode: Number(barcode),
                        name: name,
                        description: description,
                        price: Number(price),
                        quantity: Number(quantity)
                    })}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Modal>
    );
}