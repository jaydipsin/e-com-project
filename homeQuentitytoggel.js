export const homeQuentitytoggle = (event, id , stock)=>{
    const currentproduct = document.querySelector(`#card-${id}`);
    // console.log(currentproduct);

    const quantitycheker = currentproduct.querySelector(".quantity");
    console.log(quantitycheker);

    let quantity = parseInt(quantitycheker.getAttribute("data-quantity")) || 1 ;
    // let quantity = quantitycheker || 1 ;

    if (event.target.className === "cartincriment") {
        if (quantity < stock) {
            quantity+= 1;
        }
        else if(quantity === stock){
            quantity === stock
        }
    }
    if (event.target.className === "cartdecriment") {
        if (quantity > 1) {
            quantity -=1
        }
    }
    quantitycheker.innerText = quantity;
    quantitycheker.setAttribute("data-quantity",quantity)
}

