import { useContext } from "react";
import Buttons from "./UI/Buttons";
import CartContext from "./Store/CartContext";

export default function MealItem({meal}){

    const cartContxt=useContext(CartContext)

    function handleAddMeal(){
        cartContxt.addItems(meal);
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
                    <Buttons onClick={handleAddMeal}>Add to Cart</Buttons>
                </p>
            </article>
        </li>
    )
}