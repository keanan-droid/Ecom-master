import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import "../Stylesheet/Components/LoginSiderBar.scss";

export const LoginSiderBar = ({isSideBarOpen, setIsSideBarOpen}) => {

  const [inputEmail, setInputEmail] = React.useState("");

  let email = (e) => {
    const newEmail = e.target.value;
    setInputEmail(newEmail);
    console.log(inputEmail);
  };

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }
  return (
    <div className="LoginSiderBar">
      <div className="login">
        <div>
          <div>
            <h1>Login</h1>
            <CloseIcon className="closeIcon" onClick={toggleSideBar}/>
          </div>
          <p>If you are a registered user, please enter your email and password</p>
          <input type="text" placeholder="Email" onChange={email}/>
          <input type="text" placeholder="Password" />
          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            <p>Remeber me</p>
          </div>
          <div className="forget">
            <button>Login</button>
            <span>Forget my password</span>
          </div>
        </div>
        <div className="register">
          <p>Get an account now</p>
          <div>
            <span>Save credit card details for faster shopping</span>
            <span>Manage your order history</span>
            <span>Gain access to your Wishlist</span>
          </div>
          <button>Register now</button>
        </div>
      </div>

    </div>
  );
};
