import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LoginSiderBar } from "./LoginSiderBar";
import "../Stylesheet/Components/Nav.scss";

export const Nav = () => {

  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  
  const sliderSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="nav-top__left">
          <LocationOnIcon className="icon" />
          <span>|</span>
          <div className="nav-top__left-right">
            <LanguageIcon className="icon"/>
            <p>English / South Africa</p>
          </div>
        </div>
        <div className="nav-top__right">
          <HelpIcon className="help-icon icon" />
          <p>Customer Service</p>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-bottom__left">
          <h1>Dolce & Gabbana</h1>
          <div className="nav-bottom__left-right">
            <p>New In</p>
            <p>Women</p>
            <p>Men</p>
            <p>Children</p>
            <p>Gifts</p>
          </div>
        </div>
        <div className="nav-bottom__right">
          <div className="nav-bottom__right-left nav-bottom__right-link">
            <SearchIcon className="icon" />
            <p>Search</p>
          </div>
          <span className="nav-bottom__right-link nav-separator">|</span>
          <PersonIcon
            className="nav-bottom__right-link icon"
            onClick={sliderSideBar}
          />
          <FavoriteIcon className="nav-bottom__right-link icon" />
          <div className="nav-bottom__right-right nav-bottom__right-link">
            <div>
              <ShoppingBagIcon className="cart-icon icon" />
            </div>
            <p className="cart-count">0</p>
          </div>
        </div>
      </div>

      {isSideBarOpen ? <LoginSiderBar /> : null}
    </nav>
  );
};
