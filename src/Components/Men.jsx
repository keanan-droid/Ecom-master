import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "../Stylesheet/Components/Men.scss";

export const Men = ({ isMenMenuOpen, setIsMenMenuOpen }) => {

    const toggleMainBar = () => {
        setIsMenMenuOpen(!isMenMenuOpen);
    }

  return (
    <div className='men'>
         <div className='main'>
            <div className='firstDiv'>
                <p>CLOTHING</p>
                <p>Suits and Blazers</p>
                <p>Coats and Jackets</p>
                <p>Sweaters and Cardgans</p>
                <p>Sweatshirts</p>
                <p>T-Shirt and Polos</p>
                <p>Shirts</p>
                <p>Trousers and Shorts</p>
                <p>Denim</p>
                <p>Activewear</p>
                <p>Beachwear</p>
                <p>Underwear</p>
                <p>Underwear and Loungewear</p>
            </div>
            <div className='secondDiv'>
                <p>BAGS</p>
                <p>Crossbody Bags</p>
                <p>Briefcase and clutches</p>
                <p>Backpacks and Fanny Packs</p>
                <p>Travel Bags</p>
                <p>Shoppers</p>
            </div>
            <div className='thirdDiv'>
                <p>SHOES</p>
                <p>Sneaker</p>
                <p>Lace-Ups</p>
                <p>Loafers and Moccasins</p>
                <p>Boots</p>
                <p>Sandals and Slides</p>
            </div>
            <div className='fourthDiv'>
                <p>ACCESSORIES</p>
                <p>Wallets and Small Leather Goods</p>
                <p>Technology</p>
                <p>Belts</p>
                <p>Scarves and Silks</p>
                <p>Bijoux</p>
                <p>Ties and Pocket Squares</p>
                <p>Hats and Gloves</p>
                <p>Socks</p>
                <p>Masks</p>
                <p>Lifestyle and Other accessories</p>
                <p>Sunglesses</p>
            </div>
            <div className='fivthDiv'>
                <p>WATCHES&JEWELERY</p>
                <p>Bracelets</p>
                <p>Cufflinks</p>
                <p>Brooches&TiePins</p>
                <p>Necklaces</p>
                <p>Charms</p>
                <p>Rings</p>
                <p>Watches</p>
            </div>
            <CloseIcon className='closeIcon' onClick={toggleMainBar}/>
        </div>
    </div>
  )
}
