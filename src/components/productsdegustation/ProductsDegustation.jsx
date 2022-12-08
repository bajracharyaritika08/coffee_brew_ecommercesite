import React from 'react'
import blog_201 from "../../images/blog_201.jpg"
import blog_202 from "../../images/blog_202.jpg"
import blog_203 from "../../images/blog_203.jpg"
import "../../styles/productsdegustation/ProductDegustation.css"
import { FaCalendarAlt } from "react-icons/fa";
import { AddToCartBtn } from '../../common/AddToCartBtn'

// import { useContext,useEffect, useState } from 'react'
export const ProductsDegustation = () => {
    const ProductDegustation =[
        {
            image:blog_201,
            date: "August 9, 2020",
            title :"Finest tea selection",
            description :"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
        },
        {
            image:blog_202,
            date: "August 9, 2020",
            title :"Tea powders & bags",
            description :"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
        },
        {
            image:blog_203,
            date: "August 9, 2020",
            title :"Tea health benefits",
            description :"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
        },
    ]
  return (
    <div className='product_degustation_container'>
        <div className="heading_container">
            <h2 className="heading_productsDeg" >Tea sorts presentation and products degustation</h2>
        </div>
        <div className="degustation_container">
        {
            ProductDegustation.map((elements)=>{
                return(
                    <div className='degustation_container_second'>
                        <img src={elements.image} alt="image" className='degustation_image'/>
                        <p className="date"><FaCalendarAlt className='calendar_icons'/> {elements.date}</p>
                        <p className="title">{elements.title}</p>
                        <p className="description">{elements.description.length>20 ? elements.description.slice(0,150) + "..." : elements.description}</p>
                        <AddToCartBtn title="Read More"/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
