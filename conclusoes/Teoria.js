/*

 componetes de função são interessantes pra exbir retornos estaticos
 mas os componentes de classe possuem mais possibilidades como por exemplo
 gerenciamento de estado.
 
 Os hooks permitem que possaos usar recursos de um componete de classe mesmo
 que os componetes escritos sejam componentes de função.
 
 SINTAXE 
   use<nome do hook>() por exeplo um hook que pode ser usado para gerenciar 
   o estado de um componente useState().

- Hooks são funções que te possibilitam ligar se a recursos de state e ciclo de vida de um componente
- Hooks não funcionan dentro de classe eles permitem que voce usae recursos de classe
- Hooks são 100% retrocompativeis não tem restrição de versões pra uso

O react fornece alguns hooks 

basicos 
- useState()
- useEfect()
- useContext()

Adicionais 
- useReducer()
- useCallback()
- useMemo()
- useRef()
- useImperativeHandle()
- useLayoutEffect()
 
PREPARANDO A APLICAÇÃO PARA USO DO HOOK useState()

Como mensionado anteriormente Hook Não funciona dentro de classe  
então a primeira coisa e coneverter a classe mãe em um função e seu metodos em 
arrow functions 

de depois importar o useState()

USANDO USE EFECT 
  
  O componte usuarios é uma lista que mostra os usuarios que vem atraves da 
  requisição da api, como o objetivo da aula e usar os hooks que não funcionan
  em componente de classe agora eu tenho um problema porque componetes de função 
  não podem usar o metodo de ciclo de vida que eo  'componentDidMount(){}'
  e a requisição que faço pra api e justamente dentro dele.
  
  como resolver ?

  No caso fazer uma requisição dentro de um compnet de função é um efeito colateral
  então pra isso eu uso o useEffect, basicamente eso pegar o codigo que estava dentro do 
  'componentDidMount(){}' e passar pra ele 

  por exemplo:
  
  Antes

  componentDidMount(){
     fetch('https://reqres.in/api/users')
     .then(resposta => resposta.json())
     .then(dados =>{

      
       const usuarios = dados.data.map(usuario=> ({
         id: usuario.id,
         nome: usuario.first_name,
         sobrenome: usuario.last_name,
         email: usuario.email
       }))
      
       this.setState({usuarios})
     })
  }

  Depois 

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

  Porem ainda existe um porbelma ocorreno no backgound da aplicação 
  toda vez que ela roda ela chama a função varias vezes consumindo memoria
  isso acontece porque o useEffect recebe 2 parametros 1 e a gunção que faz 
  o porcesso de requisição e o segundo são as dependencias dela então cada vez
  que ele e chamado ele excuta a função e fica procurando pela dependencias 
  pra resolver isso e so colocar um array vazio como segundo parametro 





*/