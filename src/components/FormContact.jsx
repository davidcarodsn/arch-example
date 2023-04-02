import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const FormContact = ({ keys }) => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [data, setData] = useState({
    user_email: '',
    user_name: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.user_email.length < 1 || data.message.length < 1 || data.user_name < 1) {
      return alert('Todos los campos del formulario son obligatorios')
    }
    setShowCaptcha(true);
  }

  const handleChangeData = (input) => {
    setData({
      ...data,
      [input.target.name]: input.target.value
    });
  }

  const sendEmail = async(captchaValue) => {
    const params = {
      ...data,
      'g-recaptcha-response': captchaValue
    }

    await emailjs.send(
      keys.EMAILJS_SERVICE, 
      keys.CONTACT_EMAILJS_TEMPLATE, 
      params,
      keys.EMAILJS_PUBLIC_KEY, 
      'g-recaptcha-response'
    )
      .then(() => {
        alert('Mail enviado con éxito ✅')
        setData({
          user_email: '',
          user_name: '',
          message: ''
        })
        setShowCaptcha(false)
      })
      .catch(() => alert('Ha ocurrido un error, intentelo mas tarde ⛔'), setShowCaptcha(false))
  }

  return (
    <form onSubmit={handleSubmit} className="form-contact" role="form">
      <div className="row">
        <div className="col-md-6 col-12">
          <input type="text" value={data.user_name} name="user_name" onChange={handleChangeData} required placeholder="Nombre*"/>
        </div>
        <div className="col-md-6 col-12">
          <input type="email" value={data.user_email} onChange={handleChangeData} name="user_email" required placeholder="Email*" />
        </div>
        <div className="col-md-12">
          <textarea name="message" value={data.message} onChange={handleChangeData} className="message" placeholder="Mensaje"></textarea>
        </div>
      </div>
      <div>
        { showCaptcha  
          ? (<ReCAPTCHA sitekey={keys.RECAPTCHA_KEY} onChange={sendEmail}/>) 
          : (<button type="submit" className="au-btn au-btn--pill au-btn--yellow au-btn--big">Enviar</button>)
        }
      </div>
    </form>
  )
}

export default FormContact;
