import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

export const PlayerInventory = () => {
    const inventoryData = [
        {attribute: "Blade of Woe", value: "Rare (+1) Dagger, Magical"},
        {attribute: "Bow of Banishment", value: "Very Rare (+2) Bow, Magical"},
        {attribute: "Tinderbox", value: "5 Uses"},
    ];


    return (
        <div>
          <h2>Inventory</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {inventoryData.map((row) => (
                  <TableRow key={row.attribute}>
                    <TableCell component="th" scope="row">
                      {row.attribute}
                    </TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
        </div>
      );
};