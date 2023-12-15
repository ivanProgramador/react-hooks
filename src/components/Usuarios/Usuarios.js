import React, {useState,useEffect} from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

function Usuarios(){


   const [usuarios, setUsuarios] = useState([])

 

  const adicionarUsuario = usuario => {
      setUsuarios(usuariosAtuais =>[...usuariosAtuais,usuario])
  }





  const removerUsuario = usuario=> {
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

   useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then(resposta => resposta.json())
    .then(dados =>{

      const usuarios = dados.data.map(usuario=> ({
        id: usuario.id,
        nome: usuario.first_name,
        sobrenome: usuario.last_name,
        email: usuario.email
      }))
      
      setUsuarios({usuarios})
    })

       
   },[])




   


    return (
      <>
        <AdicionarUsuario adicionarUsuario={adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={()=>removerUsuario(usuario)}
          />
        ))}
      </>
    )
  
}

export default Usuarios