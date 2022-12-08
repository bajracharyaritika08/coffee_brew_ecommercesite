import React from 'react'
import { AddToCartBtn } from './AddToCartBtn'
import "../styles/newsletterinput/NewsLetterInput.css"
export const NewsLetterInput = () => {
  return (
    <div className='news_letter_container'>
    <div className="input_form">
        <form action="">
            <input type="Text" placeholder='Your email address' className='news_input'/>
        </form>   
    </div>
    <div className="button">
        <AddToCartBtn title="Sign Up"/>
    </div>
    </div>
  )
}
