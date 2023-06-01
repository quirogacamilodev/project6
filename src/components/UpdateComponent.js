import React, { useState } from 'react';

const DeleteComponent = () => {
  const [itemId, setItemId] = useState('');

  const handleChange = (e) => {
    setItemId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar la solicitud de eliminación al servidor o realizar alguna acción con el ID del elemento
    console.log(itemId);
    // Restablecer el campo después de enviar la solicitud de eliminación
    setItemId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item ID:
        <input type="text" value={itemId} onChange={handleChange} />
      </label>
      <button type="submit">Delete</button>
    </form>
  );
};

export default DeleteComponent;
