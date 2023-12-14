import React, { useState } from 'react'

import './AdicionarUsuario.css'




function AdicionarUsuario(){
  /*
    um hook funcciona como um array de duas posições 
    onde a primeira é uma variavel e a segunda e a função que manipula ela  
    então todas as funções são usadas para manipular o estado 
    como aconetce nas classe onde os states são utilizados 
  */
  const [nome, setNome] = useState('')
  const [sobrenome, setSobreNome] = useState('')
  const [email, setEmail] = useState('')
 

const onSubmitHandler = (event)=> {
    event.preventDefault()
    
    //pegando os ussuarios que ja existem lá do state 
    const usuario = {nome,sobrenome, email}
    
    // A função fetch faz outros tipós de requisição além do get
    //nesse casio como eu tenho que faz um post no primeiro parametro 
    //eu coloco a url pra acessar a api
    //no segundo eu tenho que descrver o post
    //atraves de um objeto     

    fetch('https://reqres.in/api/users',
      {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(usuario)
      }
    )
    .then(resposta=>resposta.json())
    .then(dados=>{
        setNome('') 
        setSobreNome('')
        setEmail('')
        props.adicionarUsuario(dados)
    })



   
  }
    return (
      <div className="AdicionarUsuario">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={event => setNome(event.target.value)}
                required>
              </input>
            </div>
            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={sobrenome}
                onChange={event => setSobreNome(event.target.value)}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value) }
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Adicionar
        </button>
        </form>
      </div>
    )
  }


export default AdicionarUsuario