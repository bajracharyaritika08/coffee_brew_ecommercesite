import React from 'react'
import "../styles/commonbtn/AddToCartBtn.css"
export const AddToCartBtn = (props) => {
    const {title, icon} = props
  return (
    <div>
        <button className='addtocart_btn'>{icon} {title} </button>
    </div>
  )
}
