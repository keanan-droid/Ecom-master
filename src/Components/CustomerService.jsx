import React from 'react'
import "../Stylesheet/Components/CustomerService.scss";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const CustomerService = () => {
  return (
    <div className='customer_service'>
        <div className='middle_section'>
            <div className='left_bar'>
                <h1>FAQS</h1>
                <h1>HOW TO SHOP</h1>
                <h1>SHIPPING</h1>
                <h1>RETURNS AND REFUNDS</h1>
                <h1>CONDITIONS OF USE</h1>
                <h1>CONDITIONS OF SALE</h1>
                <h1>OPENING & MANAGING YOUR ACCOUNT</h1>
                <h1>CONTACT US</h1>
                <h1>LEGAL AREA</h1>
                <h1>COOKIE POLICY</h1>
                <h1>INFORMATION NOTICE ON PERSONAL DATA PROCESSING</h1>
            </div>
            <div className='right_bar'>
                <div>
                    <h1>Customer Service</h1>
                    <p>Here you will find answers to your questions about shopping at our online store, your order, payment options and more. Simply select from the categories below for your complete information.</p>
                </div>
                <h1>FAQS</h1>
                <p>Here is a list of the most frequently asked questions</p>
                <h1>HOW TO SHOP</h1>
                <p>Shopping at Dolce&Gabbana is easy</p>
                <h1>SHIPPING</h1>
                <p>Everything you need to know regarding shipping</p>
                <h1>RETURNS AND REFUNDS</h1>
                <p>How to return an item and receive a refund</p>
                <h1>CONDITIONS OF USE</h1>
                <p>Conditions of Use regulate the access and use of dolcegabbana.com</p>
                <h1>CONDITIONS OF SALE</h1>
                <p>The offer and the sale of products on dolcegabbana.com are determined by the Conditions of Sale</p>
                <h1>OPENING & MANAGING YOUR ACCOUNT</h1>
                <p>Make the most of your account</p>
                <h1>CONTACT US</h1>
                <p>If you have any questions or need help please contact us. We will be happy to assist you</p>
                <h1>LEGAL AREA</h1>
                <p>Please read our Privacy and Return Policy carefully</p>
                <h1>COOKIE POLICY</h1>
                <p>The use of cookies on dolcegabbana.com</p>
                <h1>INFORMATION NOTICE ON PERSONAL DATA PROCESSING</h1>
                <p>Information on the collection, use, disclosure or processing of your personal data.</p>
            </div>
        </div>
        <div className='bottom_section'>
            <div className='left_box'>
                <div className='chatIcon'>
                    <ChatBubbleOutlineIcon />
                </div>
                <div>
                    <h1>LIVE CHAT</h1>
                    <h2>CHAT NOW</h2>
                    <p>Services will be avaiable</p>
                    <p>from Monday to Friday</p>
                    <p>10:00-19:00 (GMT+1)</p>
                </div>
            </div>
            <div className='right_box'>
                <div className='mailIcon'>
                    <MailOutlineIcon />
                </div>
                <div>
                    <h1>CONTACT US</h1>
                    <h2>ONLINE CUSTOMER SERVICE</h2>
                    <p>Fill in the online form</p>
                    <p>Or send an e-mail to</p>
                    <a href="/">support@dolcegabbana.com</a>
                </div>
            </div>
        </div>
    </div>
  )
}
