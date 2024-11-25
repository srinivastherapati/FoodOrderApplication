import { useContext, useState } from "react";
import Buttons from "./UI/Buttons";
import CartContext from "./Store/CartContext";

import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

export default function MealItem({ meal, isAdmin }) {
  const cartContxt = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleAddMeal() {
    cartContxt.addItems({ ...meal, quantity });
  }

  function handleEdit() {
    console.log("Edit meal:", meal);
    // Logic for editing the meal can go here (e.g., opening a modal for editing)
  }

  function handleDelete() {
    console.log("Delete meal:", meal);
    // Logic for deleting the meal
  }

  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decrementQuantity() {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          {!isAdmin && <Buttons onClick={handleAddMeal}>Add to Cart</Buttons>}
          {isAdmin && (
            <div className="admin-actions">
              <EditIcon
                sx={{ color: "#ffc404" }}
                onClick={handleEdit}
                aria-label="Edit"
              />
              <div className="quantity-controls">
                <RemoveIcon
                  sx={{ color: "#ffc404" }}
                  onClick={decrementQuantity}
                  aria-label="Decrease Quantity"
                />
                <p>{quantity}</p>
                <AddIcon
                  sx={{ color: "#ffc404" }}
                  onClick={incrementQuantity}
                  aria-label="Increase Quantity"
                />
              </div>
              <ClearIcon sx={{ color: "#ffc404" }} onClick={handleDelete} />
            </div>
          )}
        </p>
      </article>
    </li>
  );
}
