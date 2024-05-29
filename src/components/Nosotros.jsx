import React from 'react';
import '../style/Nosotros.css';
import DanielImage from '../assets/daniel.jpg';
import DavidImage from '../assets/david.jpg';

const Nosotros = () => {
  return (
    <div className='container'>
      <div className='nosotros-container'>
        <h1 className='nosotros-title'>Nosotros</h1>
        <div className='nosotros-content'>
          <section className='intro'>
            <p>
              Bienvenidos a <strong>WikiSistemas</strong>, una plataforma diseñada para facilitar el acceso a recursos educativos para los estudiantes de Ingeniería de Sistemas de la Universidad de Antioquia.
            </p>
          </section>
          <section className='creators'>
            <h2>Nuestros Creadores</h2>
            <div className='creators-cards'>
              <div className='creator-card'>
                <img src={DanielImage} alt='Daniel Agudelo' className='creator-image' />
                <h3>Daniel Agudelo</h3>
                <p>Co-Fundador y Desarrollador</p>
              </div>
              <div className='creator-card'>
                <img src={DavidImage} alt='David Gómez' className='creator-image' />
                <h3>David Gómez</h3>
                <p >Co-Fundador y Desarrollador</p>
              </div>
            </div>
          </section>
          <section className='mission'>
            <h2>Nuestra Misión</h2>
            <p>
              Facilitar el acceso a material de estudio organizado y accesible en un solo lugar, promoviendo una comunidad de aprendizaje colaborativo.
            </p>
          </section>
          <section className='vision'>
            <h2>Nuestra Visión</h2>
            <p>
              Convertirnos en el principal recurso educativo para los estudiantes de Ingeniería de Sistemas, apoyando su éxito académico y profesional.
            </p>
          </section>
          <section className='values'>
            <h2>Nuestros Valores</h2>
            <p>
              En <strong>WikiSistemas</strong>, valoramos la colaboración, la accesibilidad y la excelencia académica. Creemos en la importancia de compartir conocimiento y recursos para el beneficio de toda la comunidad estudiantil.
            </p>
          </section>
          <section className='history'>
            <h2>Nuestra Historia</h2>
            <p>
              La idea de <strong>WikiSistemas</strong> surgió cuando los fundadores, Daniel Agudelo y David Gómez, se dieron cuenta de las dificultades que muchos estudiantes enfrentan para encontrar material de estudio en un mismo punto y de forma organizada. Decidieron crear una plataforma donde todo el material necesario estuviera concentrado y accesible para todos los estudiantes de la carrera.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;



