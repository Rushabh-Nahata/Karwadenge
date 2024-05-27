import axios from "axios";
import { cartsActions } from "./cartsSlice";
import store from "../store";

// Add to Cart
export const addItemsToCart = async (dispatch, id, quantity, activeProPrice) => {
  const { data } = await axios.get(
    `http://localhost:4000/api/v1/products/${id}`
  );
  console.log("this is data for ", activeProPrice)
  dispatch(
    cartsActions.addToCart({
      item: {
        product: data.product._id,
        name: data.product.name,
        price: activeProPrice,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    })
  );
  // console.log(store);
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().carts.cartItems)
  );
};

// REMOVE FROM CART
export const removeItemsFromCart = async (dispatch, id) => {
  dispatch(
    cartsActions.removeFromCart({
      id: id,
    })
  );

  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().carts.cartItems)
  );
};

// SAVE SHIPPING INFO
export const saveShippingInfo = async (dispatch, data) => {
  dispatch(
    cartsActions.saveShippingInfo({
      shippingInfo: data,
    })
  );

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
