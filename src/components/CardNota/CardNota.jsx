import React, { Component } from 'react';
//import deleteSVG from "../assets/img/delete.svg"
import {ReactComponent as DeleteSVG} from "../assets/img/delete.svg"
import "./estilo.css"

class CardNota extends Component {
    
    apagar(){

        const indice = this.props.indiceDaArrayDeNotas
        
        this.props.enviaFuncaoDelete.apagarNota(indice)

    }

    render() { 

        return ( 

            <section className={this.props.classe}>
                

                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    {/*<img src={deleteSVG}/>*/}
                    <DeleteSVG onClick={this.apagar.bind(this)}/>
                    <h4>{this.props.enviaCategorias}</h4>



                </header>
                
                <p className="card-nota_texto">{this.props.texto}</p>


            </section>

         );

    }

}
 
export default CardNota;