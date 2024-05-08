import { useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";

const initialState = {
    cartItems:[],
}

const useCartScreen = () => {

    const [state,dispatch] = useReducer(defaultStateReducer,initialState);

    const {cartItems} = state;

    

    return cartItems;
};

export default useCartScreen;
