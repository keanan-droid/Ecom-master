import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "../Stylesheet/Components/Gifts.scss";

export const Gifts = ({ isGiftsMenuOpen, setIsGiftsMenuOpen }) => {

  const toggleMainBar = () => {
    setIsGiftsMenuOpen(!isGiftsMenuOpen);
}

  return (
    <div className='gifts'>
       <div className='main'>
            <div className='firstDiv'>
                <p>CLOTHING</p>
                <p>Dresses</p>
                <p>Coats and Jackets</p>
                <p>Blazers</p>
                <p>Sweaters and Cardgans</p>
                <p>Shirts and Tops</p>
                <p>T-Shirt and Swearshirts</p>
                <p>Skirts</p>
                <p>Trousers and Shorts</p>
                <p>Denim</p>
                <p>Loungewear</p>
                <p>Beachwear</p>
                <p>Underwear</p>
            </div>
            <div className='secondDiv'>
                <p>BAGS</p>
                <p>Sicily</p>
                <p>Devotion</p>
                <p>DG Girls</p>
                <p>3.5</p>
                <p>Handbags</p>
                <p>Totes</p>
                <p>Shoulder and Crossbody Bags</p>
                <p>Clutches, Mini and Macro Bags</p>
                <p>Backpacks and Fanny Packs</p>
            </div>
            <div className='thirdDiv'>
                <p>SHOES</p>
                <p>Sneaker</p>
                <p>Pumps</p>
                <p>Sandals and Wedges</p>
                <p>Boots and Booties</p>
                <p>Flats and Lace Ups</p>
                <p>Slides and Mules</p>
                <p>Rainbow Lace collection</p>
                <p>3.5 Collection</p>
            </div>
            <div className='fourthDiv'>
                <p>ACCESSORIES</p>
                <p>Wallets and Small Leather Goods</p>
                <p>Handles and Straps</p>
                <p>Technology</p>
                <p>Bijoux Belts</p>
                <p>Scarves and Silks</p>
                <p>Hats and Gloves</p>
                <p>Socks</p>
                <p>Masks</p>
                <p>Lifestyle and Other accessories</p>
                <p>Sunglesses</p>
            </div>
            <div className='fivthDiv'>
                <p>WATCHES&JEWELERY</p>
                <p>Alphabet Collection</p>
                <p>Rings</p>
                <p>Earrings</p>
                <p>Necklaces</p>
                <p>Charms</p>
                <p>Bracelets</p>
                <p>Watches&Straps</p>
            </div>
            <CloseIcon className='closeIcon' onClick={toggleMainBar}/>
        </div>
    </div>
  )
}
