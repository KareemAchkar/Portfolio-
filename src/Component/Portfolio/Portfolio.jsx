import './Portfolio.scss'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

export const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const getPortfolio = async () => {
    const loadPortfolio = await getDocs(collection(db, 'portfolio'))

    const loadedPortfolio = loadPortfolio.docs.map((doc) => doc.data())
    setPortfolios(loadedPortfolio)
    console.log(loadPortfolio)
  }

  useEffect(() => {
    getPortfolio()
  }, [])
  
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            index={15}
          />
        </h1>

        <div className="images-container">
          {portfolios.map((port, index) => (
            <div key={index} className="image-box">
              <img src={port.image} className="portfolio-image" alt="portfolio" />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}
