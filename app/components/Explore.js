import React from 'react'

const Explore = () => {
  return (
    <section className="explore wrapper">
      <div className="explore__header">
        <h2 className="explore__heading h2">
          Découvrir l’ambiance de nos cours collectifs
        </h2>
        <div className="explore__links">
          <a className="btn btn--primary btn--orange" href="">
            Consultez le Planning
          </a>
          <a className="btn btn--primary btn--dark" href="">
            Séance d’essai Gratuite
          </a>
        </div>
      </div>

      <img
        className="rounded explore__image"
        src="images/8955f20193581aed1db6aae06332e03b.jpg"
        alt=""
      />
    </section>
  )
}

export default Explore
