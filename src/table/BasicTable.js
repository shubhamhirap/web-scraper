import {
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: { margin: 8 },
  table: {
    minWidth: 650,
  },
});

const createData = (name, calories, fat, carbs, protein) => {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const handleClick = (e, row) => {
  console.log(e.target);
  console.log(row);
};

const BasicTable = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={(e) => handleClick(e,row)}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right" onClick={(e) => handleClick(e)}>
                  {row.calories}
                </TableCell>
                <TableCell align="right" onClick={(e) => handleClick(e)}>
                  {row.fat}
                </TableCell>
                <TableCell align="right" onClick={(e) => handleClick(e)}>
                  {row.carbs}
                </TableCell>
                <TableCell align="right" onClick={(e) => handleClick(e)}>
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BasicTable;
