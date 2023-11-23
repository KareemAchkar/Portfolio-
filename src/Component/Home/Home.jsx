import Loader from 'react-loaders'
import './Home.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/Kletter.png'
import { useEffect, useState } from 'react'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { Logo } from './Logo/Logo'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'e', 'e', 'm']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer)
  }, [])
 
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <div className="text-Hi">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
            </div>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={22}
            />
          </h1>
          <h2>Front End Developer / React Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="square-spin" />
    </>
  )
}
