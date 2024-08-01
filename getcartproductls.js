export const getCartProductFromLS = ()=>{
    let cartProduct = localStorage.getItem("cartProductLS");
    if(!cartProduct){
        return [];
    }
    cartProduct = JSON.parse(cartProduct);
    return cartProduct
}