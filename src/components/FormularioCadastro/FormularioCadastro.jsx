import React, { Component } from "react"
import "./estilo.css"


class FormularioCadastro extends Component {
    

    constructor(props) {
        //como essa e uma classe q recebe heranca da classe Component precisamos usar o super() (superConstructor) para o contrutor.

        //as "PROPS" do constructor sao as propriedades q coloquei quando criei a instancai da classe como se fosse ID ou Class de um elemento html. Elas precisam estar no Super para serem acessadas pelo THIS

        super(props)
        this.titulo = ""
        this.texto = ""
        this.categoria = "Sem Categoria"
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



    _handleMudancaTitulo(evento) {

        //console.log(evento.target.value)

        this.titulo = evento.target.value
        evento.stopPropagation()
        

    }

    _handleMudancaTexto(evento){

        this.texto = evento.target.value
        evento.stopPropagation()
        
    }

    _handleMudancaCategoria(evento){

        this.categoria = evento.target.value
        evento.stopPropagation()

    }

    _criarNota(evento){

        evento.preventDefault()
        evento.stopPropagation()
        this.props.enviaNotas.adicionarNota(this.titulo, this.texto, this.categoria)
        //esse "enviaFuncao" (que e como se fosse um ID ou Class) tem dentro dele a compilaNota. Nao sei porque CARALHOS ele nao fez isso com um Getter, mas assim a compilaNota vai ser executada e vai enviar o Titulo e o Texto conseguidos aqui para um objeto la na classe APP onde poderemos envia-lo para lista de notas.

        



    }


    render(){

        return(

            <form className="form-cadastro "
                onSubmit={this._criarNota.bind(this)}
            >
                    <select className="form-cadastro_input" onChange={this._handleMudancaCategoria.bind(this)}>

                        <option>Sem Categoria</option>

                        {this.props.enviaCategorias.categorias.map((item, index) => {

                            return (<option key={index}>{item}</option>)

                        })}

                    </select>
             

                    <input 
                    className="form-cadastro_input" 
                    type="text" 
                    placeholder="titulo"
                    onChange={this._handleMudancaTitulo.bind(this)}
                    //Aqui estamos fazendo um Bind para que o metodo seja chamado vinculado a essa instancia, fazendo com que o this funcione. caso contrario o this seria da instancia de onchange e nao existiria
                    />

                    <textarea 
                    rows={15}
                    className="form-cadastro_input" 
                    placeholder="escreva sua nota..."
                    onChange={this._handleMudancaTexto.bind(this)}
                    />

                    <button className="form-cadastro_input form-cadastro_submit"> Criar Nota</button>

            </form>

        )
    }
}
export default FormularioCadastro