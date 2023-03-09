import React from 'react';
import './Hero.css'
import { useState } from 'react';


const Hero = ({isActive}) => {
    console.log(isActive);
    return(
        <>
         <div id="seccion-hero" className={`hero ${ isActive ? 'abierto' : '' }`}>
            <div className='container container-hero'>
               <div className='hero-texto'>
                    <div className='hero-texto-mov'>
                       <p>Queremos ayudarte a encontrar el ritmo vital de la música a través de la percusión.
                        </p>
                    </div>
                    
                    <a className='hero-btn-a' href='#seccion-nosotrxs'><button className='hero-btn'>Nosotrxs</button></a> 
                </div>

               <div className='hero-imagen'>
                    <img src="./D-hero.jpg" alt="Facundo Berjeli" />
                </div> 
            </div>
            
         </div>
         
        </>
       
    )
}

export { Hero }