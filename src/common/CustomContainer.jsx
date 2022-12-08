import React from 'react'
import '../styles/customcontainer/CustomContainer.css'
export const CustomContainer = (children) => {

  return (
    <div className='customcontainer'>
        {children}
    </div>
  )
}
