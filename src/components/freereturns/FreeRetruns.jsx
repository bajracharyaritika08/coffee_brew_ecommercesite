import React from 'react'
import '../../styles/freereturns/FreeReturns.css'
import eye_medium_1_180x from '../../images/eye_medium_1_180x.png'
import happy_medium_1_180x from '../../images/happy_medium_1_180x.png'
import healty_heart_medium_1_180x from '../../images/healty_heart_medium_1_180x.png'
import weight_loss_medium_1_180x from '../../images/weight_loss_medium_1_180x.png'
export const FreeRetruns = () => {
  
  const freeReturnSection =[
    {
        id:1,
        image:eye_medium_1_180x,
        title:"Improve Eye Sights",
        description:"Morbi in risus in nisi eleifend convallis. Etiam pretium varius quam",
    },
    {
        id:2,
        image:weight_loss_medium_1_180x,
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
        image:happy_medium_1_180x,
        title:"Makes you Happy",
        description:"Cras sagittis sapien tellus, lacinia nunc suscipit vitae. Integer eget lectus",
    },
]
  return (
    <div className='freereturn_main_container'>

        <div className="freereturns_heading_container">
            <h3 className="trail_heading">01 - Year Trial, Free Returns</h3>
        </div>
                <div className="freetrial_container">
        {
          freeReturnSection.map((items)=>{
            return(
            
                    <div className="freetrail_content_container">
                        <img className='trial_icons' src={items.image} alt="ICONS" />
                        <h2 className='trial_title'>{items.title}</h2>
                        <p className='trial_p'>{items.description}</p>
                    </div>
             
            )
          })
        }
                </div>
    </div>
  )
}
