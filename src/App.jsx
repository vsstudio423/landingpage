import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import imageBanner from './assets/image 2.png'
import imageFounders from './assets/image_founders.png'
import iconHamburgueMenu from './assets/menuHamburguer.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };


  return (
    <div>
      <header>
        <div className="logo">
          <a href="/"><h1>VS Studio</h1></a>
        </div>
        <nav id="nav" className={menuActive ? "menu-hamburger--active" : ""}>
          <a href="/">Inicio</a>
          <a href="/">Tienda</a>
          <a href="/">Encuéntranos</a>
          <a href="/">Contáctanos</a>
          <a className="icon-theme" onClick={toggleTheme}>
            <span id="icon-theme" className={`icon-theme ${theme === "dark" ? "icon-theme--sun" : "icon-theme--moon"}`}></span>
          </a>
        </nav>
        <span className="icon-hamburger" onClick={toggleMenu}>
          <img className="icon-hamburger--element" src={iconHamburgueMenu} alt="Menu" />
        </span>
      </header>
      <main>
        <section className="welcome">
          <article className="information">
            <h1>El Espacio Perfecto Para Fandub</h1>
            <p><b>¿Eres un fanático del anime y te encanta la idea de dar vida a tus personajes favoritos?</b> ¡Estás en el lugar correcto! En nuestra comunidad, te invitamos a unirte a un espacio donde la pasión por el anime y la creatividad se encuentran.</p>
            <a className="link--primary" href="/">Ver Fandubs</a>
          </article>
          <article>
            <img src="" alt="" />
          </article>
        </section>
        <section className="banner">
          <img src={imageBanner} alt="" />
        </section>
        <section className="section">
          <h1 className="title">Nuestros <span className="title-primary">Proyectos</span></h1>
          <article className="cards-container">
            <div className="card__project">
              <img src="./img/image 3.png" alt="" />
              <h2>Oshi No Ko</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo sit amet nunc mattis commodo.</p>
              <a href="/">Ver más</a>
            </div>
            <div className="card__project">
              <img src="./img/image 3.png" alt="" />
              <h2>Boku No Kokoro</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo sit amet nunc mattis commodo.</p>
              <a href="/">Ver más</a>
            </div>
            <div className="card__project">
              <img src="./img/image 3.png" alt="" />
              <h2>100 Novias</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo sit amet nunc mattis commodo.</p>
              <a href="/">Ver más</a>
            </div>
          </article>
          <article>
            <Banner title='¿Quieres Unirte?' text={<><b>¡Nos encantaría tenerte en nuestra comunidad de doblaje fandub! 🎭</b> Si te apasiona el arte de la voz, interpretar personajes o explorar tu creatividad, este es el lugar perfecto para ti.</>} />
          </article>
        </section>
        <section className='section section-pation'>
          <article className="article">
            <h2 className='title-special' >Por Diversión y Pasión</h2>
            <p>En nuestro grupo de fandub, todo lo que hacemos nace del amor por el arte del doblaje y la actuación de voz. 💖 Este proyecto no tiene fines de lucro, ni busca monetización.
            </p> <br /><br />
            <p>🎧 Nuestro objetivo principal es divertirnos, aprender juntos y disfrutar de un pasatiempo que nos apasiona. Queremos ofrecerte un espacio creativo donde puedas explorar tu talento sin presiones, compartir con otros entusiastas y simplemente pasar un buen rato.</p> <br /><br />
            <p>✨ ¡Aquí no hay límites para la imaginación, solo la oportunidad de dar vida a personajes y momentos inolvidables!</p>
          </article>
          <article className="article"></article>
        </section>
        <section className='section section-origen'>
          <article className="article">
            <img src={imageFounders} className='founders' alt="" />
          </article>
          <article className="article">
            <h2 className='title-special'>Nuestro Origen</h2>
            <p>Todo comenzó con un sueño, una pasión compartida y muchas ganas de hacer algo único. VestallDK y Stiff, dos amantes del doblaje y la creatividad, decidieron que no bastaba con simplemente participar en fandubs… ¡había que crear un espacio diferente, un verdadero hogar para quienes disfrutan de dar voz a personajes y emociones! Así nació VS Studio, un servidor donde el fandub no es solo un pasatiempo, sino una experiencia inmersiva llena de aprendizaje, risas y amistad. <br /><br />

              Desde nuestros inicios, hemos crecido con cada voz que se une a esta aventura. No solo somos una comunidad, somos una familia de soñadores que convierten guiones en magia sonora. Con cada proyecto, cada escena y cada interpretación, VS Studio sigue evolucionando, impulsando el talento de nuestros miembros y explorando nuevas formas de hacer doblaje. <br /><br />

              ¿El futuro? 🌟 Más oportunidades, más desafíos, más innovación. Queremos llevar el fandub a otro nivel, apostando por entrenamientos, colaboraciones épicas y producciones de alta calidad. Aquí, tu voz no solo se escucha, se siente, se vive. 🎤✨ ¡Únete a nosotros y hagamos historia en el mundo del doblaje!</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
