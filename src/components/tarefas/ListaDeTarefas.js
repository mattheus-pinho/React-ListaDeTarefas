import React from 'react';
import Tarefa from './Tarefa';

function ListaDeTarefas(props) {
    const tarefa = props.tarefas;
  return (
    <>
        {tarefa.map((tarefa, index) =>(
            <div key={index}>
                <Tarefa titulo={tarefa.titulo} descricao={tarefa.descricao} chave={index} data="00/00/0000" usuario="Matheus"/>
            </div>
        ))}
    </>
  );
}

export default ListaDeTarefas;