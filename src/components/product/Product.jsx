import React from 'react'
import ooty_px1 from '../../images/ooty_px1.jpg'
import ooty_px2 from '../../images/ooty_px2.jpg'
import p5 from '../../images/p5.jpg'
import p6 from '../../images/p6.jpg'
import productOne from '../../images/productOne.jpg'
import ootytea from '../../images/ootytea.jpg'
import product_greentea from '../../images/product_greentea.jpg'

export const Product = () => {
    const productHeader = [{
            subHeading: "NEW ARRIVAL",
            heading: "Celyon Tea Assortment",
            coverImage: productOne,
        },
        {
            subHeading: "NEW ARRIVAL",
            heading: "Chai Tea Assortment",
            coverImage: ootytea,
        },
        {
            subHeading: "NEW ARRIVAL",
            heading: "Twinnings Tea Assortment",
            coverImage: product_greentea,
        },
    ]
    const productData = [{
            id: 1,
            image: ooty_px1,
            traders: "Kashmire Traders",
            title: "Classic Black Tea",
            rating: "5",
            price: "Rs. 360.00"
        },
        {

            id: 2,
            image: ooty_px2,
            traders: "Tea Traders",
            title: "Green Tea",
            rating: "5",
            price: "Rs. 180.00"
        },
        {
            id: 3,
            image: p5,
            traders: "Kashmire Traders",
            title: "Oolong Tea",
            rating: "5",
            price: "Rs. 390.00"
        },
        {
            id: 4,
            image: p6,
            traders: "Tea Traders",
            title: "Royal Green Tea",
            rating: "5",
            price: "Rs. 350.00"
        },
        {
            id: 5,
            image: ooty_px1,
            traders: "Premium Traders",
            title: "Premium Tea",
            rating: "5",
            price: "Rs. 280.00"
        },
        {
            id: 6,
            image: ooty_px1,
            traders: "Tea Traders",
            title: "Black Tea",
            rating: "5",
            price: "Rs. 180.00"
        },
    ]
    return ( 
        <div > {
            productData.slice(1, 3).map((items) => {
                return ( 
                    <div>
                            <img src = { items.image } alt = "" / >
                    </div>
                )
            })
        } <div className = "product" >
                <img src = "" alt = "" / >
        </div> </div>
    )
}