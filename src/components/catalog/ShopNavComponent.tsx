import React, { FC } from "react";

// a) Aberturas

// a.1) Puertas

// a.2) Ventanas

// a.4) Sistemas complementarios

// b) Cerramientos

// b.1) Frente integral

// b.2) Courtain Wall

// b.3) Divisorios de Oficina

export const ShopNavComponent:FC = () => {
  return (
    // <div className="accordion" id="shopNavAccordion">
    //   <div className="card" >
    //     <div className="card-header" id="headingOne">
    //       <h5 className="mb-0">
    //         <button
    //           className="btn btn-link"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#collapseOne"
    //           aria-expanded="true"
    //           aria-controls="collapseOne"
    //         >
    //           Collapsible Group Item #1
    //         </button>
    //       </h5>
    //     </div>

    //     <div
    //       id="collapseOne"
    //       className="collapse"
    //       aria-labelledby="headingOne"
    //       data-parent="#shopNavAccordion"
    //     >
    //       <div className="card-body">
    //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
    //         terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
    //         skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
    //         Brunch 3 wolf moon temp
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card">
    //     <div className="card-header" id="headingTwo">
    //       <h5 className="mb-0">
    //         <button
    //           className="btn btn-link collapsed"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#collapseTwo"
    //           aria-expanded="false"
    //           aria-controls="collapseTwo"
    //         >
    //           Collapsible Group Item #2
    //         </button>
    //       </h5>
    //     </div>
    //     <div
    //       id="collapseTwo"
    //       className="collapse"
    //       aria-labelledby="headingTwo"
    //       data-parent="#shopNavAccordion"
    //     >
    //       <div className="card-body">
    //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
    //         terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
    //         skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
    //         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
    //         single-origin coffee nulla assumenda shoreditch et. Nihil anim
    //         keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
    //         sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
    //         occaecat craft beer farm-to-table, raw denim aesthetic synth
    //         nesciunt you probably haven't heard of them accusamus labore
    //         sustainable VHS.
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <ul className="blog__cate ul--no-style accordion">
      <h4 className="title-sidebar">
        Productos
      </h4>
      <li>
        <a
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Design Knowledge
        </a>
        <p
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#shopNavAccordion"
        >Test Item</p>
      </li>
      <li>
        <a href="">
          Tricks and Tips
        </a>
      </li>
      <li>
        <a href="">
          Interior Experiences
        </a>
      </li>
      <li>
        <a href="">
          Q&A
        </a>
      </li>
    </ul>
  );
};
