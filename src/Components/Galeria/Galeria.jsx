import React from 'react';
import './Galeria.css';
import Imagen5 from './D-galeria-5.jpg';

const Galeria = () => {
    return(
        <>
            <div id="seccion-galeria" className="galeria">
                <div className='galeria-indice'>
                    <div className='galeria-indice-semiCirculo'>
                        <h2>Galería</h2>
                    </div>
                </div>

                <div className='galeria-carrusell'>

                <div id="carouselExampleControls" className="carousel-products " data-bs-ride="carousel">
                        <div className="cards-wrapper">

                            <div className="carousel__container">
                        
                                <div id='item-producto' className='carousel__item'>
                                <iframe className='carousel__item__img' src='https://www.instagram.com/p/CdgvyHUJh87/embed' frameborder="0" allowtransparency="true"></iframe>
                                </div>

                                <div id='item-producto' className='carousel__item'>
                                <iframe className='carousel__item__img' src='https://www.instagram.com/p/CeHTaoSJ8Ul/embed' frameborder="0"></iframe>
                                </div>

                                <div id='item-producto' className='carousel__item'>
                                <iframe className='carousel__item__img' src='https://www.instagram.com/p/ComudD6rjQe/embed' frameborder="0"></iframe>
                                </div>

                                <div id='item-producto' className='carousel__item'>
                                <iframe className='carousel__item__img' src='https://www.instagram.com/p/CdgvyHUJh87/embed' frameborder="0" allowtransparency="true"></iframe>
                                </div>

{/* ---------------------------------------   Estructura para galería de imágenes  ----------------------------     */}


                                {/* <div id="item-producto" className="carousel__item">
                                    <img className="carousel__item__img" src="D-galeria-3.jpg" alt=""/>
                                    <div className="carousel__item__details">
                                        <div>
                                            <p className="carousel__item__details__title" text="Nombre"></p>
                                            <p className="carousel__item__details__subtitle" text="Descripcion">Hola Mundo</p>
                                            
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div id="item-producto" className="carousel__item">
                                    <img className="carousel__item__img" src={Imagen5} alt=""/>
                                    <div className="carousel__item__details">
                                        <div>
                                            <p className="carousel__item__details__title" text="Nombre"></p>
                                            <p className="carousel__item__details__subtitle" text="Descripcion">Hola Mundo</p>
                                            
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div id="item-producto" className="carousel__item">
                                    <img className="carousel__item__img" src="D-galeria-4.jpg" alt=""/>
                                    <div className="carousel__item__details">
                                        <div>
                                            <p className="carousel__item__details__title" text="Nombre"></p>
                                            <p className="carousel__item__details__subtitle" text="Descripcion"></p>
                                            
                                        </div>
                                    </div>
                                </div> */}
                                
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export { Galeria }