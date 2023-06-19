import React from "react";
import Navbar from "../components/navbar/Navbar";
import Leftfilterbar from "../components/leftfilterbar/Leftfilterbar";
import ProductCard from "../components/productcard/ProductCard";
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="home-wrapper">
                <div className="left">
                    <Leftfilterbar />
                </div>
                <div className="right">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Home;
