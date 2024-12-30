import React from 'react'

const Courses = () => {
  const items = [0, 1, 2, 3]
  return (
    <section className="courses wrapper">
      <div className="courses__header">
        <h2 className="h2 courses__heading">
          Cours Collectifs pour les enfants
        </h2>
        <div className="courses__filter">
          <p className="courses__label">Cours par age</p>
          <div className="courses__buttons">
            <button className="btn btn--secondary btn--dark btn--dark-active">
              Tous les Cours
            </button>
            <button className="btn btn--secondary btn--dark ">
              3 mois - 5 ans
            </button>
            <button className="btn btn--secondary btn--dark ">
              6 ans - 14 ans
            </button>
          </div>
        </div>
      </div>

      <ul className="courses__list">
        {items.map((item) => (
          <li key={item} className="courses__item">
            <div className="gradient--image">
              <img
                className="courses__image"
                src="images/14e3216f439c0a899cce3e326a7fb927.jpg"
                alt=""
              />
            </div>
            <div className="courses__content">
              <img
                src="images/59712dcea652b5a3a1732ae6bee54966.png"
                alt=""
                className="courses__name"
              />
              <p className="courses__description">
                C’est un cours de cyclisme en salle alliant musique, terrains
                variés et coaching.
              </p>
              <a
                className="courses__link btn btn--primary btn--transparent"
                href=""
              >
                Voir Plus
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Courses
