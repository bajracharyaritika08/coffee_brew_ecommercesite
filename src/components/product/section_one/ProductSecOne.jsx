import React from 'react'
import ooty_px1 from '../../../images/ooty_px1.jpg'
import ooty_px2 from '../../../images/ooty_px2.jpg'
import productOne from '../../../images/productOne.jpg'
import ootytea from '../../../images/ootytea.jpg'
import product_greentea from '../../../images/product_greentea.jpg'
import p5 from '../../../images/p5.jpg'
import p6 from '../../../images/p6.jpg'
import ooty_02 from '../../../images/ooty_02.jpg'
import ooty_03 from '../../../images/ooty_03.jpg'
import '../../../styles/products/Products.css'
import { ProductCard } from '../../../common/ProductCard'
import { useState } from 'react'
import { productService } from '../../../api/productService'
import { useEffect } from 'react'

export const ProductSecOne = (props) => {
    const details=[{
        subTitle: "NEW ARRIVAL",
        heading:{
            headingOne:"Ceylon Tea Assortment",
            headingTwo:"Chai Tea Assortment",
            headingThree:"Twinings Tea Assortment",
        },
        coverImage: {
            coverImageOne:productOne,
            coverImageTwo:ootytea,
            coverImageThree:product_greentea,
        },
}

]
const productHeader = [
    {
        id: 1,
        image: ooty_px1,
        traders: "Kashmire Traders",
        title: "Classic Black Tea",
        rating: "5",
        price: "360.00",
        category:"sectionA",
    },
    {
        id: 2,
        image: ooty_px2,
        traders: "Tea Traders",
        title: "Green Tea",
        rating: "4.5",
        price: "180.00",
        category:"sectionA",
        },
    {
        id: 3,
        image: p5,
        traders: "Kashmire Traders",
        title: "Oolong Tea",
        rating: "4",
        price: "360.00",
        category:"sectionB",
    },
    {
        id: 4,
        image: p6,
        traders: "Tea Traders",
        title: "Royal Green Tea",
        rating: "5",
        price: "180.00",
        category:"sectionB",
        },
    {
        id: 5,
        image: ooty_02,
        traders: "Premium Traders",
        title: "Premium Tea",
        rating: "5",
        price: "280.00",
        category:"sectionC",
    },
    {
        id: 6,
        image: ooty_03,
        traders: "Tea Traders",
        title: "Black Tea",
        rating: "5",
        price: "180.00",
        category:"sectionC",
        },
]
const[loading, setLoading] = useState(true)
const[data, setData] = useState([])
const[errData, setErrData] = useState("")
const fetchProductsData =()=>{
    productService()
    .then((resolvedData)=>{
        setLoading(false);
        setData(productHeader)
    })
    .catch((error)=>{
        setLoading(false);
        setErrData(productHeader);
        setData(productHeader);
    })
}
useEffect(()=>{fetchProductsData()},[])
  return (
    <div className='main_product_container'>
    {loading ? <h2>Loading...</h2>:
     <div className="product_container">
    {
        details.map((items)=>{
            return(
        <div className="product_title">
                <p className='subtitle'>{items.subTitle}</p>
                <h2 className='product_header'>{items.heading.headingOne}</h2>
                <div className="two_row_product">
            {
                data.filter((items)=>items.category === "sectionA").map((items)=>{
                return(
                    <ProductCard items={items} />
                )
                })
            }
                </div>
        </div>
            )
        })
    }
    {
        details.map((items)=>{
            return(
        <div className="imagecontainer_r">
            <img src={items.coverImage.coverImageOne} alt="Cover Image" className='coverImage' />
        </div>
            )
        })
    }
    </div>
    }

    {/* Here starts the second section  */}
    <div className="product_container">
    {
        details.map((items)=>{
            return(
        <div className="imagecontainer_r">
            <img src={items.coverImage.coverImageTwo} alt="Cover Image" className='coverImage' />
        </div>
            )
        })
    }
    {
        details.map((items)=>{
            return(
        <div className="product_title">
                <p className='subtitle'>{items.subTitle}</p>
                <h2 className='product_header'>{items.heading.headingThree}</h2>
                <div className="two_row_product">
            {
                data.filter((items)=>items.category === "sectionB").map((items)=>{
                return(
                    <ProductCard items={items} />
                )
                })
            }
                </div>
        </div>
            )
        })
    }
    
    </div>
    {/* Here starts the third section */}
    <div className="product_container">
    {
        details.map((items)=>{
            return(
        <div className="product_title">
                <p className='subtitle'>{items.subTitle}</p>
                <h2 className='product_header'>{items.heading.headingThree}</h2>
                <div className="two_row_product">
            {
                data.filter((items)=>items.category === "sectionC").map((items)=>{
                return(
                    <ProductCard items={items} />
                )
                })
            }
                </div>
        </div>
            )
        })
    }
    {
        details.map((items)=>{
            return(
        <div className="imagecontainer_r">
            <img src={items.coverImage.coverImageThree} alt="Cover Image" className='coverImage' />
        </div>
            )
        })
    }
    </div>
</div>

  )
}


