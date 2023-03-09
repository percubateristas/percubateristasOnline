import React from 'react';
import './Sesionista.css';

const Sesionista = () => {
    return(

        <>
        <div id="seccion-sesionista" className='sesiones'>
            <div className='sesiones-indice'>
                <div className='sesiones-indice-semiCirculo'>
                    <h2>Sesionista</h2>
                </div>
            </div>
                
            <div className='sesiones-tarjeta'>
                <h3 className='sesiones-tarjeta-titulo'>¿Grabamos juntxs?</h3>
                <div className='sesiones-tarjeta-planes'>
                    <div className='sesiones-planes_izq'>
                        <img src="./muestra_A.jpg" alt=""/>
                        <h4>Plan Medio</h4>
                        <h5>- 1 tema -</h5>
                        
                        <div className='sesiones-planes-capa'>
                            
                            <p>1 reunión de 1hs por Zoom/Meet.
                                <br />
                                Formulario para afinar detalles.
                                <br />
                                2 correcciones.
                                <br />Entrega: 2 semanas.
                                <br />
                                Percusión latinoamericana y/o bateria.
                                <br />
                                Contacto directo por WhatsApp.
                            </p>
                        </div>
                    </div>
                    
                    {/* <div className='sesiones-planes_cen' >
                        <img src="./muestra_B.jpg" alt=""/>
                    </div> */}
                    
                    <div className='sesiones-planes_der'>
                        <img src="./hero-muestra.jpg" alt="" />
                        <h4>Plan Disco</h4>
                        <h5>- hasta 5 temas -</h5>
                        <div className='sesiones-planes-capa'>
                            
                            <p>2 reuniones de 1hs por Zoom/Meet.
                                <br />
                                Formulario para afinar detalles.
                                <br />
                                5 correcciones.
                                <br />Entrega: 4 semanas.
                                <br />
                                Percusión latinoamericana y/o bateria.
                                <br />
                                Contacto directo por WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='sesiones-tarjeta-texto'>
                    <div className='sesiones-tarjeta-texto_izq'>Si estás buscando otro tipo de percusión para tu canción, podemos grabar de forma exclusiva para vos.</div>
                    <div className='sesiones-tarjeta-texto_der'>Elegí qué es lo que necesitás!</div>
                </div>
            </div>
        </div>    
            
        
        </>

        
    )
}

export { Sesionista }
