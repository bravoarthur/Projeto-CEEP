export default class ArrayDeNotas{

    constructor() {

        this.notas = []
        this._inscritos = []
        this._filter = ""
        

    }

    adicionarNota(titulo, texto, categoria){

        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)
        this.notificar()
        
    }

    apagarNota(indice) {
        
        console.log(indice)
        this.notas.splice(indice,1)
        this.notificar()
    }

    filter(categoria) {

        this._filter = categoria
        this.notificar()        

    }

    desligaFiltro(){

        this._filter = ""
        this.notificar()
    }

    handleClasseBusca(arrayExibir, arrayOmitir){

        arrayExibir.forEach(index => {

        this.notas[index].class = "card-nota"

        })

        arrayOmitir.forEach(index => {

            this.notas[index].class = "omitir"
    
        })

        this.notificar()

    }

    handleClasseNaoBusca(arrayIndex){

        arrayIndex.forEach(index => {

            this.notas[index].class = "Omitir"
    
            })


    }

    



    inscrever(func) {

        this._inscritos.push(func)


    }

    notificar() {

        this._inscritos.forEach(item => item(this.notas))
    }

    desinscrever(func){

        this._inscritos = this._inscritos.filter(f => f !== func)

    }





}

class Nota {

    constructor(titulo, texto, categoria){

        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
        this.class = "card-nota"
        

    }
}