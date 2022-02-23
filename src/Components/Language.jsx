import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "../Stylesheet/Components/Language.scss";

export const Language = ({isLanguageBarOpen, setIsLanguageBarOpen}) => {
    const toggleSideBar = () => {
        setIsLanguageBarOpen(!isLanguageBarOpen);
    }

  return (
    <div className='languageMenu'>
        <div className='language_section'>
            <div>
                <h1>Country & Language</h1>
                <CloseIcon onClick={toggleSideBar} className='closeIcon' />
            </div>
            <p>Be advised that changing your location while shopping will remove all the contents from your shopping bag</p>
            <div className='box-col'>
                <div className='left_col'>
                    <h1>Select Country</h1>
                    <p>USE</p>
                    <p>Italy</p>
                    <p>United Kingdom</p>
                    <p>Germany</p>
                </div>
                <div className='right_col'>
                    <h1>Select Language</h1>
                    <p>English (En)</p>
                    <p>Deutsch (De)</p>
                    <p>Italiano (lt)</p>
                    <p>Francais (Fr)</p>
                </div>
            </div>
        </div>
    </div>
  )
}
