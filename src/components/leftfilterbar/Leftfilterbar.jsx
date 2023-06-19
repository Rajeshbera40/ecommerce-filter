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
        <section className="categories filter_section">
          <h4 className="title_name">CATEGORIES</h4>
          <ul>
            <li>Mobile</li>
            <li>Headphone</li>
          </ul>
        </section>

        {/* /////////Price Range/////////////////// */}
        <section className="price_range filter_section">
          <h4 className="title_name">PRICE</h4>

        </section>
        {/* /////////////////////////////Brand////////////////////// */}

        <section className="brand filter_section">
          <h4 className="title_name">BRAND</h4>
          <div className="b-search">
            <Icon
              icon="ion:search"
              className="b_s-icon"
              width="20"
              height="20"
            />
            <input type="text" placeholder="Search Brand.." />
          </div>

          <div className="b_name filter_item_name">
            <input type="checkbox" id="asus" />
            <label htmlFor="asus">Asus</label>
          </div>
          <div className="b_name filter_item_name">
            <input type="checkbox" id="mi" />
            <label htmlFor="mi">Mi</label>
          </div>
          <div className="b_name filter_item_name">
            <input type="checkbox" id="sumsung" />
            <label htmlFor="sumsung">Sumsung</label>
          </div>
          <div className="b_name filter_item_name">
            <input type="checkbox" id="oppo" />
            <label htmlFor="oppo">OPPO</label>
          </div>
        </section>

        {/* /////////////////////////Customer Rating/////////////////////// */}

        <section className="customer-rating filter_section">
          <h4 className="title_name">CUSTOMER RATING</h4>

          <div className="c_rating filter_item_name">
            <input type="checkbox" id="4star" />
            <label htmlFor="4star">4&#9733; & above</label>
          </div>
          <div className="c_rating filter_item_name">
            <input type="checkbox" id="3star" />
            <label htmlFor="3star">3&#9733; & above</label>
          </div>
        </section>
         {/* /////////////////////////Discount/////////////////////// */}

         <section className="discount filter_section">
          <h4 className="title_name">DISCOUNT</h4>

          <div className="c_rating filter_item_name">
            <input type="checkbox" id="50%" />
            <label htmlFor="50%">50% or more</label>
          </div>
          <div className="c_rating filter_item_name">
            <input type="checkbox" id="40%" />
            <label htmlFor="40%">40% or more</label>
          </div>
          <div className="c_rating filter_item_name">
            <input type="checkbox" id="30%" />
            <label htmlFor="30%">30% or more</label>
          </div>
          <div className="c_rating filter_item_name">
            <input type="checkbox" id="20%" />
            <label htmlFor="20%">20% or more</label>
          </div>
          <div className="c_rating filter_item_name">
            <input type="checkbox" id="10%" />
            <label htmlFor="10%">10% or more</label>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Leftfilterbar;
