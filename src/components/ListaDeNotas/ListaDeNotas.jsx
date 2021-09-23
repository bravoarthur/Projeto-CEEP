import React, { Component } from "react"
import CardNota from "../CardNota/CardNota"
import "./estilo.css"


class ListaDeNotas extends Component {

    constructor(){

        super()
        this.state = {notas:[]}
        this._novasNotas = this._novasNotas.bind(this)

    }

    componentDidMount(){

        this.props.enviaNotas.inscrever(this._novasNotas)

    }

    componentWillUnmount(){
        this.props.enviaNotas.desinscrever(this._novasNotas)
    }

    _novasNotas(notas){

        this.setState({...this.notas, notas: notas})
    }

    handleDesligaFiltro(){
        this.props.enviaNotas.desligaFiltro()
    }

    render(){

        if (this.props.enviaNotas._filter === "") {

            return (
    
            <ul className="lista-notas">
                
                
                {this.props.enviaNotas.notas.map((item, index) => {
    
                    return (
    
    
                            <li key={index} className="lista-notas_item">
                    
                                
                                <CardNota titulo={item.titulo} texto={item.texto} enviaFuncaoDelete={this.props.enviaNotas} indiceDaArrayDeNotas={index} enviaCategorias={item.categoria} classe={item.class}/>
                                    
                            </li>
    
                    )
                })}
    
            </ul>
    
            )

        } else {

                var notasFiltradas = this.props.enviaNotas.notas.filter(nota => nota.categoria === this.props.enviaNotas._filter)
                

                return (

                    <ul className="lista-notas">

                        <li key="filter" className="lista-notas_item">
                            <button className="botao-voltar" onClick={this.handleDesligaFiltro.bind(this)}>Todas</button>
                        </li>
                
                
                    {notasFiltradas.map((item, index) => {
        
                        return (
        
        
                                <li key={index} className="lista-notas_item">
                        
                                    
                                    <CardNota titulo={item.titulo} texto={item.texto} enviaFuncaoDelete={this.props.enviaNotas} indiceDaArrayDeNotas={index} enviaCategorias={item.categoria} classe={item.class}/>
        
                                </li>
        
                        )
                    })}
        
                </ul>

                    


                )

            

        }


    }



}

export default ListaDeNotas