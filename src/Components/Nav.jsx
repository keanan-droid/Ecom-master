import React from "react";
import { BsBag, BsHeart, BsPerson, BsSearch, BsGlobe } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FiHelpCircle } from "react-icons/fi";
import { SearchBar } from "./SearchBar";
import { LoginSiderBar } from "./LoginSiderBar";
import { NewIn } from "../Components/NewIn";
import { Women } from "./Women";
import { Men } from "./Men";
import { Children } from "./Children";
import { Gifts } from "./Gifts";
import { Cart } from "./Cart";
import { Language } from "./Language";
import { useNavigate } from "react-router-dom";
import "../Stylesheet/Components/Nav.scss";

export const Nav = () => {

  const [isLanguageBarOpen, setIsLanguageBarOpen] = React.useState(false);
  const [isSearchBarMenuOpen, setIsSearchBarMenuOpen] = React.useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const [isCartSideBarOpen, setIsCartSideBarOpen] = React.useState(false);
  const [isNewMenuOpen, setIsNewMenuOpen] = React.useState(false);
  const [isWomenMenuOpen, setIsWomenMenuOpen] = React.useState(false);
  const [isMenMenuOpen, setIsMenMenuOpen] = React.useState(false);
  const [isChildrenMenuOpen, setIsChildrenMenuOpen] = React.useState(false);
  const [isGiftsMenuOpen, setIsGiftsMenuOpen] = React.useState(false);
  
  const navigate = useNavigate();

  const sliderSearchBarMenu = () => {
    setIsSearchBarMenuOpen(!isSearchBarMenuOpen)
  }

  const sliderNewMenu = () => {
    setIsNewMenuOpen(!isNewMenuOpen)
    setIsWomenMenuOpen(false);
    setIsMenMenuOpen(false);
    setIsChildrenMenuOpen(false);
    setIsGiftsMenuOpen(false);
  }

  const sliderWomenMenu = () => {
    setIsWomenMenuOpen(!isWomenMenuOpen)
    setIsNewMenuOpen(false);
    setIsMenMenuOpen(false);
    setIsChildrenMenuOpen(false);
    setIsGiftsMenuOpen(false);
  }

  const sliderMenMenu = () => {
    setIsMenMenuOpen(!isMenMenuOpen)
    setIsNewMenuOpen(false);
    setIsWomenMenuOpen(false);
    setIsChildrenMenuOpen(false);
    setIsGiftsMenuOpen(false);
  }

  const sliderChildrenMenu = () => {
    setIsChildrenMenuOpen(!isChildrenMenuOpen)
    setIsNewMenuOpen(false);
    setIsWomenMenuOpen(false);
    setIsMenMenuOpen(false);
    setIsGiftsMenuOpen(false);
  }

  const sliderGiftsMenu = () => {
    setIsGiftsMenuOpen(!isGiftsMenuOpen)
    setIsNewMenuOpen(false);
    setIsWomenMenuOpen(false);
    setIsMenMenuOpen(false);
    setIsChildrenMenuOpen(false);
  }

  const sliderLanguageBar = () => {
    setIsLanguageBarOpen(!isLanguageBarOpen)
  }
  
  const sliderSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  const sliderCartSideBar = () => {
    setIsCartSideBarOpen(!isCartSideBarOpen)
  }

  const redirect = (path) => {
    navigate(path);
  }

  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="nav-top__left">
          <GrLocation className="icon" />
          <span>|</span>
          <div className="nav-top__left-right">
            <BsGlobe onClick={sliderLanguageBar} className="icon"/>
            <p>English / South Africa</p>
          </div>
        </div>
        <div className="nav-top__right">
          <FiHelpCircle className="help-icon icon" onClick={() => redirect("/customer-care")}/>
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
            <BsSearch className="icon search" />
            <p>Search</p>
          </div>
          <span className="nav-bottom__right-link nav-separator">|</span>
          <BsPerson
            className="nav-bottom__right-link icon person"
            onClick={sliderSideBar}
          />
          <BsHeart className="nav-bottom__right-link icon heart" onClick={sliderSideBar} />
          <div className="nav-bottom__right-right nav-bottom__right-link">
            <div>
              <BsBag className="cart-icon icon" 
              onClick={sliderCartSideBar}/>
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
      {isLanguageBarOpen ? <Language isLanguageBarOpen={isLanguageBarOpen} setIsLanguageBarOpen={setIsLanguageBarOpen} /> : null}
      {isCartSideBarOpen ? <Cart isCartSideBarOpen={isCartSideBarOpen} setIsCartSideBarOpen={setIsCartSideBarOpen} /> : null}
    </nav>
  );
};
