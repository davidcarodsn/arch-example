import { AccordionItem } from "@components/accordion/AccordionItem";
import React, { FC, useState } from "react";

// a) Aberturas

// a.1) Puertas

// a.2) Ventanas

// a.4) Sistemas complementarios

// b) Cerramientos

// b.1) Frente integral

// b.2) Courtain Wall

// b.3) Divisorios de Oficina

const dataNav = [
  {
    title: "Aberturas",
    filter: 'openers',
    types: [
      {
        title: 'Ventanas',
        filter: 'windows',
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
        filter: 'windows',
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
        filter: 'windows',
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

export const ShopNavComponent:FC = () => {
  return (
    <div>
      <h4 className="title-sidebar">
        Productos
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
          dataNav.map((item)=> {
            return (
              <AccordionItem data={item} key={item.title}/>
            )
          })
        }
      </div>
    </div>
  );
};
 