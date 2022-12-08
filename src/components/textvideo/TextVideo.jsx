import React from 'react'
import '../../styles/textvideo/TextVideo.css'
import { FaPlay } from "react-icons/fa";
export const TextVideo = () => {
    const textVideoData =[
        {
            title:"Coffee is a Drink of Health",
            paragraph:"If you find yourself wondering this from time to time, you’re in luck. We did a heat retention test for some of the most commonly-used cups and mugs to see which is the best at keeping drinks warmer, for longer.",
    }
]
  return (
    <>
    {
        textVideoData.map((items)=>{
            return(
                <>
        <div className="text_video_container">
            <div className="heading_title">
                <h4>{items.title}</h4>
            </div>
            <div className="divider"></div>
            <div className="paragraph">
                <p className='textvideo_para'>{items.paragraph}</p>
            </div>
            <div className="video_section">
                <h5 className="more_about_us">More about us</h5>
                <div className="divider"></div>
            </div>
        </div>
                </>
            )
        })
    }
    </>
  )
}
