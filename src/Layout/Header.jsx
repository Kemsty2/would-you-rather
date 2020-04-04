import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import classNames from "classnames";

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: ""
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.location.pathname !== this.props.location.pathname){
      const paths = this.props.location.pathname.split('/');

      if (paths.length > 1) {
        /**
         * on cherche le menu ayant ce basepath et on le garde
         */        
        this.setState({ active: paths[1] })
      }

      console.log(paths);
    }
  }

  render() {
    const {active} = this.state;
    return (
      <header className="navbar navbar navbar-expand flex-column flex-md-row bd-navbar">
        <Link to="/">
          <img
            src={logo}
            alt=""
            width="178"
            height="45"
            className="d-md-block navbar-brand"
          />
        </Link>

        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item">
              <NavLink to="/" className={classNames({ 'animated_link': active === ""}, 'cursor-pointer', 'nav-link')}>
                List Of Pools
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className={classNames({ 'animated_link': active === "add"}, 'cursor-pointer', 'nav-link')}>
                Add Pool
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/leaderboard" className={classNames({ 'animated_link': active === "leaderboard"}, 'cursor-pointer', 'nav-link')}>
                LeaderBoard
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <UncontrolledDropdown setActiveFromChild className="cursor-pointer">
            <DropdownToggle tag="a" className="nav-link" caret>
              Bienvenue, Moyo
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="button" className="cursor-pointer">
                Deconnexion
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <li className="nav-item">
            <a
              className="nav-link p-2"
              href="https://github.com/kemsty2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="icon-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link p-2"
              href="https://twitter.com/kemsty2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="icon-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link p-2"
              href="https://www.facebook.com/kemsty2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="icon-facebook"></i>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
export default Header;
