import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import useHttp from "../hooks/useHttp";
import { API_BASE_URL } from "./ServerRequests";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddMealModal({
  open,
  onClose,
  onAddSuccess,
  currentProduct,
  isAdd,
}) {
  const [name, setName] = useState(currentProduct.name);
  const [imageUrl, setImageUrl] = useState(currentProduct.imageUrl);
  const [description, setDescription] = useState(currentProduct.description);
  const [stock, setstock] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { sendRequest } = useHttp();

  // If currentProduct is provided (for edit), prefill form fields
  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name);
      setImageUrl(currentProduct.imageUrl);
      setDescription(currentProduct.description);
      setstock(currentProduct.stock || 1);
    }
  }, [currentProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mealData = { name, imageUrl, description, stock };

    try {
      setIsLoading(true);
      setError(null);

      if (!isAdd) {
        // Edit meal API call
        await sendRequest(
          `${API_BASE_URL}/products/update/${currentProduct.id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mealData),
          }
        );
        alert("Meal updated successfully!");
      } else {
        // Add meal API call
        await sendRequest(`${API_BASE_URL}/products/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mealData),
        });
        alert("Meal added successfully!");
      }
      onAddSuccess(); // Trigger the callback to refresh the list
      onClose(); // Close the modal
    } catch (err) {
      setError(err.message);
      alert("Failed to submit meal: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="add-meal-modal-title"
      aria-describedby="add-meal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="add-meal-modal-title" variant="h6" component="h2">
          {!isAdd ? "Edit Meal" : "Add New Meal"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Image URL"
            fullWidth
            margin="normal"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            label="Stock"
            fullWidth
            margin="normal"
            type="number"
            value={stock}
            onChange={(e) => setstock(Math.max(1, e.target.value))}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading}
            sx={{ marginTop: "20px" }}
            onClick={() => handleProductRequest()}
          >
            {isLoading ? "Processing..." : !isAdd ? "Update Meal" : "Add Meal"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
