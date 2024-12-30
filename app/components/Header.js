'use client'
import React, { useState } from 'react'

const Header = () => {
  const [isShow, setIsShow] = useState(true)
  return (
    <header className="header">
      <div className="header__nav-wrap">
        <a>
          <img
            className="header__logo"
            src="/images/5ecfc1c4f6362d93f658400d63d9fd5e.png"
          />
        </a>
        <button
          className={`${isShow ? 'show-nav' : ''} header__button`}
          onClick={() => setIsShow(!isShow)}
        >
          <svg className="hamburger" viewBox="0 0 100 100" width="40">
            <rect
              className="line top"
              width="80"
              height="5"
              x="10"
              y="22"
              rx="6"
            ></rect>
            <rect
              className="line middle"
              width="80"
              height="5"
              x="10"
              y="47"
              rx="6"
            ></rect>
            <rect
              className="line bottom"
              width="80"
              height="5"
              x="10"
              y="72"
              rx="6"
            ></rect>
          </svg>
        </button>
      </div>
      <div className={`${isShow ? 'show-nav' : ''} header__nav-main`}>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <a className="header__link">Acceuil</a>
            </li>
            <li>
              <a className="header__link">Studio</a>
            </li>
            <li>
              <a className="header__link">Cours Collectifs</a>
            </li>
            <li>
              <a className="header__link">Planning</a>
            </li>
            <li>
              <a className="header__link">Coachs</a>
            </li>
            <li>
              <a className="header__link">Blog</a>
            </li>
          </ul>
          <ul className="header__nav-list">
            <li>
              <a className="header__link">Spa</a>
            </li>
            <li>
              <a className="header__link">Solution Entreprise</a>
            </li>
            <li>
              <a className="header__link">Everest Kids</a>
            </li>
          </ul>
        </nav>
        <ul className="header__auth-container">
          <li>
            <a className="btn btn--primary btn--orange">M’inscrire</a>
          </li>
          <li>
            <a className="btn btn--primary btn--dark">Séance Gratuite</a>
          </li>
          <li>
            <a className="header__link">Me connecter</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
