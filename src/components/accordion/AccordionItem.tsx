import React, { useState } from 'react'
import './accordion.css';

const AccordionChildComponent = ({ subType }: any) => {
  const [ showSubTypes, setShowSubTypes ] = useState(false);
  return (
    <div>
      <button 
        className='accordion-sub-button' 
        onClick={() => setShowSubTypes(!showSubTypes)}
      >
        <i className="fa fa-chevron-right" style={{ transform: showSubTypes ? "rotate(90deg)" : 'none' }} aria-hidden="true"></i>
        {subType.title}
      </button>
      <div className={`accordion-main-body ${showSubTypes && 'show-content'}`} >
        {
          subType.subTypes.map((item: any) => {
            return (
              <button key={item.title} style={{ fontWeight: '300' }} className='accordion-sub-button'>{item.title}</button>
            )
          })
        }
      </div> 

    </div>
  )
}

export const AccordionItem = ({ data, setCatalogData }: any) => {
  const [ showSubTypes, setShowSubTypes ] = useState(false)
  return (
    <div>
      <button 
        className="accordion-main-button"
        type='button'
        onClick={() => setShowSubTypes(!showSubTypes)}
      >
        <i className="fa fa-chevron-right" style={{ transform: showSubTypes ? "rotate(90deg)" : 'none' }} aria-hidden="true"></i>
        {data.title}
      </button>
      <div className={`accordion-main-body ${showSubTypes && 'show-content'}`} >
        <button 
          type='button' 
          className='accordion-sub-button'
          onClick={() => setCatalogData(data.filter, false)}
        >
          Mostrar todos
        </button>
        {
          data.types.map((item: any) => {
            return (
              (item?.subTypes?.length > 0) 
              ? (<AccordionChildComponent subType={item} key={item.title} />) 
              : (
                  <button 
                    className="accordion-sub-button" 
                    key={item.title}
                  >
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    {item.title}
                  </button>
                )
              )
            }
          )
        }
      </div>
    </div>
  )
}
