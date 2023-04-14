import React, { useState } from 'react';
import WppIcon from '../assets/img/wpp-icon.png'

const WhatsAppButtonComponent = () => {
  const [isLinksDisplayActive, setIsLinksDisplayActive] = useState(false);

  return (
    <>
      {
        isLinksDisplayActive 
          ? (
            <div 
              className='whatsapp-chat-container animate__animated animate__fadeIn' 
              style={{ 
                display: isLinksDisplayActive ? 'flex' : 'none', 
                borderRadius: '10px 10px 10px 0px',
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
                    fontSize: '20px',
                    cursor: 'pointer',
                    width: '10%',
                    color: 'white',
                    backgroundColor: 'transparent',
                    border: 'none'
                  }}
                > 
                  X
                </button>
              </div>
              <div>
                <a href="https://twitch.tv/coscu" target='_blank'>asdasd</a>
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
