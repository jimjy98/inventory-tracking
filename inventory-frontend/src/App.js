import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { CreateItemModal } from './CreateItemModal';
import { EditItemModal } from './EditItemModal';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editing, setEditing] = useState(null);

  const handleOpenCreate = () => setOpenCreate(true);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const handleCloseEdit = () => {setOpenEdit(false); setEditing(null);};

  const createItem = (item) => {
    axios.post(`http://localhost:8000/items`, item)
      .then(() => {
        setItems([...items, item]);
        handleCloseCreate();
      }).catch(err => {
        console.error(err);
      });

  }

  const editItem = (item) => {
    axios.post(`http://localhost:8000/items/${item.barcode}`, item)
      .then(() => {
        setItems([...items.filter(i => i.barcode !== item.barcode), item]);
        handleCloseEdit();
      }
      ).catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    axios.get("http://localhost:8000/items")
      .then(res => {
        const items = res.data;
        items.sort((a, b) => a.barcode - b.barcode);
        setItems(res.data);
      });
  }, [items.length]);

  const removeItem = (item) => {
    axios.delete(`http://localhost:8000/items/${item.barcode}`);
    setItems(items.filter(i => i.barcode !== item.barcode));
  }

  function exportToCSV() {
    const csv = "Barcode,Name,Description,Price,Quantity\n" + items.map(i => `${i.barcode},${i.name},${i.description},${i.price},${i.quantity}`).join('\n');
    const csvData = new Blob([csv], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvData);
    const tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'items.csv');
    tempLink.click();
  }

  function generateData() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        barcode: i,
        name: `Item ${i}`,
        description: `Description ${i}`,
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 100)
      });
    }
    items.forEach(item => {
      axios.post("http://localhost:8000/items", item)
        .then(res => {
          console.log(res);
        }).catch(err => {
          console.error(err);
        });
    });
  }

  return (
    <div className="App">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Barcode</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.barcode}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row">
                  {item.barcode}
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right"><IconButton onClick={() => {
                  setEditing(item);
                  handleOpenEdit();
                }} ><EditIcon fontSize='small' /> </IconButton></TableCell>

                <TableCell align="right"><IconButton color='error' onClick={() => removeItem(item)} ><DeleteIcon fontSize='small' /> </IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant='outlined' onClick={() => generateData()}>Generate Items</Button>
      <br /><br />
      <Button variant='outlined' onClick={handleOpenCreate}>Create Item</Button>
      <br /><br />
      <Button variant='outlined' onClick={() => exportToCSV()}>Export to CSV</Button>
      <CreateItemModal open={openCreate} onClose={handleCloseCreate} onSave={createItem} />
      <EditItemModal open={openEdit} onClose={handleCloseEdit} item={editing} editItem={editItem} />
    </div>
  );
}

export default App;
