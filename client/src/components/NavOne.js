import React, { Component } from "react";
import { Link } from "gatsby";
import logoLight from "../assets/images/TuttiFrutti-Logo.png";
export default class NavTwo extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };

  render() {
    return (
      <header className="site-header site-header__header-one site-header__header-two ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
                <img
                  src={logoLight}
                  className="main-logo"
                  width="119"
                  alt="alter text"
                />
              </a>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" one-page-scroll-menu navigation-box">
                <li className="current scrollToLink">
                  <a href="/">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/index-2">Categories</a>
                    </li>
                      </ul>
                    </li>
                  </ul>
            <div className="right-side-box">
              <a className="thm-btn header__cta-btn" href="#none">
                <span>Login</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}