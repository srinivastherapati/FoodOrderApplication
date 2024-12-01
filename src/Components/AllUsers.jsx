import React from "react";
import { useState,useEffect } from "react";
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
import { getAllCustomers } from "./ServerRequests";

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#2e2e2e",
    color: "#fff",
    borderRadius: "8px",
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#424242",
    border: "none",
  },
  tableCell: {

    fontSize: "16px",
    color: "black",
    borderBottom: "1px solid #424242",
  },
};


const AllUsers = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllCustomers()
    .then((data) => {
      setCustomers(data);
      setLoading(false);
    })
    .catch((error) => setError(error || "failed to get customers"), error);
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
        Customer List
      </Typography>
      <TableContainer component={Paper} style={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.tableHeader}>Customer Name</TableCell>
              <TableCell style={styles.tableHeader}>Customer Email</TableCell>
              <TableCell style={styles.tableHeader} align="center">
                Number of Orders
              </TableCell>
              <TableCell style={styles.tableHeader} align="center">
                Total Order Value
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
                <TableCell style={styles.tableCell}>{customer.customerEmail}</TableCell>
                <TableCell style={styles.tableCell} align="center">
                  {customer.numberOfOrders}
                </TableCell>
                <TableCell style={styles.tableCell} align="center">
                  ${customer.customerTotalOrderValue.toFixed(2)}
                </TableCell>
                <TableCell style={styles.tableCell} align="center">
                  {customer.numberOfOrders!=0 ?new Date(customer.lastOrderDate).toLocaleDateString():"Order not Placed"}
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