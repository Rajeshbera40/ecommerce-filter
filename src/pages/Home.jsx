import React from "react";
import Navbar from "../components/navbar/Navbar";
import Leftfilterbar from "../components/leftfilterbar/Leftfilterbar";
import ProductCard from "../components/productcard/ProductCard";
import Data from "../data.json";

const Home = () => {
    // console.log(Data);
    return (
        <div className="home">
            <Navbar />
            <div className="home-wrapper">
                <div className="left">
                    <Leftfilterbar />
                </div>
                <div className="right">
                    <ProductCard Data={Data} />
                </div>
            </div>
        </div>
    );
};

export default Home;
