import React from 'react'

const Coaches = () => {
  const buttons = [0, 1, 2, 3, 4, 5]
  return (
    <section className="coaches ">
      <h2 className="h2 coaches__heading wrapper ">Les Coachs du Cours</h2>
      {/* hethi li fiha el grid */}
      <div className="coaches__container">
        <div className="coaches__image-container">
          <div className="gradient--image">
            <img
              className="coaches__image"
              src="images/ba61db391afac4be0ddf3bdd4be0ef28.jpg"
            />
          </div>

          <ul className="coaches__tags">
            <li>
              <button className="btn btn--transparent btn--three">
                Energie
              </button>
            </li>

            <li>
              <button className="btn btn--transparent btn--three">Folie</button>
            </li>
            <li>
              <button className="btn btn--transparent btn--three">
                Dynamique
              </button>
            </li>
            <li>
              <button className="btn btn--transparent btn--three">Cool</button>
            </li>
            <li>
              <button className="btn btn--transparent btn--three">Fun</button>
            </li>
            <li>
              <button className="btn btn--transparent btn--three">
                Motivante
              </button>
            </li>
            <li>
              <button className="btn btn--transparent btn--three">
                Pleine de vie
              </button>
            </li>
          </ul>
        </div>

        <div className="coaches__main">
          <ul className="coaches__buttons">
            {buttons.map((button) => (
              <li key={button}>
                <button className="coaches__button">
                  <img
                    src="images/ba61db391afac4be0ddf3bdd4be0ef28.jpg"
                    alt=""
                  />
                </button>
              </li>
            ))}
          </ul>
          <div className="coaches__content">
            <h3 className="coaches__name  gradient--text">Joséphine</h3>
            {/* <div className="coaches__image-container">
          <img src="images/bea7be212de9b024aee1ace1a1087be0.jpg" alt="" />
        </div> */}
            <p className="coaches__description">
              Au Studio Biking, notre coach Joséphine vous guide à travers des
              cours variés pour vous aider à atteindre vos objectifs dans une
              ambiance motivante et dynamique.
            </p>
            <div className="coaches__links">
              <a className="btn btn--primary btn--dark" href="">
                Consultez le Planning
              </a>
              <a className="btn btn--primary btn--orange" href="">
                Séance d’essai Gratuite
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coaches
