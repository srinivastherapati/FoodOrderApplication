import { useContext, useEffect, useState } from "react";
import Buttons from "./UI/Buttons";
import CartContext from "./Store/CartContext";
import Review from "./Review";

export default function MealItem({ meal }) {
  const cartContext = useContext(CartContext);
  const [averageRating, setAverageRating] = useState(0);
  const [isReviewOpen, setIsReviewOpen] = useState(false); // Controls modal visibility

  // Fetch reviews for the meal and calculate the average rating
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`http://localhost:3000/reviews/${meal.id}`);
        const data = await response.json();
        if (data.length > 0) {
          const totalRating = data.reduce((acc, review) => acc + review.rating, 0);
          setAverageRating((totalRating / data.length).toFixed(1));
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, [meal.id]);

  function handleAddMeal() {
    cartContext.addItems(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-rating">Rating: {averageRating || "No reviews yet"}</p>
        </div>
        <p className="meal-item-actions">
          <Buttons onClick={handleAddMeal}>Add to Cart</Buttons>
          {/* <Buttons onClick={() => setIsReviewOpen(true)}>Review</Buttons> */}
        </p>
      </article>
      {/* Render the modal conditionally */}
      {isReviewOpen && (
        <Review
          mealId={meal.id}
          onClose={() => setIsReviewOpen(false)} // Close modal on close action
        />
      )}
    </li>
  );
}
