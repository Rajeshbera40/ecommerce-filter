import React from "react";
import "./leftfilterbar.scss";
import { Icon } from "@iconify/react";
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
            <Icon icon="ion:search" className="b_s-icon" width="20" height="20" />
            <input type="text" placeholder="Search Brand.." />
          </div>


          <div className="b_name">
            <input type="checkbox" id="asus" />
            <label htmlFor="asus">Asus</label>
          </div>
          <div className="b_name">
            <input type="checkbox" />
            <label>Mi</label>
          </div>
          <div className="b_name">
            <input type="checkbox" />
            <label>Sumsung</label>
          </div>
          <div className="b_name">
            <input type="checkbox" />
            <label>OPPO</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftfilterbar;
