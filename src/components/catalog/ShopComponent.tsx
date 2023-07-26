import React, { useEffect, useState } from "react";
import ShopCardComponent from "./ShopCardComponent";
import { ShopNavComponent } from "./ShopNavComponent";
import { allCatalogData } from "src/utils/data/catalogData";
import type { CatalogData } from "src/utils/types/types";

const initialState = [
  ...allCatalogData
].sort(function() { return Math.random() - 0.5 });

export const ShopComponent = ({ filter = undefined }) => {
  const [catalogData,  setCatalogData] = useState<CatalogData[] | undefined>(initialState);
    
  const handleFilterNav = (productType: string, isName: boolean) => {
    let newData: CatalogData[];
    if (isName) {
      newData = allCatalogData.filter(product => product.name === productType);
    } else {
      newData = allCatalogData.filter(product => product.filters.includes(productType));
    }

    setCatalogData(newData);
    return undefined;
  }

  useEffect(() => {
    if (filter) {
      handleFilterNav(filter, false);
    }    
  }, [filter])

  return (
    <section className="pro-list-wrap">
      <div className="section-content section-content--w1140">
        <div className="container">
          <div className="pro-list">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <ShopNavComponent setCatalogData={handleFilterNav} />
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="row">
                  {
                    catalogData?.map(product => {
                      return (
                        <ShopCardComponent product={product} key={product.name} />
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
