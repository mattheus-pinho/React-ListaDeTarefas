import PropTypes from 'prop-types'
import { useState } from 'react';

function Tarefa({titulo, descricao, chave, data, usuario, estado}){
    
    function alterarEstado(e){
        /*Alterar visibilidade do card*/
        var card = document.getElementById(chave) 
        var estadoDoCard = card.ariaChecked;
        if(estadoDoCard){
            console.log("card ativo: ", estadoDoCard)
        }else{
            console.log("card desativado", estadoDoCard)
        }
    }
    const chaveSecundaria = chave + 'a';
    
    return(
        
    <>
        <div className="card_area" id={chaveSecundaria}>
            <div className="main_card">
            <div className="content">
                <div className="upper_content">
                <div className="name_position_info">
                    <div className="part_one">
                    <div className="titulo">{titulo}</div>
                    <div className="sub_content">
                        <div className="descricao">{descricao}</div>
                        <div className="info">{data} • {usuario}</div>
                    </div>
                    </div>
                    </div>
                    <li className="styles.tg-list-item">
                    <input className="tgl tgl-flip" id={chave} type="checkbox" onChange={alterarEstado}/>
                    <label className="tgl-btn" data-tg-off="FAZER" data-tg-on="FEITO!" htmlFor={chave}></label>
                    </li>

                </div>
            </div>
            </div>
        </div>
    </>
    
    )
}

Tarefa.propTypes = {
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,

}


export default Tarefa;