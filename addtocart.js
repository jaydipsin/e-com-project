import { getCartProductFromLS } from "./getcartproductls";

export const addToCart = (event,id,stock)=>{
    let arrLocalStorage = getCartProductFromLS();

    const currentproduct = document.querySelector(`#card-${id}`);
    let quantity = currentproduct.querySelector(".quantity").innerText;
    let price = currentproduct .querySelector(".product-price").innerText;
    console.log(quantity,price,arrLocalStorage);

}