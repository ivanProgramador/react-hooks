import React, { Component } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

class Usuarios extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: [
       
      ]
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }





  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
       
      fetch(`https://reqres.in/api/users/${usuario.id}`,{
         method:'DELETE'
      }).then(resposta =>{
        if(resposta.ok){
           let usuarios = this.state.usuarios
           usuarios = usuarios.filter(x => x.id !== usuario.id)
           this.setState({ usuarios: usuarios })

          
        }

         
      })

      
    }
  }






   //as requisições devem ser feitas dentro desse metodo sempre 
  componentDidMount(){
     fetch('https://reqres.in/api/users')
     .then(resposta => resposta.json())
     .then(dados =>{

       // convertendo os atributos pra um foprma que o meu componete entenda
       const usuarios = dados.data.map(usuario=> ({
         id: usuario.id,
         nome: usuario.first_name,
         sobrenome: usuario.last_name,
         email: usuario.email
       }))
       //quando o nopme do array que esta dentro do state e igual ao nome 
       // do objeto não precisa usar chave:valor ele ja pega sozinho
       //ai basta digitar o nome do objeto
       //se eu fosse fazer ficaria assim 
       // this.setState({usuarios:usuarios})
       this.setState({usuarios})
     })
  }

  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
  }
}

export default Usuarios