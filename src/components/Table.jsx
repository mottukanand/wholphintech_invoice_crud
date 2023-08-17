import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TableComponent({ columns, rows, ...props }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            bgcolor: "rgb(250, 250, 250)",
            borderTop: "1px solid rgb(240, 240, 240)",
            borderBottom: "2px solid rgb(240, 240, 240)",
          }}
        >
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column}
                sx={{
                  color: "rgb(38, 38, 38)",
                  padding: "12px",
                  borderTopColor: "rgb(240, 240, 240)",
                  borderRightColor: "rgb(240, 240, 240)",
                  borderLeftColor: "rgb(240, 240, 240)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell
                sx={{
                  padding: "12px",
                  borderTopColor: "rgb(240, 240, 240)",
                  borderRightColor: "rgb(240, 240, 240)",
                  borderLeftColor: "rgb(240, 240, 240)",
                }}
              >
                {index + 1}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
