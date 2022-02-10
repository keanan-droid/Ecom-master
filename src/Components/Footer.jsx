import React from 'react';
import "../Stylesheet/Components/Footer.scss";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RoomIcon from '@mui/icons-material/Room';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
  <div className='footer'>
      <div className='upper_footer'>
        <div className='firstDiv'>
            <p>Contact Us</p>
            <p>Mon-Fri 10-19 (GMT+1)</p>
            <div>
                <AlternateEmailIcon className='emailIcon' />
                <p>Online Form</p>
            </div>
            <div>
                <ChatBubbleOutlineIcon className='chatIcon' />
                <p>Chat Now</p>
            </div>
            <div>
                <RoomIcon className='roomIcon' />
                <p>Bontique</p>
            </div>
        </div>
        <div className='secondDiv'>
            <p>Customer Service</p>
            <p>Shipping</p>
            <p>Return and Refunds</p>
            <p>Track your order</p>
            <p>Legal area</p>
            <p>FAQS</p>
            <p>Managing Your Account</p>
            <p>How to shop</p>
        </div>
        <div className='thirdDiv'>
            <p>World</p>
            <p>Corporate</p>
            <p>Careers Opportunities</p>
            <p>Martini Bar</p>
        </div>
        <div className='fourthDiv'>
            <p>Create your personal account</p>
        </div>
      </div>
      <div className='middle_footer'>
        <div className='iconDiv'>
            <FacebookOutlinedIcon className='facebookIcon'/>
            <TwitterIcon className='twitterIcon'/>
            <InstagramIcon className='instagramIcon'/>
            <YouTubeIcon className='youtubeIcon'/>
        </div>
        <p>Language & Country:<span>English/South Africa</span></p>
      </div>
      <div className='lower_footer'>
          <p><span>Site</span> – managed by The Level Group S.r.l – Copyright © Dolce & Gabbana S.r.l. 2022 – All rights reserved – any reproduction of the contents is strictly forbidden.</p>
      </div>
  </div>
    );
};

