import React from 'react';



function Alerta({mensagem, tipo}) {

  switch (tipo) {
    case 'erro':
      return(
        <div className="alert alert-danger" role="alert">
           {mensagem}
        </div>
      );
      break;
    case 'alerta':
      return(
        <>
          <div className="alert alert-warning" role="alert">
             {mensagem}
          </div>
        </>
      );
      break;
    case 'sucesso':
      return(
        <>
          <div className="alert alert-success" role="alert">
             {mensagem}
          </div>
        </>
      );
      break;
    case 'neutro':
      <div className="alert alert-dark" role="alert">
         {mensagem}
      </div> 
    break;
    default:
      break;
  }
  
  }
export default Alerta;