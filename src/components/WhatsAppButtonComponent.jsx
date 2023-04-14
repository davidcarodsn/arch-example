import React, { useState } from 'react';
import WppIcon from '../assets/img/wpp-icon.png';
import WppIconHead from '../assets/img/ws-head.png';
import LinkWpButton from './LinkWpButton';

const WhatsAppButtonComponent = () => {
  const [isLinksDisplayActive, setIsLinksDisplayActive] = useState(true);

  const phonesData = [
    {
      phone: '543446374867',
      area: 'Ventas Concordia',
    },
    {
      phone: '543446507870',
      area: 'Administracion Corcordia',
    },
    {
      phone: '543446604155',
      area: 'Ventas Colon',
    },
    {
      phone: '543446583228',
      area: 'Ventas Villa Elisa',
    },
    {
      phone: '543446354009',
      area: 'Ventas/administracion CdelU',
    },
    {
      phone: '543446636419',
      area: 'Ventas Gualeguaychu',
    },
    {
      phone: '543446385621',
      area: 'Administracion Gualeguaychu',
    },
    {
      phone: '543446347821',
      area: 'Ventas Urdinarrain',
    },
    {
      phone: '54344659841',
      area: 'Administracion Urdinarrain',
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
                  height: '100px',
                  backgroundColor: '#adafb3',
                  borderRadius: '10px 10px 0px 0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  padding: '20px'
                }}
              >
                <img src={WppIconHead} width="70px" alt="wpp-logo" />
                <span style={{ color: '#126fb2', fontWeight: '700', fontSize: '20px' }}>
                  ¡Comunícate 
                  <br />
                  con nosotros!
                </span>
                <button 
                  onClick={() => setIsLinksDisplayActive(false)}
                  style={{
                    fontSize: '15px',
                    cursor: 'pointer',
                    width: '7%',
                    color: '#adafb3',
                    backgroundColor: '#54575c',
                    border: 'none',
                    borderRadius: '100%',
                    marginLeft: '55px'
                  }}
                > 
                  X
                </button>
              </div>
              <div 
                style={{
                  height: '340px',
                  padding: '10px',
                  overflow: 'auto'
                }}
              >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    alignItems: 'center'
                  }}
                >
                  {
                    phonesData.map((data, i )=> <LinkWpButton data={data} index={i} />)
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
