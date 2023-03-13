import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebaseConfig/firebase";
import Swal from "sweetalert2";
import './Styles.css';

const SignUp = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
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

  const error = () => {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Datos incorrectos",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <button
        className="btn-crear"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCreate"
      >
        Crear usuarix
      </button>

      <div
        class="modal fade"
        id="exampleModalCreate"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="titulo">
                Crear usuarix
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="sign-in-container">
                <form onSubmit={SignUp}>
                  <h1 id="titulo-1">Creá una cuenta</h1>
                  <div className="inputs">
                    <input
                    id="input-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <input
                    id="input-password"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  </div>
                  <p id="mensaje">
                    {authUser ? (
                      <>
                        <p>Cuenta creada con éxito</p>
                      </>
                    ) : (
                      <>
                        <p>Aún no has creado tu cuenta</p>
                      </>
                    )}
                  </p>
                  <button
                    id="btn-ingresar"
                    className="btn-crear"
                    onClick={authUser ? error : exitoso}
                    type="submit"
                  >
                    Crear
                  </button>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn-inicio"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
