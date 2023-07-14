import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import validator from 'validator'
import Alerta from '../avisos/Alerta';
import RegisterForm from './RegisterForm';
import Home from '../../views/HomeView';
import '../../App.css'
import axios from 'axios'
    
function LoginForm() {

    Modal.setAppElement('#root');

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [emailValidade, setEmailValidade] = useState(true)
    const [modalState, setModalState] = useState(false)
    
    const openModal = (e) => {
        e.preventDefault()
        setModalState(true);
      };
    
      const closeModal = (e) => {
        e.preventDefault()
        setModalState(false);
      };

    /*Validar e Requerir Autenticação*/
    function LoginDeUsuario(e){
        e.preventDefault();
        
        validarEmail();

        if (emailValidade === true && senha !== null) {
            const url = 'http://localhost:3030/autenticarUsuario';

            const data = {
                email: email,
                senha: senha
            };

            axios.post(url, data)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.error(error)
                });
        } else {
            //retornar erro 
        }
    }

    function validarEmail(){
        
        /*Validação*/
        if (validator.isEmail(email)) {
            return setEmailValidade(true);
          } else {
            return setEmailValidade(false);
          }
    }

   


    return (
        <>
            <div className="form-page">
                <div className="form">
                    <div>
                        <h1>Login</h1>
                    </div>
                    <br></br>
                    <form  className="login-form" onSubmit={LoginDeUsuario}>
                    <input type="mail" placeholder="E-mail" required onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha"required onChange={(e) => setSenha(e.target.value)}/>
                    <button>Entrar</button>
                    <p className="message">Faça sua conta <a href='' onClick={openModal}>aqui</a></p>
                    </form>
                    {!emailValidade &&(
                        <>
                            <Alerta tipo='erro' mensagem='Email invalido'/>
                        </>
                    )}
                </div>
            </div>
            <Modal isOpen={modalState} onRequestClose={closeModal} closeModal={closeModal}>
                <RegisterForm/>
            </Modal>
        </>
    );
}

export default LoginForm;