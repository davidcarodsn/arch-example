import React, { FC } from "react";
import type { CatalogData } from "src/utils/types/types";

interface ShopCardComponentProps {
  product: CatalogData;
  isHome?: boolean;
}

const ShopCardComponent:FC<ShopCardComponentProps> = ({ product, isHome = false }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="pro__item">
        <div className="pro__img">
          {/* <span className="label label--small pink"> sale</span> */}
          <img alt="Product 1" src={product?.img && `/img/products/${product.img}/${product.img}.png`} />
          <div className="pro-link">
            <div className="pro-info pro-info--dark pro-info--center">
              <a
                href={isHome ? `/catalog` : `/products/${product.img}`}
                className="au-btn au-btn--pill au-btn--big au-btn--yellow pro__add"
                style={{ color: 'white'}}
              >
                { isHome ? 'Ver en Catálogo' : 'Ver Detalle' }
              </a>
            </div>
          </div>
        </div>
        <div className="pro__detail">
          <h5>
            <a href="single-product.html" style={{ textTransform: 'none' }}>{product.name}</a>
          </h5>
          {/* <div className="pro__price">
            <span className="old"> $102.00</span>
            <span className="current"> $95.00</span>
          </div> */}
          {/* <div className="pro__star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShopCardComponent;
