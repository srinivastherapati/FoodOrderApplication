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

// Dummy data for orders
const orders = [
  {
    orderId: "101",
    customerName: "John Doe",
    customerEmail: "john.doe@example.com",
    totalPrice: "$75.00",
    orderDate: "2024-11-18",
  },
  {
    orderId: "102",
    customerName: "Jane Smith",
    customerEmail: "jane.smith@example.com",
    totalPrice: "$45.00",
    orderDate: "2024-11-17",
  },
  {
    orderId: "103",
    customerName: "Alice Brown",
    customerEmail: "alice.brown@example.com",
    totalPrice: "$30.00",
    orderDate: "2024-11-16",
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

const AllOrders = () => {
  return (
    <Box style={styles.container}>
      <Typography variant="h4" gutterBottom>
        All Orders
      </Typography>
      <TableContainer component={Paper} style={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.tableHeader}>Order ID</TableCell>
              <TableCell style={styles.tableHeader}>Customer Name</TableCell>
              <TableCell style={styles.tableHeader}>Customer Email</TableCell>
              <TableCell style={styles.tableHeader} align="center">
                Total Price
              </TableCell>
              <TableCell style={styles.tableHeader} align="center">
                Order Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, idx) => (
              <TableRow key={idx}>
                <TableCell style={styles.tableCell}>{order.orderId}</TableCell>
                <TableCell style={styles.tableCell}>
                  {order.customerName}
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {order.customerEmail}
                </TableCell>
                <TableCell style={styles.tableCell} align="center">
                  {order.totalPrice}
                </TableCell>
                <TableCell style={styles.tableCell} align="center">
                  {order.orderDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllOrders;