import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "../Stylesheet/Components/Children.scss";

export const Children = ({ isChildrenMenuOpen, setIsChildrenMenuOpen }) => {

  const toggleMainBar = () => {
    setIsChildrenMenuOpen(!isChildrenMenuOpen);
}

  return (
    <div className='children'>
      <div className='main'>
            <div className='firstDiv'>
                <p>NEWBORN GIRL (0-30 MONTHS)</p>
                <p>Gift Sets and Bodygrows</p>
                <p>Dresses</p>
                <p>Topwear</p>
                <p>Trousers and Skirts</p>
                <p>Beachwear</p>
                <p>Accessories and Baby Carriers</p>
                <p>Newborn Girls Shoes (16-20)</p>
                <p>Shoes for First Steps (19-29)</p>
                <p>Mini me</p>
            </div>
            <div className='secondDiv'>
              <p>NEWBORN BOY (0-30 MONTHS)</p>
              <p>Gift Sets and Bodygrows</p>
              <p>Topwear</p>
              <p>Trousers and Shorts</p>
              <p>Beachwear</p>
              <p>Accessories and Baby Carries</p>
              <p>Newborn Boys Shoes (19-20)</p>
              <p>Shoes for First Steps (19-26)</p>
              <p>Mini me</p>
            </div>
            <div className='thirdDiv'>
              <p>Dresses</p>
              <p>Coats and Jackets</p>
              <p>T-Shirts and Sweatshirts</p>
              <p>Shirts and Tops</p>
              <p>Sweaters</p>
              <p>Trousers and Skirts</p>
              <p>Beachwear</p>
              <p>Nightwear</p>
              <p>Accessories</p>
              <p>Shoes(24-38)</p>
              <p>Mini Me</p>
            </div>
            <div className='fourthDiv'>
              <p>Suits</p>
              <p>Coats and Jackets</p>
              <p>T-Shirts and Sweatshirts</p>
              <p>Shirts</p>
              <p>Sweaters</p>
              <p>Trousers and Shorts</p>
              <p>Beachwear</p>
              <p>Nightwear and Underwear</p>
              <p>Accessories</p>
              <p>Shoes(24-38)</p>
              <p>Mini Me</p>
            </div>
            <div className='fivthDiv'>
                <p>JEWELERY</p>
            </div>
            <CloseIcon className='closeIcon' onClick={toggleMainBar}/>
        </div>
    </div>
  )
}
