import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import SignUp from "./../UserSession/SignUp";

const DivInicioSesion = () => {
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

  return (
    <>
      <div className="perculoops-reproductor-btn-sesion">
        {authUser ? (
          <></>
        ) : (
          <>
            <h5>
              Iniciá sesión para descargar los audios. Si no tenés una cuenta,
              create una:
            </h5>{" "}
            <SignUp />
          </>
        )}
      </div>
    </>
  );
};

export default DivInicioSesion;
