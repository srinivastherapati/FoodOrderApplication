import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";
import { getAllCustomers } from "./ServerRequests";
import "./customerorders.css"; // Import the CSS file

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
      .catch((error) => setError(error || "Failed to fetch customers"));
  }, []);

  if (isLoading) {
    return (
      <Box className="loading-spinner">
        <CircularProgress className="MuiCircularProgress-root" />
      </Box>
    );
  }
  if (error) {
    return <ErrorPage title="Failed to fetch customers" message={error.message} />;
  }

  return (
    <Box className="orders-container">
      <TableContainer>
        <Table className="MuiTable-root">
          <TableHead className="MuiTableHead-root">
            <TableRow>
              <TableCell className="MuiTableCell-root">Customer Name</TableCell>
              <TableCell className="MuiTableCell-root">Customer Email</TableCell>
              <TableCell className="MuiTableCell-root" align="center">
                Number of Orders
              </TableCell>
              <TableCell className="MuiTableCell-root" align="center">
                Total Order Value
              </TableCell>
              <TableCell className="MuiTableCell-root" align="center">
                Last Order Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="MuiTableBody-root">
            {customers.map((customer, idx) => (
              <TableRow key={idx} className="MuiTableRow-root">
                <TableCell className="MuiTableCell-root">
                  {customer.customerName}
                </TableCell>
                <TableCell className="MuiTableCell-root">
                  {customer.customerEmail}
                </TableCell>
                <TableCell className="MuiTableCell-root" align="center">
                  {customer.numberOfOrders}
                </TableCell>
                <TableCell className="MuiTableCell-root" align="center">
                  ${customer.customerTotalOrderValue.toFixed(2)}
                </TableCell>
                <TableCell className="MuiTableCell-root" align="center">
                  {customer.numberOfOrders !== 0
                    ? new Date(customer.lastOrderDate).toLocaleDateString()
                    : "Order not Placed"}
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
