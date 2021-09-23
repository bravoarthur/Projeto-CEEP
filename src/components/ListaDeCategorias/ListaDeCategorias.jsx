import React, { Component } from 'react';
import "./estilo.css"

class ListaDeCategorias extends Component {


    constructor(){

        super()
        this.state = {categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this)

    }

    componentDidMount(){

        this.props.enviaCategorias.inscrever(this._novasCategorias)

    }

    componentWillUnmount(){
        this.props.enviaCategorias.desinscrever(this._novasCategorias)
    }


    _novasCategorias(categorias){
        this.setState({...this.state, categorias: categorias})
    }




    _handleEventoInput(evento) {

       // evento.preventDefault()
       //console.log(evento)

        if(evento.key === "Enter") {

            this.props.enviaCategorias.adicionarCategoria(evento.target.value)
            evento.target.value = ""

        }

    }

    _handleFilter(evento){

        this.props.enviaNotas.filter(evento.target.textContent)


    }

    _handleBusca(evento){

        var arrayExibir = []
        var arrayOmitir = []

        this.props.enviaNotas.notas.forEach((nota, index) => {

            var texto = nota.texto
            var campoBusca = evento.target.value
            var expressao = new RegExp(campoBusca, 'i')

            if(expressao.test(texto)){

                arrayExibir.push(index)

                               
            } else {

                arrayOmitir.push(index)

            }

            //console.log(texto)

           // console.log(`item ${nota} de numero ${index}`)

        })
        
        this.props.enviaNotas.handleClasseBusca(arrayExibir, arrayOmitir)


    }



    render() { 

        
        return (

            <section className="lista-categorias">



                <input 
                type="text" 
                className="lista-categorias_input" placeholder="Buscar Texto..." onChange={this._handleBusca.bind(this)}
                
                />

                <input 
                type="text" 
                className="lista-categorias_input" placeholder="Adicione uma Categoria"
                onKeyUp={this._handleEventoInput.bind(this)/*onKeyUp funcionara quando eu soltar a tecla. Onkey down funciona ao pressiona-la*/}
                />
                    
                <ul className="lista-categorias_lista">

                    {this.props.enviaCategorias.categorias.map((item, index) => {

                      return <li className="lista-categorias_item" key={index} onClick={this._handleFilter.bind(this)}>{item}</li>

                    })}    
                       
    
                </ul>

                
    
                

            </section>

        
            
            
            );
    }

}
 
export default ListaDeCategorias;