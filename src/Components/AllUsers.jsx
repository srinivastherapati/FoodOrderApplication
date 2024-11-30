import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Dummy data for customers
const customers = [
  {
    customerName: "John Doe",
    email: "john.doe@example.com",
    numberOfOrders: 15,
    lastOrderDate: "2024-11-15",
  },
  {
    customerName: "Jane Smith",
    email: "jane.smith@example.com",
    numberOfOrders: 20,
    lastOrderDate: "2024-11-17",
  },
  {
    customerName: "Alice Brown",
    email: "alice.brown@example.com",
    numberOfOrders: 8,
    lastOrderDate: "2024-11-14",
  },
];

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "rgb(42 36 18)",
    minHeight: "100vh",
    color: "#d9e2f1",
    width: "150%",
  },
  table: {
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#1d1a16",
    color: "#d9e2f1",
    fontWeight: "bold",
  },
  tableCell: {
    backgroundColor: "#1d1a16",
    color: "#d9e2f1",
    border: "none",
  },
};

const AllUsers = () => {
  return (
    <Box style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Customer List
      </Typography>
      <TableContainer component={Paper} style={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.tableHeader}>Customer Name</TableCell>
              <TableCell style={styles.tableHeader}>Email</TableCell>
              <TableCell style={styles.tableHeader} align="center">
                Number of Orders
              </TableCell>
              <TableCell style={styles.tableHeader} align="center">
                Last Order Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer, idx) => (
              <TableRow key={idx}>
                <TableCell style={styles.tableCell}>
                  {customer.customerName}
                </TableCell>
                <TableCell style={styles.tableCell}>{customer.email}</TableCell>
                <TableCell style={styles.tableCell} align="center">
                  {customer.numberOfOrders}
                </TableCell>
                <TableCell style={styles.tableCell} align="center">
                  {customer.lastOrderDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllUsers;