import React, { useState,useEffect } from "react";
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
  CircularProgress
} from "@mui/material";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";
import { getAllOrders } from "./ServerRequests";

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
  const [totalOrders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllOrders()
    .then((data) => {
      setOrders(data);
      setLoading(false);
    })
    .catch((error) => console.error("Failed to fetch past payments:", error));
  }, []);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return <ErrorPage title="failed to fetch meals" message={error.message} />;
  }

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
            {totalOrders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.customerEmail}</TableCell>
                <TableCell>${order.totalPayment.toFixed(2)}</TableCell>
                <TableCell>{ new Date(order.orderDate).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllOrders;