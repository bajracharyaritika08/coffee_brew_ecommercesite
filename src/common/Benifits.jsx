import React from 'react'
import icon_addtocart from '../images/icon_addtocart'
import icon_delivery from '../images/icon_delivery.png'
import icon_flower from '../images/icon_flower.png'
import icon_payment from '../images/icon_payment.png'
import "../styles/feature/Features.css"
export const Benifits = () => {
    const featureSection_first =[
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
    const freeReturnSection =[
        {
            id:1,
            image:eye_medium_1_180x,
            title:"Improve Eye Sights",
            description:"Morbi in risus in nisi eleifend convallis. Etiam pretium varius quam",
        },
        {
            id:2,
            image:happy_medium_1_180x,
            title:"Weight Loss",
            description:"Pellentesque euismod vestibulum sollicitudin. Nunc consequat.",
        },
        {
            id:3,
            image:healty_heart_medium_1_180x,
            title:"Heart Health",
            description:"Sed a suscipit lacus. Duis a blandit nequement maecenas fermentum.",
        },
        {
            id:4,
            image:weight_loss_medium_1_180x,
            title:"Makes you Happy",
            description:"Cras sagittis sapien tellus, lacinia nunc suscipit vitae. Integer eget lectus",
        },
    ]
  return (
    <div>
        
    </div>
  )
}
