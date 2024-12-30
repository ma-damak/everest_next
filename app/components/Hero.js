import React from 'react'

const Hero = () => {
  return (
    <section className="hero wrapper ">
      <div>
        <h1 className="h1 gradient--text">Everest Kids</h1>
        <p className="hero__description">
          Chez Everest Sport Club, bénéficiez de l’expertise des meilleurs
          coachs sportifs de la région. Spécialisés en fitness, musculation et
          coaching personnalisé, ils vous accompagnent pour atteindre vos
          objectifs rapidement et efficacement.
        </p>
        <div className="hero__links">
          <a href="" className="btn btn--primary btn--orange">
            Consultez le Planning
          </a>
          <a href="" className="btn btn--primary btn--dark">
            Séance d’essai Gratuite
          </a>
        </div>
      </div>

      <div>
        <img
          className="hero__image rounded"
          src="images/fb189fb057f056cc9b11137f01dc27de.png"
          alt=""
        />
      </div>
    </section>
  )
}

export default Hero
