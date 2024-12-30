import React from 'react'

const About = () => {
  return (
    <section className="about wrapper">
      <h2 className="about__heading h2">Pourquoi Everest Kids ?</h2>
      <div style={{ display: 'none' }}>
        <img src="images/81ae02d7bed0742c434c2de5a2e2e290.png" alt="" />
        <img src="images/589f5bbaa8bc267f716f54c1708b313a.png" alt="" />
        <img src="images/5774d106234376bd89fc5acfb58bd032.png" alt="" />
      </div>
      <ul className="about__list">
        <li>
          <h3 className="about__subheading h3">
            Des évènnements hébdomadaires
          </h3>
          <p className="about__description">
            Joséphine, avec son dynamisme naturel et son sourire communicatif,
            son sourire communicatif, communicatif
          </p>
        </li>
        <li>
          <h3 className=" about__subheading h3">Des Cours Collectifs</h3>
          <p className="about__description">
            Joséphine, avec son dynamisme naturel et son sourire communicatif,
            son sourire communicatif, communicatif
          </p>
        </li>
        <li>
          <h3 className="about__subheading h3">
            Un espace Aqua pour les enfants
          </h3>
          <p className="about__description">
            Joséphine, avec son dynamisme naturel et son sourire communicatif,
            son sourire communicatif, communicatif
          </p>
        </li>
      </ul>
    </section>
  )
}

export default About
