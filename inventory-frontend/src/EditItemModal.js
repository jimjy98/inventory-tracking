import React, { useState, useEffect } from 'react';
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

export function EditItemModal({ item, open, onClose, editItem }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        if (!item) return;
        setName(item.name);
        setDescription(item.description);
        setPrice(item.price);
        setQuantity(item.quantity);
    }, [item]);

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
                        disabled
                        id="barcode"
                        label="Barcode"
                        value={item ? item.barcode : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="name"
                        label="Name"
                        defaultValue={name}
                        onChange={e => setName(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="description"
                        label="Description"
                        defaultValue={description}
                        onChange={e => setDescription(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="price"
                        label="Price"
                        type="number"
                        defaultValue={price}
                        onChange={e => setPrice(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="quantity"
                        label="Quantity"
                        type="number"
                        defaultValue={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='outlined' onClick={() => onClose()}>
                        Cancel
                    </Button>
                    <Button variant='outlined' onClick={() => editItem({
                        barcode: item.barcode,
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