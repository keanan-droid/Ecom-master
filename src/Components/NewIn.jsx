import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "../Stylesheet/Components/NewIn.scss";


export const NewIn = ({ isNewMenuOpen, setIsNewMenuOpen }) => {

    const toggleMainBar = () => {
        setIsNewMenuOpen(!isNewMenuOpen);
    }

  return (
        <div className='newIn'>
            <div className='main'>
                <div className='firstDiv'>
                    <p>WOMEN</p>
                    <p>New Arrivals</p>
                    <p>Most Loved</p>
                    <p>Renaissance</p>
                    <p>Hot Stuff</p>
                    <p>Joy Therapy</p>
                    <p>Tradizione</p>
                    <p>Lunar New Year</p>
                    <p>DG for Smeg</p>
                </div>
                <div className='secondDiv'>
                    <p>MEN</p>
                    <p>New Arrivals</p>
                    <p>Most Loved</p>
                    <p>Reborn to Live</p>
                    <p>Hot Animalier</p>
                    <p>Magnificent</p>
                    <p>Lunar New Year</p>
                    <p>DG Essentials</p>
                </div>
                <div className='thirdDiv'>
                    <p>CHILDREN</p>
                    <p>New Arrivals Girl</p>
                    <p>New Arrivals Boy</p>
                    <p>Most Loved</p>
                    <p>Mini Me</p>
                    <p>Lunar New Year</p>
                    <p>Special Occasions</p>
                    <p>Toys</p>
                </div>
                <div className='fourthDiv'>
                    <p>DAYMASTER CONFIGURATOR</p>
                    <p>Personalize</p>
                    <CloseIcon className='closeIcon' onClick={toggleMainBar}/>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
