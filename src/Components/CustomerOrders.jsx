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
    orderNumber: "001",
    totalPrice: "$45.00",
    items: [
      { name: "Pizza", quantity: 1, price: "$20.00" },
      { name: "Burger", quantity: 2, price: "$25.00" },
    ],
  },
  {
    orderNumber: "002",
    totalPrice: "$60.00",
    items: [
      { name: "Pasta", quantity: 3, price: "$30.00" },
      { name: "Salad", quantity: 2, price: "$30.00" },
    ],
  },
  {
    orderNumber: "003",
    totalPrice: "$35.00",
    items: [
      { name: "Sushi", quantity: 2, price: "$20.00" },
      { name: "Soup", quantity: 1, price: "$15.00" },
    ],
  },
];

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "rgb(41 37 25)",
    minHeight: "100vh",
    color: "#000",
    width: "700px",
  },
  orderBox: {
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    marginBottom: "20px",
  },
  orderHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
};

const CustomerOrders = () => {
  return (
    <Box style={styles.container}>
      {orders.map((order, index) => (
        <Box key={index} style={styles.orderBox}>
          <Box style={styles.orderHeader}>
            <Typography variant="h6">Order #{order.orderNumber}</Typography>
            <Typography variant="h6">{order.totalPrice}</Typography>
          </Box>
          <TableContainer component={Paper} style={{ boxShadow: "none" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      backgroundColor: "#f4f4f4",
                      fontWeight: "bold",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      backgroundColor: "#f4f4f4",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      backgroundColor: "#f4f4f4",
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      backgroundColor: "#f4f4f4",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Rating
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.items.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell
                      sx={{
                        fontSize: "16px",
                        backgroundColor: "#f4f4f4",
                      }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px",
                        backgroundColor: "#f4f4f4",
                        textAlign: "center",
                      }}
                    >
                      {item.quantity}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px",
                        backgroundColor: "#f4f4f4",
                        textAlign: "right",
                      }}
                    >
                      {item.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px",
                        backgroundColor: "#f4f4f4",
                        textAlign: "center",
                      }}
                    >
                      {/* Dropdown for rating */}
                      <select defaultValue=""
                        style={{
                          width: "75px", 
                          //height: "40px",
                          fontSize: "14px", 
                          borderRadius: "5px", 
                          border: "1px solid #ccc", 
                          padding: "5px",
                          textAlign: "center", 
                        }}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
};

export default CustomerOrders;
