import React from 'react'
import { NewsLetterInput } from '../../common/NewsLetterInput'
import "../../styles/footer/Footer.css"
import { FaTwitter, FaFacebookF,FaPinterest,FaInstagram,FaYoutube} from "react-icons/fa";
import visacard from '../../images/visacard.png'
import discover_4 from '../../images/discover_4.png'
import mastercard from '../../images/mastercard.png'
import amex_card from '../../images/amex_card.png'
import paypal_3 from '../../images/paypal_3.png'
export const Footer = () => {
  return (
    <div className='main_footer_wrapper'>
        <div className="footer_container">
            <div className="privacy_section">
                <h3 className="footer_heading">
                    Privacy
                </h3>
                <div className="footer_elements">
                    <ul>
                        <li>Search</li>
                        <li>About</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li>wishList</li>
                    </ul>
                </div>
            </div>
            <div className="information_section">
                <div className="privacy_section">
                    <h3 className="footer_heading">
                    Information
                    </h3>
                    <div className="footer_elements">
                        <ul>
                            <li>Shipping</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                            <li>Policy</li>
                            <li>WishList</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="feature_section">
                <div className="privacy_section">
                    <h3 className="footer_heading">
                    Links
                    </h3>
                    <div className="footer_elements">
                        <ul>
                            <li>Features</li>
                            <li>Chat</li>
                            <li>Mail Support</li>
                            <li>24 X 7 Delivery</li>
                            <li>Query</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                    <div className="privacy_section newsletter_wrapper">
                            <div className="heading_wrapper">
                                <h3 className="footer_heading">
                                Newsletter
                                </h3>
                            </div>
                    <div className="footer_elements">
                        <ul>
                            <li>Sign up to get exclusive offers & more. <br/>You can unsubscribe at any time</li>
                            <li><NewsLetterInput/></li>
                            <div className="icon_wrapper">
                            <FaTwitter  className='icons_socialmedia'/>
                            <FaFacebookF className='icons_socialmedia'/>
                            <FaPinterest className='icons_socialmedia'/>
                            <FaInstagram className='icons_socialmedia'/>
                            <FaYoutube className='icons_socialmedia'/>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <footer>
        <div className="footer">
            <div className="footer_copyright_wrapper">
                <p className='footer_copyright'>© 2022 ooty-theme | Powered by Shopify</p>
            </div>
            <div className="payment_wrapper">
                <img src={visacard} alt="visa" className='paymenticon'/>
                <img src={discover_4} alt="discover" className='paymenticon'/>
                <img src={mastercard} alt="mastercard_4" className='paymenticon'/>
                <img src={amex_card} alt="amek" className='paymenticon'/>
                <img src={paypal_3} alt="paypal" className='paymenticon'/>
                <img src={discover_4} alt="discover" className='paymenticon'/>
            </div>
        </div>
        </footer>
    </div>
  )
}
