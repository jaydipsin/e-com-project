import './style.css'

import products from "./api/products.json";
import {showProductOnPage} from"./homeProduct";

console.log(products);
// 
showProductOnPage(products);
