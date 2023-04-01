import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


const FormFooter = ({ keys }) => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [user_email, setUser_Email] = useState();
  const footerForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user_email.length < 1) {

    }
    setShowCaptcha(true);
  }

  const sendEmail = async(captchaValue) => {
    const params = {
      user_email,
      'g-recaptcha-response': captchaValue
    }

    await emailjs.send(
      keys.FOOTER_EMAILJS_SERVICE, 
      keys.FOOTER_EMAILJS_TEMPLATE, 
      params,
      keys.EMAILJS_PUBLIC_KEY, 
      'g-recaptcha-response'
    )
      .then(() => alert('Mail enviado con éxito ✅'), setShowCaptcha(false))
      .catch(() => alert('Ha ocurrido un error, intentelo mas tarde ⛔'), setShowCaptcha(false))
  }

  return (
    <form ref={footerForm} onSubmit={handleSubmit} className="form-footer">
      <input type="email" value={user_email} onChange={(e) => setUser_Email(e.target.value)} className="form__input" placeholder="email@email.com" />
      <button type="submit" className="au-btn au-btn--yellow au-btn--white au-btn--submit">Enviar</button>
      { showCaptcha && <ReCAPTCHA sitekey={keys.RECAPTCHA_FOOTER_KEY} onChange={sendEmail}/> }
    </form>
  )
}

export default FormFooter;
