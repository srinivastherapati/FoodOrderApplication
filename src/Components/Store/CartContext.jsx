import { useReducer } from "react";
import { createContext } from "react"

const CartContext= createContext({
    items:[],
    addItems:(item)=>{},
    removeIteam:(id)=>{}
})

function cartReducer(state,action){
    if(action.type==='ADD_ITEM'){
        const existingItemIndex=state.items.findIndex((item)=>item.id===action.item.id);
        const updatedItems=[...state.items];
        if(existingItemIndex>-1){
            const existingItem=state.items[existingItemIndex];
            const updatedItem={
                ...existingItem,
                quantity: existingItem.quantity+1
            }
            updatedItems[existingItemIndex]=updatedItem;
        }
        else{
            updatedItems.push({...action.item,quantity:1});
        }
        return {...state, items:updatedItems}
    }


    if(action.type==='REMOVE_ITEM'){
        const existingItemIndex=state.items.findIndex((item)=>item.id===action.id);
        const existingItem=state.items[existingItemIndex];
        const updatedItems=[...state.items];
        if(existingItem.quantity===1){
             updatedItems.splice(existingItemIndex,1);
        }
        else{
            const updatedItem={
                ...updatedItems,
                quantity:existingItem.quantity-1
            }
            updatedItems[existingItemIndex]=updatedItem;
        }
        return {...state, items:updatedItems}
    }
}

export function CartContextProvider({children}){
    const [cart,dispatcherCartAction]=useReducer(cartReducer,{items:[]});

    function addItems(item){
        dispatcherCartAction({type:'ADD_ITEM',item:item})
    }
    function removeItem(id){
        dispatcherCartAction({type:'REMOVE_ITEM',id});
    }

    const createContext={
        items:cart.items,
        addItems,
        removeItem
    }
    console.log(createContext);
    return <CartContext.Provider value={createContext}>{children}</CartContext.Provider>
}
export default CartContext;