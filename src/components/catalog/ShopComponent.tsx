import React from "react";
import ShopCardComponent from "./ShopCardComponent";
import { ShopNavComponent } from "./ShopNavComponent";
import { allCatalogData } from "src/utils/data/catalogData";

export const ShopComponent = () => {
  return (
    <section className="pro-list-wrap" style={{ paddingTop: '10vh' }}>
      <div className="section-content section-content--w1140">
        <div className="container">
          <div className="pro-list">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <ShopNavComponent />
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="row">
                  {
                    allCatalogData.map(product => {
                      return (
                        <ShopCardComponent product={product} key={product.name}/>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          {/* <PaginationShopComponent />  */}
        </div>
      </div>
    </section>
  );
};
