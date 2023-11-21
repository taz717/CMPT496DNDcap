import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

export const PlayerSpells = () => {
    const spellData = [
        {attribute: "Spell Level", value: "0 (Cantrip)"},
        {attribute: "Spell Attack Modifier", value: "+6 (Intelligence)"},
        {attribute: "Range", value: "80 feet"},
        {attribute: "Damage", value: "1d10 Fire"},
    ];


    return (
        <div>
          <h2>Spells Known</h2>
          <h3>Firebolt</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {spellData.map((row) => (
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