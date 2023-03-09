import React from 'react';
import './About.css'

const About = () => {
    return(
        <>
        <div id="seccion-nosotrxs" className='nosotrxs'>
            <div className='nosotrxs-indice'>
                
                <div className='nosotrxs-indice-semiCirculo'>
                    <h2>NOSOTRXS</h2>
                </div>
                
            </div>

            <div className='nosotrxs-tarjeta'>
                <div className='nosotrxs-tarjeta-izq'>
                    <p className='nostroxs-tarjeta-texto'>Mi nombre es <span>Facundo Berjeli</span>  y soy una suerte de mezcla rara entre baterista y percusionista, <span>un percubaterista</span>.
                    <br />
                    <br />
                    Soy un tipo inquieto que todo el tiempo está pensando cómo hacer mejor las cosas, que no puede dejar las manos quietas y que si lo descuidás un segundo ya planificó mil proyectos.
                    </p>
                    
                </div>
                
                <div className='nosotrxs-tarjeta-der'>
                    <p>Desde hace un par de años me dedico a explorar las distintas músicas de Latinoamérica con los tambores, trabajando como músico sesionista y docente. Hoy quiero utilizar mi conocimiento para ayudar a otras personas, es porque ésto que creé PercuBateristasOnLine, un espacio dnde queremos acercar la percusión a todxs.
                    <br />
                    <br />
                   
                    Nuestro objetivo es que puedas encontrar la percusión para tu canción, que encontremos juntxs el ritmo que termine de darle forma y fuerza, lo que nosotrxs llamamos el ritmo vital.</p>
                </div>
            </div>
        </div>
        </>
        
    )
}

export { About }