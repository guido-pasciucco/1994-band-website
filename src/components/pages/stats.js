import React from "react";
import fotoVal from '../../assets/members/fotoVal.jpg';
import fotoDiego from '../../assets/members/fotoDiego.jpg';
import fotoGuido from '../../assets/members/fotoGuido.jpg';


const Stats = () => {
    return <>
    <div>
        <div style={{padding:"100px"}}>
            <h3>Bandas con las que compartimos escenario</h3>
            <p>
                107 Faunos - Las Ligas Menores - Javi Punga - 
                Riel - Rayos de la Niñez - El Club Audiovisual , Niño Mercurio etc.
            </p>
        </div>
        <div style={{padding:"100px"}}>
            <h3>Lugares en los que tocamos</h3>
            <p>
                El Amergente Almagro - Cultura del Sur - Club Tucumán -
                Tío Bizarro - La Cigale - Ultra Bar -
                La Cultura del Barrio - Salas Tifón
            </p>
        </div>
        <div className='container'>
            <div className='row styledGrid'>        
                <div className='col-6'>
                    <img src={fotoVal} alt="aeiou" />  
                </div>
                <div className='col-6'>
                    <h3>Valentina Schwarz</h3>
                    <p>Bajo, Teclado y Voz</p>
                </div>
                <div className='col-6'>
                    <img src={fotoDiego} alt="cover EP 2"/>
                </div>
                <div className='col-6'>
                    <h3>Diego Medina</h3>
                    <p>Guitarra</p>
                </div>
                <div className='col-6'>
                    <img src={fotoGuido} alt="cover EP 2"/>
                </div>
                <div className='col-6'>
                    <h3>Guido Pasciucco</h3>
                    <p>Batería</p>
                </div>
            </div>
        </div>
    </div>
    </>
}


export default Stats;