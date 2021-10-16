import React, { useState } from "react";
import GoogleLogin from "react-google-login";

const App = () => {
  const [dataUser, setDataUser] = useState(false);

  const gogoleSucess = (resp) => {
    const {
      profileObj: { name, email, imageUrl },
    } = resp;
    setDataUser({ name, email, imageUrl });
  };

  const googleFailure = () => {
    return false;
  };

  const renderDataUser = () => {
    return (
      <div>
        <p>
          <img src={dataUser.imageUrl} alt="Avatar" />
        </p>
        <h2>{dataUser.name}</h2>
        <h2>{dataUser.email}</h2>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div>
        <h2>Faça login em sua conta do Google</h2>
        {dataUser === false ? (
          <GoogleLogin
            clientId="379117665157-rsj7n0bflu6gfsrlh8em7nar8vfvb7rt.apps.googleusercontent.com"
            buttonText="Continuar com o Google"
            onSuccess={gogoleSucess}
            onFailure={googleFailure}
          />
        ) : (
          renderDataUser()
        )}
      </div>
    </React.Fragment>
  );
};
export default App;
