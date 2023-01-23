import React from 'react';
import ep1cover from '../../assets/ep1cover.jpg';
import ep2cover from '../../assets/ep2cover.png';
import aeioucover from '../../assets/aeioucover.jpg';
import tapanueva from '../../assets/tapanueva.jpg';

const Music = () => {
    return <>
        <h3>ESTO ES EL MUSIC</h3>
        <div className='container'>
            <div className='row'>        
                <div className='col-6'>
                    <img src={ep1cover} alt="cover EP 1" width={400} />
                </div>
                <div className='col-6'>
                    <h3>EP 1</h3>
                    <h5>Diciembre 2015</h5>
                    <p>primeros temas creados durante 2015</p>
                    <ul>
                        <li>mensaje</li>
                        <li>a las 4</li>
                        <li>nada que hacer</li>
                        <li>en mi mente</li>
                        <li>historias de mentirita</li>
                    </ul>
                </div>
                <div className='col-6'>
                    <img src={aeioucover} alt="aeiou" width={400} />  
                </div>
                <div className='col-6'>
                    <h3>AEIOU (simple)</h3>
                    <h5>Enero 2017</h5>
                    <p>Parte del compilado Música para Merendar #1 de The merienda club</p>
                    <ul>
                        <li>AEIOU</li>
                    </ul>
                </div>
                <div className='col-6'>
                    <img src={ep2cover} alt="cover EP 2" width={400}/>
                </div>
                <div className='col-6'>
                    <h3>EP 2</h3>
                    <h5>Marzo 2017</h5>
                    <p>temas que surgieron durante 2016 mientras tocábamos</p>
                    <ul>
                        <li>al abrir los ojos</li>
                        <li>el sol del invierno</li>
                        <li>sabes</li>
                        <li>chino</li>
                    </ul>
                </div>
                <div className='col-6'>
                    <img src={tapanueva} alt="cover EP 2" width={400}/>
                </div>
                <div className='col-6'>
                    <h3>LP 1</h3>
                    <h5>Junio 2023</h5>
                    <p>primer disco largo, símbolo de una nueva etapa luego de 5 años de inactividad</p>
                    <ul>
                        <li>esta vez es para siempre</li>
                        <li>lejos de la ciudad</li>
                        <li>llgjfd lksdfjfglkfd</li>
                        <li>ad dsfklgjsfd gagad</li>
                        <li>udad</li>
                        <li>llgjfdlkfd</li>
                        <li>ad dsfklgjsfd g</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Music;

/*

Acá estarían los 3 EP solo la carátula
cuando clickeas en uno de ellos se abren la lista de temas y más info sobre el disco en generral
En cada tema podés clickear y te sale la letra

info de cada disco:

Año lanzamiento: 2015 - 2017
Duración: 15min - 11min
info (bio): contando un poco como se grabó y el contexto.
botón de play para cada tema

Acá va a ser un sector muy dinámico de la pagina, van a estar nuestros 3 lanzamientos (ep1, ep2 y aeiou)
Haces click en la tapa de cada uno y sale la lista de temas, les podes dar play y podes acceder a la letra
También al hacer click aparece una mini bío de cada lanzamiento y el año en el que salió
Acá podría hacer falta un musicDetails, un componente aparte para visualizar el disco individualmente

*/