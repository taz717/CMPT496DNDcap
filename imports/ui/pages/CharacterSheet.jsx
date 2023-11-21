import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

export const CharacterSheet = () => {
    const coreData = [
        {attribute: "Name", value: "Grey Mann"},
        {attribute: "Class", value: "Fighter 3"},
        {attribute: "Alignment", value: "True Neutral"},
    ];
    const statData = [
        {attribute: "Strength", value: "17 (+3)"},
        {attribute: "Dexterity", value: "14 (+2)"},
        {attribute: "Constitution", value: "14 (+2)"},
        {attribute: "Charisma", value: "12 (+1)"},
        {attribute: "Wisdom", value: "8 (-1)"},
        {attribute: "Intelligence", value: "10 (0)"},
    ];

    return (
        <div>
          <h2>Character Basics</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {coreData.map((row) => (
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
          <h2>Character Attributes</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {statData.map((row) => (
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