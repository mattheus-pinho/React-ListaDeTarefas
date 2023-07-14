import React from 'react';
import { useState } from 'react';
import validator from 'validator'
import Alerta from '../avisos/Alerta';
import axios from 'axios';


function RegisterForm( {closeModal}) {
    
    
    const [validar, setValidar] = useState(true);
    const [erro, setErro] = useState();
    const [email, setEmail] = useState();
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    
    function cadastrarUsuario(e){
        e.preventDefault();
        validarFormulario(); 
        
        if(validar){
            const url = 'http://localhost:3030/cadastrarusuario';

            const data = {
                nome: nome,
                email: email,
                senha: senha
            };

            axios.post(url, data)
                .then(response => {
                    closeModal();
                })
                .catch(error => {
                   if(error.response.status == 409){
                    setValidar(false);
                    return setErro('E-mail já cadastrado.');
                   }
                });
            
        }
    }

    function validarFormulario(){       
        if (validator.isEmail(email)) {
            setValidar(true);
        } else {
            setValidar(false);
            return setErro('E-mail invalido.');
        }
        
        if(nome !== null){
            setValidar(true);
        }else{
            setValidar(false);
            return setErro('Nome invalido ou vazio.')
        }

        if(senha !== null){
            setValidar(true);
        }else{
            setValidar(false);
            return setErro('Insira uma senha valida')
        }
    }

  return (
    <>
        <div className="form-page">
            <div className="form">
                <div>
                    <h1>Cadastro</h1>
                </div>
                <br></br>
                <form  className="register-form" onSubmit={cadastrarUsuario}>
                    <input type='text'placeholder='Nome Completo'required onChange={(e) => setNome(e.target.value)}/>
                    <input type="mail" placeholder="E-mail" required onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha"required onChange={(e) => setSenha(e.target.value)}/>
                    <button type='submit'>Cadastrar</button>
                    <p className="message">Já possui conta? entre <a href="" onClick={closeModal}>aqui</a></p>
                    <br></br>
                </form>
                {!validar &&(
                    <>
                        <Alerta tipo='erro' mensagem={erro}/>
                    </>
                )}
            </div>
        </div>
    </>
  );
}

export default RegisterForm;