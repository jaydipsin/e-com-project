import { addToCart } from "./addtocart";
import { homeQuentitytoggle } from "./homeQuentitytoggel";

const productContainer = document.getElementById("section-product-cards");
const productTemp = document.getElementById("section-product-cards-1");

export const showProductOnPage = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((currele) => {
    const { id, name, category, price, stock, description, image } = currele;

    const productClone = document.importNode(productTemp.content, true);
    productClone.querySelector(".product-name").innerText = name;
    console.log(image);
    productClone.querySelector("#cardval").setAttribute("id", `card-${id}`);
    productClone.querySelector(".product-img").src = image;
    productClone.querySelector(".category-of-product").innerText = category;
    productClone.querySelector(".product-description").innerText = description;
    productClone.querySelector(".product-price").innerText = `₹${price}`;
    productClone.querySelector(".product-actual-price").innerText = `₹${
      price * 2
    }`;
    // console.log(price);
    productClone.querySelector(".product-stock").innerText = stock;

    productClone
      .querySelector(".stock-element")
      .addEventListener("click", (event) => {
        homeQuentitytoggle(event, id, stock);
      });
    productClone
      .querySelector(".product-cart")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });
    productContainer.append(productClone);
  });
};
