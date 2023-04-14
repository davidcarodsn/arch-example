import React from 'react'


const LinkWpButton = ({ data }) => {
  return (
    <a 
      style={{ 
        color: '#444444', 
        backgroundColor: '#ebcd1e', 
        height: '50px', 
        display: 'flex',
        alignItems: 'center',
        borderRadius: '150px 150px 150px 150px',
        width: '90%'
      }} 
      target='_blank' 
      href={`https://api.whatsapp.com/send?phone=${data.phone}&text=`}
    >
      <div style={{ width: '90%', display: 'flex' }}>
        <img 
          style={{ 
            width: '60px', 
            borderRadius: '100%', 
            marginRight: '30px', 
            transform: 'translateX(-2px)' 
          }} 
          src={`/src/assets/img/${data.img}`} 
          alt={`${data.localization}`} 
        />
        <div 
          style={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '7px'
          }}
        >
          <h5 fontSize='12px'>{data.area}</h5>
          <span style={{ fontSize: '12px' }}>{data.localization}</span>
        </div>
      </div>
      <i style={{ fontSize: '25px' }} class="zmdi zmdi-chevron-right"></i>
    </a>
  )
}

export default LinkWpButton;
