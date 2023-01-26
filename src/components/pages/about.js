import React from 'react';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';
import about4 from '../../assets/about4.jpg';

const About = () => {
    return <>
        <div className='container' >
            <div className='row'style={{ padding:"100px"}}>        
                <div className='col-6'>
                    <img src={about1} width="300px"></img>
                </div>
                <div className='col-6'>
                    <p>
                    El primer día que nos conocimos creamos el borrador de mensaje
                    Durante toda la segunda mitad de 2015 nos concentramos en componer y grabar nuestro primer EP
                    Todo el proceso fue casero y autogestivo, en la casa de Guido, con solo dos micrófonos dinámicos,
                    una placa de audio de dos canales y un software de grabación gratuito.
                    El 5 de diciembre de 2015, publicamos por primera vez en bandcamp.
                    </p>
                </div>
                <div className='col-6'>
                    <p>
                    Durante 2016, a medida que pasaban los ensayos y recitales, fuimos creando temas nuevos.
                    Meses antes de publicar nuestro segundo EP (Marzo 2017), los temas que los component ya eran parte de nuestro repertorio
                    y quienes nos han visto en vivo ya los conocían al momento del lanzamiento.
                    Lo grabamos en la casa de valentina, y a diferencia del primer EP, se compone de tomas en vivo.
                    </p>
                </div>
                <div className='col-6'>
                    <img src={about2} width="300px"></img>
                </div>
                <div className='col-6'>
                    <img src={about4} width="300px"></img>
                </div>
                <div className='col-6'>
                    <p>
                    Luego de un período de inactividad entre 2018 y 2021.
                    Nos reencontramos en 2022, (madurez, la vida).
                    Darle un giro al proyecto más lindo que tuvimos en nuestras vidas, 
                    y en un paralelismo con ese primer año 2015, 2022 también fue de puro trabajo interno para terminarlo con un recital íntimo
                    entre amigos para después empezar 2023 tocando en uno de los escenarios más importantes del under argentino.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default About;