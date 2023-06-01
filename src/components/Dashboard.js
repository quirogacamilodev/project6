import React, { useState } from 'react';
import Navbar from './Navbar';
import CreateComponent from './CreateComponent';
import DeleteComponent from './DeleteComponent';
import UpdateComponent from './UpdateComponent';
import { styled } from '@mui/material/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TableContainerStyled = styled(TableContainer)({
  marginTop: '20px',
});

const TableCellHeaderStyled = styled(TableCell)({
  fontWeight: 'bold',
});

const Dashboard = () => {
  const [elements, setElements] = useState([]);

  const handleCreate = (newElement) => {
    setElements([...elements, newElement]);
  };

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>

      <TableContainerStyled component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCellHeaderStyled>Operación</TableCellHeaderStyled>
              <TableCellHeaderStyled>Componente</TableCellHeaderStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Crear elemento</TableCell>
              <TableCell>
                <CreateComponent onCreate={handleCreate} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eliminar elemento</TableCell>
              <TableCell>
                <DeleteComponent />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Modificar elemento</TableCell>
              <TableCell>
                <UpdateComponent />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainerStyled>

      <h2>Elementos Creados</h2>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
