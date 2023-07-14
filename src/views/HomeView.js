import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logado) {
      navigate('/login');
    }
  }, [logado, navigate]);

  if (logado) {
    return (
      <>
        <h1>passou</h1>
      </>
    );
  } else {
    return null; // ou qualquer outra representação quando o usuário não está logado
  }
}

export default Home;
