import useHttp from "../hooks/useHttp.jsx";
import ErrorPage from "./ErrorPage.jsx";
import MealItem from "./MealItem.jsx";
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

  if (isLoading) {
    return <p className="center">Fetching {category} Products....</p>;
  }
  if (error) {
    return <ErrorPage title="failed to fetch meals" message={error.message} />;
  }
  return (
    <ul id="meals">
      {" "}
      {loadProducts.map((product) => (
        <MealItem isAdmin={isAdmin} key={product.id} product={product} />
      ))}
    </ul>
  );
}
