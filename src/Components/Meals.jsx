import React, { useState } from "react";
import useHttp from "../hooks/useHttp.jsx";
import ErrorPage from "./ErrorPage.jsx";
import MealItem from "./MealItem.jsx";
import AddMealModal from "./AddMealModal.jsx";
import { Button } from "@mui/material";
import { API_BASE_URL } from "./ServerRequests.jsx";

const requestConfig = {};

export default function Meals({ isAdmin, category }) {
  const {
    response: loadProducts,
    isLoading,
    error,
  } = useHttp(
    `${API_BASE_URL}/products/get?category=${category.toUpperCase()}`,
    requestConfig,
    []
  );

  const [showAddModal, setShowAddModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // To store product for editing

  const handleAddMealSuccess = () => {
    setShowAddModal(false);
    // Logic to refresh the product list
    window.location.reload(); // Reload the page to fetch the latest list
  };

  if (isLoading) {
    return <p className="center">Fetching {category} Products....</p>;
  }
  if (error) {
    return <ErrorPage title="failed to fetch meals" message={error.message} />;
  }

  const handleEditMeal = (product) => {
    setCurrentProduct(product);
    setShowAddModal(true); // Open modal for editing
  };

  return (
    <>
      {isAdmin && (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowAddModal(true)}
            sx={{ marginBottom: "20px" }}
          >
            Add New Meal
          </Button>
          <AddMealModal
            open={showAddModal}
            onClose={() => setShowAddModal(false)}
            onAddSuccess={handleAddMealSuccess}
            currentProduct={currentProduct}
          />
        </>
      )}
      <ul id="meals">
        {loadProducts.map((product) => (
          <MealItem
            isAdmin={isAdmin}
            key={product.id}
            product={product}
            onEdit={handleEditMeal} // Pass edit handler to MealItem
          />
        ))}
      </ul>
    </>
  );
}
