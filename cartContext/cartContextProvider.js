import { createContext, useReducer } from "react";
import { defaultStateReducer } from "../utils/CommonUtils";
import { prepareCartScreenData } from "../data/CartScreenData";

export const CartContext = createContext();

const initialState = {
  cartData: [],
  totalPrice: 0,
  totalProducts: 0,
};

const useCartContext = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const { cartData, totalPrice, totalProducts } = state;

  const loadCartData = () => {
    const data = prepareCartScreenData();
    const totalPrice = calculateTotalPrice(data);
    const totalProducts = calculateTotalProducts(data);
    dispatch({
      payload: {
        cartData: prepareCartScreenData(),
        totalPrice: totalPrice,
        totalProducts: totalProducts,
      },
    });
  };

  const addProduct = (newProduct) => {
    cartData.push(newProduct);
  };

  const calculateTotalProducts = (newCartData) => {
    let sum = 0;

    newCartData.forEach((data) => {
      if (data.inStock) {
        sum = sum + data.quantity;
      }
    });

    return sum;
  };

  const calculateTotalPrice = (newCartData) => {
    if (newCartData) {
      let sum = 0;

      newCartData.forEach((data) => {
        if (data.inStock) {
          sum = sum + data.discountedPrice * data.quantity;
        }
      });

      return sum;
    }
  };

  const increaseProductQuantity = (productId) => {
    cartData.forEach((data) => {
      if (data.id === productId) {
        data.quantity++;
      }
    });

    const newTotalPrice = calculateTotalPrice(cartData);
    const newTotalProducts = calculateTotalProducts(cartData);

    dispatch({
      payload: {
        cartData: cartData,
        totalPrice: newTotalPrice,
        totalProducts: newTotalProducts,
      },
    });
  };

  const decreaseProductQuantity = (productId) => {
    cartData.forEach((data) => {
      if (data.id === productId && data.quantity > 0) {
        data.quantity--;
      }
    });

    const newTotalPrice = calculateTotalPrice(cartData);
    const newTotalProducts = calculateTotalProducts(cartData);

    dispatch({
      payload: {
        cartData: cartData,
        totalPrice: newTotalPrice,
        totalProducts: newTotalProducts,
      },
    });
  };

  const removeProductFromCart = (productId) => {
    let index = 0;
    cartData.forEach((data, i) => {
      if (data.id === productId) {
        index = i;
      }
    });

    const newCartData = [
      ...cartData.slice(0, index),
      ...cartData.slice(index + 1),
    ];

    const newTotalPrice = calculateTotalPrice(newCartData);
    const newTotalProducts = calculateTotalProducts(newCartData);

    dispatch({
      payload: {
        cartData: newCartData,
        totalPrice: newTotalPrice,
        totalProducts: newTotalProducts,
      },
    });
  };

  return {
    cartData,
    totalPrice,
    totalProducts,
    addProduct,
    calculateTotalProducts,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
    loadCartData,
    calculateTotalPrice,
  };
};

const CartContextProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ useCartContext: useCartContext }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
