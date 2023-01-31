import React from 'react';
import about1 from '../../assets/aboutImgs/about1.jpg';
import about2 from '../../assets/aboutImgs/about2.jpg';
import about4 from '../../assets/aboutImgs/about4.jpg';

const About = () => {
    return <>
    <div>
        <div className='container' >
            <div className='row styledGrid'style={{ padding:"100px"}}>        
                <div className='col-6'>
                    <img src={about1} className="abtimg" alt="nosotros"></img>
                </div>
                <div className='col-6'>
                    <p>
                    Nos conocimos por pura casualidad en junio del 2015,
                    y el primer día que ensayamos compusimos muy espontáneamente "mensaje".
                    El resto des ese año nos concentramos en seguir componiendo y grabar nuestro primer EP
                    Todo el proceso fue casero y autogestivo, en la casa de Guido, con solo dos micrófonos dinámicos,
                    una placa de audio de dos canales y un software de grabación gratuito.
                    El 5 de diciembre de 2015, publicamos por primera vez en bandcamp y a fin de año tocamos por primera vez.
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
                    <img src={about2} className="abtimg" alt="nosotros"></img>
                </div>
                <div className='col-6'>
                    <img src={about4} className="abtimg" alt="nosotros"></img>
                </div>
                <div className='col-6'>
                    <p>
                        En menos de 2 años de actividad, logramos compartir escenario con muchos
                        de los grupos más relevantes de la escena de aquel entonces, así como También
                        presentarnos en varios de los escenarios (auditorios, centros culturales) más
                        importantes del under de Buenos Aires. Tras la separación de la banda, nuestras
                        canciones siguieron circulando por internet hasta llegar a otros países y generar
                        una comunidad de fanáticos de la banda, especialmente de Perú, México y Chile.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default About;