import React from 'react'
import '../../styles/feature/Feature.css'
import icon_addtocart from '../../images/icon_addtocart.png'
import icon_delivery from '../../images/icon_delivery.png'
import icon_flower from '../../images/icon_flower.png'
import icon_payment from '../../images/icon_payment.png'
import { CustomContainer } from '../../common/CustomContainer'
export const Feature = () => {
  const featureData =[
    {
      id:1,
      image: icon_addtocart,
      heading:"Order Online",
      title:"Order bouquet via mobile",
    },
    {
      id:2,
      image : icon_delivery,
      heading:"Free Shipping",
      title:"For all orders from $120",
    },
    {
      id:3,
      image:icon_flower,
      heading:"More Freshness",
      title:"Bouquet are fresh & blooms",
    },
    {
      id:4,
      image:icon_payment,
      heading:"Safe Payment",
      title:"Protect online payment",
    },
]
  return (
    
        <div className="feature_section_wrapper">
          {
            featureData.map((items)=>{
              return(
                <>
                <div className="orderonline_section">
                      <div className="orderonline_section_image">
                        <img src={items.image} alt="Online shopping cart"  className='_icon_image'/>
                      </div>
                      <div className="orderonline_section_description">
                        <h5>{items.heading}</h5>
                        <p>{items.title}</p>
                      </div>
                  </div>
                </>
              )
            })
          }
                    </div>
   
  )
}
