import React from "react";
import landing1 from '../assets/TFSL1.svg'
import landing2 from '../assets/TFSL2.svg'
import landing3 from '../assets/TFSL4.svg'
import landing4 from '../assets/TFSL3.svg'
import { Link } from "react-router-dom";
import Cart from "../components/Cart";

const Landing = () => {
    return (
        <section >
            <div className="button-container">
                <img src={landing1} alt="landing" style={{ opacity: '.95' }}></img>
                <Link to="/Home">
                    <button>Shop the collection</button>
                </Link>
            </div>
            <div className="button-container">
                <img src={landing2} alt="landing"></img>
                <Link to="/Home">
                    <button>Shop Now</button>
                </Link>
            </div>
            <div className="button-container">
                <img src={landing3} alt="landing"></img>
                <Link to="/Home">
                    <button>Shop Now</button>
                </Link>
            </div>
            <div className="button-container">
                <img src={landing4} alt="landing" style={{ opacity: '.9' }}></img>
                <Link to="/Home">
                    <button>Shop Now</button>
                </Link>
            </div>
            <Cart />
        </section>
    )
}

export default Landing;