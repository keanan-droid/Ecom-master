import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import "../Stylesheet/Components/LoginSiderBar.scss";

export const LoginSiderBar = ({isSideBarOpen, setIsSideBarOpen}) => {

  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const navigate = useNavigate();

  let email = (e) => {
    const newEmail = e.target.value;
    setInputEmail(newEmail);
    console.log(inputEmail);
  };

  let password = (e) => {
    const newPassword = e.target.value;
    setInputPassword(newPassword);
};

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const redirect = (path) => {
    navigate(path);
  }

  React.useEffect(() => {
    fetch("http://localhost:3004/accounts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    console.log(JSON.stringify(data));
    })
    .catch((error) => {
      console.error(error);
    });
});

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
          <input type="text" placeholder="Password" onChange={password}/>
          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            <p>Remeber me</p>
          </div>
          <div className="forget">
            <button>Login</button>
            <span onClick={() => redirect("/reset-password")}>
              Forget my password</span>
          </div>
        </div>
        <div className="register">
          <p>Get an account now</p>
          <div>
            <span>Save credit card details for faster shopping</span>
            <span>Manage your order history</span>
            <span>Gain access to your Wishlist</span>
          </div>
          <button onClick={() => redirect("/register")}>Register now</button>
        </div>
      </div>

    </div>
  );
};
