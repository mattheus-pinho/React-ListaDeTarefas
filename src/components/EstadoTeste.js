import React from 'react';

// import { Container } from './styles';

function EstadoTeste({setNome}) {
  return (
  <div>
        <p>Insira o Nome:</p>
        <input type='text' placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
  </div>
  );
}

export default EstadoTeste;