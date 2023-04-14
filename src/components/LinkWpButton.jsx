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
        justifyContent: 'center',
        borderRadius: '150px 150px 150px 150px',
        width: '90%'
      }} 
      target='_blank' 
      href={`https://api.whatsapp.com/send?phone=${data.phone}&text=`}
    >
      <h5 style={{ color: 'white' }}>{data.area}</h5>        
    </a>
  )
}

export default LinkWpButton;
