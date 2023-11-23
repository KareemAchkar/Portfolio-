import { Link, NavLink } from 'react-router-dom'
import './SideBar.scss'
import LogoSubtitle from '../../assets/images/letter-k-icon-png-6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'

export const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoSubtitle} alt="logoSub" />
        </Link>

        <nav className={showMenu ? 'mobile-show' : ''}>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>

          <FontAwesomeIcon
            onClick={() => setShowMenu(false)}
            icon={faClose}
            color="#00a9c9"
            size="3x"
            className="close-icon"
          />
        </nav>

        <ul className="nav-list">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kareem-achkar-889b18261/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/KareemAchkar"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="skype:live:.cid.7704ff6725c94aec"
            >
              <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
          </li>
        </ul>

        <FontAwesomeIcon
          onClick={() => setShowMenu(true)}
          icon={faBars}
          color="#00a9c9"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </>
  )
}
