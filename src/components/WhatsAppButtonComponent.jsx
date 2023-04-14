import React, { useState } from 'react';
import WppIcon from '../assets/img/wpp-icon.png';
import LinkWpButton from './LinkWpButton';
import ConcordiaImg from '../assets/img/concordia.png'

const WhatsAppButtonComponent = () => {
  const [isLinksDisplayActive, setIsLinksDisplayActive] = useState(false);

  const phonesData = [
    {
      phone: '543446374867',
      area: 'Ventas',
      localization: 'Concordia',
      img: ConcordiaImg
    },
    {
      phone: '',
      area: '',
      localization: '',
      img: ''
    },
  ]
  return (
    <>
      {
        isLinksDisplayActive 
          ? (
            <div 
              className='whatsapp-chat-container animate__animated animate__fadeIn' 
              style={{ 
                display: isLinksDisplayActive ? 'flex' : 'none', 
                borderRadius: '10px 10px 10px 10px',
              }}
            >
              <div style={{
                  height: '60px',
                  backgroundColor: '#ebcd1e',
                  borderRadius: '10px 10px 0px 0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px'
                }}
              >
                <span style={{ fontWeight: '700' }}>Comunícate con nosotros.</span>
                <button 
                  onClick={() => setIsLinksDisplayActive(false)}
                  style={{
                    fontSize: '15px',
                    cursor: 'pointer',
                    width: '7%',
                    color: '#ebcd1e',
                    backgroundColor: '#87760f',
                    border: 'none',
                    borderRadius: '100%'
                  }}
                > 
                  X
                </button>
              </div>
              <div 
                style={{
                  height: '340px',
                  padding: '10px'
                }}
              >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    height: '100%',
                    overflowY: 'scroll',
                    alignItems: 'center'
                    
                  }}
                >
                  {
                    phonesData.map(data => <LinkWpButton data={data} />)
                  }
                </div>  
              </div>
            </div>
          )
          : (
            <div 
              className='whatsapp-glove-button animate__animated animate__fadeInUp' 
              onClick={() => setIsLinksDisplayActive(!isLinksDisplayActive)}
              style={{ 
                borderRadius: '10px 10px 10px 10px',
              }}
            >
              <img src={WppIcon} width={35} alt="whatsapp" />
            </div>
          )
      }
    </>
  )
}

export default WhatsAppButtonComponent;
