import React, { useState } from "react";
import "./productcard.scss";
import ReactPaginate from "react-paginate";

const ProductCard = ({ Data }) => {
    const [itemsPerPage, setItemPerPage] = useState(4);
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const newData = Data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Data.length;

        setItemOffset(newOffset);
    };
    return (
        <div className="productcard">
            {newData &&
                newData.map((data, i) => (
                    <div className="card" key={i}>
                        <div className="product_image">
                            {data.src && <img src={data.src} alt="" />}
                        </div>
                        <div className="product_desc">
                            <div className="desc_about">
                                <h4 className="title">{data.name}</h4>
                                <div className="p_rating">
                                    {data.point_rating && (
                                        <span className="num_rating">
                                            {data.point_rating} &#9733;
                                        </span>
                                    )}
                                    {data.rating && (
                                        <span className="user_rating">
                                            {data.rating} &nbsp;&
                                        </span>
                                    )}
                                    {data.reviews && (
                                        <span className="reviews">
                                            &nbsp; {data.reviews}
                                        </span>
                                    )}
                                </div>

                                <div className="p_details">
                                    <ul>
                                        {data.ram && <li>{data.ram}</li>}
                                        {data.screen && <li>{data.screen}</li>}
                                        {data.camera && <li>{data.camera}</li>}
                                        {data.bettery && (
                                            <li>{data.bettery}</li>
                                        )}
                                        {data.processor && (
                                            <li>{data.processor}</li>
                                        )}
                                        {data.warranty && (
                                            <li>{data.warranty}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="desc_price">
                                {data.price && (
                                    <span className="p_price">
                                        {data.price}
                                    </span>
                                )}

                                <div className="p_off">
                                    {data.mrp && (
                                        <span className="p_rate">
                                            {data.mrp}
                                        </span>
                                    )}
                                    {data.discount && (
                                        <span className="p_discount">
                                            {data.discount}
                                        </span>
                                    )}
                                </div>
                                <div className="dlivery">
                                    <span>
                                        Free delivery by <strong>Today</strong>
                                    </span>
                                </div>
                                <div className="deal">Back to Campus Deal</div>
                                <div className="exchange">
                                    <span>Upto </span>
                                    {data.exchange && (
                                        <span className="exchange_value">
                                            {data.exchange}
                                        </span>
                                    )}

                                    <span> Off on Exchange</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            <div className="c_pagination">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="&raquo;"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={itemsPerPage}
                    pageCount={pageCount}
                    previousLabel="&laquo;"
                    renderOnZeroPageCount={null}
                    className="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="page-item"
                    activeLinkClassName="active"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                />
            </div>
        </div>
    );
};

export default ProductCard;
