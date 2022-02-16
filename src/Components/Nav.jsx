import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SearchBar } from "./SearchBar";
import { LoginSiderBar } from "./LoginSiderBar";
import { NewIn } from "../Components/NewIn";
import { Women } from "./Women";
import { Men } from "./Men";
import { Children } from "./Children";
import { Gifts } from "./Gifts";
import "../Stylesheet/Components/Nav.scss";

export const Nav = () => {

  const [isSearchBarMenuOpen, setIsSearchBarMenuOpen] = React.useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const [isNewMenuOpen, setIsNewMenuOpen] = React.useState(false);
  const [isWomenMenuOpen, setIsWomenMenuOpen] = React.useState(false);
  const [isMenMenuOpen, setIsMenMenuOpen] = React.useState(false);
  const [isChildrenMenuOpen, setIsChildrenMenuOpen] = React.useState(false);
  const [isGiftsMenuOpen, setIsGiftsMenuOpen] = React.useState(false);
  
  const sliderSearchBarMenu = () => {
    setIsSearchBarMenuOpen(!isSearchBarMenuOpen)
  }

  const sliderNewMenu = () => {
    setIsNewMenuOpen(!isNewMenuOpen)
  }

  const sliderWomenMenu = () => {
    setIsWomenMenuOpen(!isWomenMenuOpen)
  }

  const sliderMenMenu = () => {
    setIsMenMenuOpen(!isMenMenuOpen)
  }

  const sliderChildrenMenu = () => {
    setIsChildrenMenuOpen(!isChildrenMenuOpen)
  }

  const sliderGiftsMenu = () => {
    setIsGiftsMenuOpen(!isGiftsMenuOpen)
  }
  
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
            <p onClick={sliderNewMenu}>New In</p>
            <p onClick={sliderWomenMenu}>Women</p>
            <p onClick={sliderMenMenu}>Men</p>
            <p onClick={sliderChildrenMenu}>Children</p>
            <p onClick={sliderGiftsMenu}>Gifts</p>
          </div>
        </div>
        <div className="nav-bottom__right">
          <div className="nav-bottom__right-left nav-bottom__right-link"
           onClick={sliderSearchBarMenu}>
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

      {isSearchBarMenuOpen ? <SearchBar isSearchBarMenuOpen={isSearchBarMenuOpen} setIsSearchBarMenuOpen={setIsSearchBarMenuOpen} /> : null}
      {isNewMenuOpen ? <NewIn isNewMenuOpen={isNewMenuOpen} setIsNewMenuOpen={setIsNewMenuOpen} /> : null}
      {isWomenMenuOpen ? <Women isWomenMenuOpen={isWomenMenuOpen} setIsWomenMenuOpen={setIsWomenMenuOpen} /> : null}
      {isMenMenuOpen ? <Men isMenMenuOpen={isMenMenuOpen} setIsMenMenuOpen={setIsMenMenuOpen} /> : null}
      {isChildrenMenuOpen ? <Children isChildrenMenuOpen={isChildrenMenuOpen} setIsChildrenMenuOpen={setIsChildrenMenuOpen} /> : null}
      {isGiftsMenuOpen ? <Gifts isGiftsMenuOpen={isGiftsMenuOpen} setIsGiftsMenuOpen={setIsGiftsMenuOpen} /> : null}
      {isSideBarOpen ? <LoginSiderBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} /> : null}
    </nav>
  );
};
