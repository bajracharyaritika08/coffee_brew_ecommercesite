import React from "react";
import { FaStar,FaRegStar,FaStarHalfAlt} from "react-icons/fa";
import '../styles/products/Products.css'
export const productRating =(rating)=>{
    switch(rating){
        case '1':
            return(
                <div >
                    <FaStar className='rating_icons'/>
                    <FaRegStar className='rating_icons'/>
                    <FaRegStar className='rating_icons'/>
                    <FaRegStar className='rating_icons'/>
                    <FaRegStar className='rating_icons'/>
                </div>
            )
        case '2':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </div>
            )
        case '3':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </div>
            )
        case '4':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                </div>
            )
        case '4.5':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfAlt/>
                </div>
            )
        case '5':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            )
    }
}
export const pricing =(price)=>{
    switch(price){
        case '180.00':
            return(
                <p className='price'>Rs 180.00  <s className="strike">Rs. 200.00</s> </p>
            )
        case '280.00':
            return(
                <p className='price'>Rs. 280.00</p>
            )
        case '360.00':
            return(
                <p className='price'>Rs. 360.00</p>
            )
    }
}
