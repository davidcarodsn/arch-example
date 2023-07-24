import { AccordionItem } from "@components/accordion/AccordionItem";
import React, { FC } from "react";
import { ProductFathersTypes, TypeProduct } from "src/utils/types/types";

const dataNav = [
  {
    title: "Aberturas",
    filter: ProductFathersTypes.OPENERS_TYPES,
    types: [
      {
        title: 'Ventanas',
        filter: TypeProduct.WINDOW_PRODUCT,
        subTypes: [
          {
            title: 'Cerrojo',
            filter: 'slider'
          }
        ]
      },
      {
        title: 'Puertas',
        filter: 'doors',
      }
    ]
  },
  {
    title: "Cerramientos",
    filter: 'closeners',
    types: [
      {
        title: 'Ventanas',
        filter: 'window',
        subTypes: [
          {
            title: 'Cerrojo',
            filter: 'slider'
          }
        ]
      },
      {
        title: 'Puertas',
        filter: 'doors',
      }
    ]
  },
  {
    title: "Sistemas Complementarios",
    filter: 'addingfeatures',
    types: [
      {
        title: 'Ventanas',
        filter: 'window',
        subTypes: [
          {
            title: 'Cerrojo',
            filter: 'slider'
          }
        ]
      },
      {
        title: 'Puertas',
        filter: 'doors',
      }
    ]
  },
];

interface ShopNavComponentProps {
  setCatalogData: any;
}

export const ShopNavComponent:FC <ShopNavComponentProps> = ({ setCatalogData }) => {
  return (
    <div>
      <h4 className="title-sidebar">
        Productos
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
          dataNav.map((item)=> {
            return (
              <AccordionItem data={item} setCatalogData={setCatalogData} key={item.title}/>
            )
          })
        }
      </div>
    </div>
  );
};
 