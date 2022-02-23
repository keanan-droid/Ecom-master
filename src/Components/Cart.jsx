import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "../Stylesheet/Components/Cart.scss";

export const Cart = ({isCartSideBarOpen, setIsCartSideBarOpen}) => {
  
    const toggleSideBar = () => {
      setIsCartSideBarOpen(!isCartSideBarOpen);
    }
  return (
    <div className="CartSiderBar">
        <div className="cart">
            <div className='cart_one'>
                <div>
                    <h1>Shopping bag (0)</h1>
                    <CloseIcon className="closeIcon" onClick={toggleSideBar}/>
                </div>
                <h2>YOUR BAG IS EMPTY</h2>
            </div>
            <div className="register">
                <h1>RETRIEVE YOUR BAG</h1>
                <p>Sign in to My Account to access your bag across your devices.</p>
                <button>Sign In</button>
                <p className='register_text'>Register an account</p>
            </div>
        </div>
    </div>
  )
}
