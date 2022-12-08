import React from 'react'
import { FaShoppingCart} from "react-icons/fa";
import { pricing, productRating } from '../utils/Main';

import '../styles/products/Products.css'
import { AddToCartBtn } from '../common/AddToCartBtn'
export const ProductCard = (props) => {
    const{items}=props
    console.log("items prpop", items);
    return (
        <div>              
            <div className="product_cart_container" >
                <div className="imagecontainer">
                    <img src={items.image} alt="" className="product_image" />
                    <p className="product_description">{items.traders}</p>
                    <h2 className="product_title">{items.title}</h2>
                    <div className="product_rating_icons">
                        {
                        productRating(items.rating)
                        }
                    </div>
                    <p className='price'>{
                        pricing(items.price)
                    }</p>
                    <AddToCartBtn icon=<FaShoppingCart/> title="Add to cart" />
                </div>
            </div>
        </div> 
    )
}