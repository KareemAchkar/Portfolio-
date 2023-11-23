import './Contact.scss'
import Loader from 'react-loaders'
import { useState, useRef } from 'react'
import { useEffect } from 'react'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer)
  }, [])

  const form = useRef()

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'kareemAchkar',
        'template_xockxra',
        form.current,
        'lqvtMbFUGgL68LQvQ'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          console.log('Failed to send the message, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              letterClass={letterClass}
              index={15}
            />
          </h1>
          <p>
            I am interested in full-time opportunities ~ especially ambitious or
            large projects. However, if you have other requests or questions,
            don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul className='contact-list'>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="from_name"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>

                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kareem Achkar,
          <br />
          Turkey,
          <br />
          Istanbul,
          <br />
          Şişli 19. 22000 <br />
          <span>kareemalachkar@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 1961045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 1961045]}>
              <Popup>Kareem Achkar lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}
