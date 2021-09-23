import React,{ Component } from "react";
//import { render } from "react-dom";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
import './components/assets/app.css';
import './components/assets/index.css';



class App extends Component {


  constructor(){

      super()

      this.categorias = new Categorias()
      this.notas = new ArrayDeNotas()

      /*
      //this.notas = []
      this.state = {
        notas: [],
        //categorias: []

        */
      }


  

  /*compilaNota(titulo, texto, categoria){


    const novaNota = {titulo, texto, categoria}
    //this.notas.push(novaNota)
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  
      //o SETSTATE serve para informar que um atributo foi modificado e assim avisar ao REACT para fazer novamente a Renderizacao. Desta forma o ListaDeNotas vai ser rednderizado novamente com as informacoes q foram conseguidas do formulario
    
    }*/

  /*deletarNota(index){

    let arrayNotas = this.state.notas
    arrayNotas.splice(index,1)
    this.setState({notas: arrayNotas})

  }*/

  /*adicionarCategoria(categoria){

    console.log(`Adicionei ${categoria}`)
    var novoArrayCategoria = [...this.state.categorias, categoria] 
    this.setState({categorias: novoArrayCategoria})
  }*/


  render() {


        return (
          
          // O App retorna apenas 1 elemento. Portanto posso retornar 1 elemento pai com diversos filhos, mas nao posso retornar dois elementos irmaos.

          //Onde esta FormularioCadastro eu coloquei um novo atributo. (ex quando colocao atributo class ou ID em um H1 ou Text Area) e esse atributo esta recebendo a funcao que existe aqui nessa classe. Desta forma a classe formularioCadastro podera acessar essa funcao que vai ter um Bind para que os valores detectados la sejam enviados para ca.
        
          <section className="conteudo">
      
                <FormularioCadastro enviaCategorias={this.categorias} enviaNotas={this.notas}/>

                <main className="conteudo-principal">
                  
                    <ListaDeCategorias enviaCategorias={this.categorias} enviaNotas={this.notas}/>

                    <ListaDeNotas enviaNotas={this.notas}/>

                </main>
      
      
          </section>
          
    );
  }

}

export default App;
