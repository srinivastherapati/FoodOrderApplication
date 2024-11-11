import useHttp from "../hooks/useHttp.jsx";
import ErrorPage from "./ErrorPage.jsx";
import MealItem from "./MealItem.jsx";

const requestConfig={};

export default function Meals(){

    const{
        response:loadMeals,
        isLoading,
        error

    }=useHttp("http://localhost:3000/meals",requestConfig,[])

    if(isLoading){
        return <p className="center">fetching data....</p>
    }
    if(error){
       return <ErrorPage title="failed to fetch meals" message={error.message} />
    }
    return(
        <ul id="meals"> {loadMeals.map(meal=> <MealItem key={meal.id}meal={meal}/>)}</ul>
    )
}