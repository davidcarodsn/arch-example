import React from 'react'


const LinkWpButton = ({ data, index }) => {
  return (
    <a 
      style={{ 
        color: 'white', 
        backgroundColor: (index % 2) ? '#e91d25' : '#0a75ba', 
        height: '48px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '150px 150px 150px 150px',
        padding: '0px 30px',
        width: '90%'
      }} 
      target='_blank' 
      href={`https://api.whatsapp.com/send?phone=${data.phone}&text=`}
    >
      <h5 style={{ color: 'white' }}>{data.area}</h5>
      <i fontSize="20px" className="zmdi zmdi-arrow-right-top"></i>
    </a>
  )
}

export default LinkWpButton;
