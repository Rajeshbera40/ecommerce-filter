import React from "react";
import "./navbar.scss";
import { Icon } from "@iconify/react";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <h2>E-COMMERCE</h2>
                    <h2>Demo</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search.." />
                    <button>
                        <Icon icon="iconamoon:search" width="20" height="20" />
                    </button>
                </div>
                <div className="cart">
                    <Icon
                        icon="material-symbols:shopping-cart"
                        width="20"
                        height="20"
                    />
                    <span>Cart</span>
                    <div className="batch">1</div>
                </div>
                <div className="login">Login</div>
            </div>
        </div>
    );
};

export default Navbar;
