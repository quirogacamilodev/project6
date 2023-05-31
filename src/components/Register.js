import React from 'react';
import RegisterForm from './RegisterForm';

const ParentComponent = () => {
  const handleRegister = (username, email, password) => {
    // Aquí puedes implementar la lógica de registro de usuarios
    // ...
    console.log('Registrando usuario:', username, email, password);
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default ParentComponent;
//falta configurar, aun no funciona onRegister