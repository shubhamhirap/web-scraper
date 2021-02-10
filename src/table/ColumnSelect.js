import {
  Container,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

const ColumnSelect = () => {
  return (
    <>
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <Table>
            <TableRow>
              <TableCell component="td">
                <Table>
                  <TableRow>
                    <TableCell component="th">First Name</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td">Tom</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td">Bella</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td">Nancy</TableCell>
                  </TableRow>
                </Table>
              </TableCell>
              <TableCell component="td">
                <Table>
                  <TableRow>
                    <TableCell component="th">Last Name</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td">Hardy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td">Cooper</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td">White</TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ColumnSelect;
