import React from "react";
import "./productcard.scss";
const ProductCard = () => {
    return (
        <div className="productcard">
            <div className="card">
                <div className="product_image">
                    <img
                        src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70"
                        alt=""
                    />
                </div>
                <div className="product_desc">
                    <div className="desc_about">
                        <h4 className="title">
                            realme C33 2023 (Aqua Blue, 128 GB)
                        </h4>
                        <div className="p_rating">
                            <span className="num_rating">4.4 &#9733;</span>
                            <span className="user_rating">
                                13,111 Ratings &nbsp;&
                            </span>

                            <span className="reviews">&nbsp; 406 Reviews</span>
                        </div>

                        <div className="p_details">
                            <ul>
                                <li>
                                    4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                                </li>
                                <li>
                                    4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                                </li>
                                <li>
                                    4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                                </li>
                                <li>
                                    4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="desc_price">
                        <span className="p_price">₹10,499</span>
                        <div className="p_off">
                            <span>₹13,999</span>
                            <span>25% off</span>
                        </div>
                        <div className="dlivery">
                            <span>Free delivery by</span>
                            <span>Today</span>
                        </div>
                        <div className="deal">Back to Campus Deal</div>
                        <div className="exchange">
                            <span>Upto </span>
                            <span>₹9,400</span>
                            <span> Off on Exchange</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
