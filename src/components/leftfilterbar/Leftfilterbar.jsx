import React from "react";
import "./leftfilterbar.scss";
const Leftfilterbar = () => {
  return (
    <div className="leftfilterbar">
      <div className="title">
        <h3>Filter</h3>
      </div>
      <div className="filter">
        <div className="categories">
          <h4 className="title_name">CATEGORIES</h4>
          <ul>
            <li>Mobile</li>
            <li>Headphone</li>
          </ul>
        </div>

        <div className="brand">
          <h4 className="title_name">BRAND</h4>
          <div className="b-search">
          </div>
          <div className="b_name">
            <input type="checkbox" />
            <span>Asus</span>
          </div>
          <div className="b_name">
            <input type="checkbox" />
            <span>Mi</span>
          </div>
          <div className="b_name">
            <input type="checkbox" />
            <span>Sumsung</span>
          </div>
          <div className="b_name">
            <input type="checkbox" />
            <span>OPPO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftfilterbar;
