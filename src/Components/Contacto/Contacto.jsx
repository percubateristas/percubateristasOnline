import React, { useState } from "react";
import "./Contacto.css";
import { db } from "../../firebaseConfig/firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const Contacto = () => {

    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [cuerpo, setCuerpo] = useState("");

    const mensajesCollection = collection(db, "mensajes");

    const store = async (e) => {
        e.preventDefault();
        await addDoc(mensajesCollection, {
            nombre: nombre,
            email: email,
            cuerpo: cuerpo,
        });
    };



    const exitoso = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Operación realizada con éxito!",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    
    return (

        <>
            <div className="contacto">
                <div className='contacto-indice'>
                    <div id="seccion-contacto" className='contacto-indice-semiCirculo'>
                        <h2>Contacto</h2>
                    </div>
                </div>

                <div className='contacto-tarjeta'>
                    <div className='contacto-tarjeta_A'>
                        <form onSubmit={store} className='tarjeta_A-form' action="">
                            <label htmlFor="">Nombre:</label>
                            <input value={nombre}
                                onChange={(e) => setNombre(e.target.value)} type="text" maxLength={30} minLength={1} />
                            <label htmlFor="" >Correo:</label>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required />
                            <label htmlFor="">Comentario:</label>
                            <textarea value={cuerpo}
                                onChange={(e) => setCuerpo(e.target.value)} name="" id="" cols="5" rows="5"></textarea>
                            <button className='tarjeta_A-form-bnt' onClick={() => {exitoso();}}>Enviar</button>
                        </form>
                    </div>
                    <div className='contacto-tarjeta_B'>
                        <div className='tarjeta_B-texto'>
                            <h4>Seguinos en nuestras redes</h4>
                        </div>
                        <div className='tarjeta_B-redes'>

                            <div><a href="https://www.facebook.com/facuberjeli98?mibextid=ZbWKwL" target={'_blank'} rel="noreferrer"><i className="bi-facebook btn-facebook-2"></i></a></div>
                            <div><a href="https://instagram.com/facundoberjeli?igshid=ZDdkNTZiNTM=" target={'_blank'} rel="noreferrer"><i className="bi-instagram btn-instagram-2"></i></a></div>
                            <div><a href="https://youtube.com/@percubateristasonline" target={'_blank'} rel="noreferrer"><i className="bi-youtube btn-youtube-2"></i></a></div>

                        </div>
                    </div>
                </div>

            </div>

        </>




    )
}

export { Contacto }