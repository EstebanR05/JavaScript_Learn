class Display{
 
    constructor(displayValorAnterior, displayValorActual ){
           this.displayValorAnterior = displayValorAnterior;
           this.displayValorActual = displayValorActual;
           this.calculador = new Calculadora();
           this.tipoOperacion = undefined;
           this.valorAnterior = '';
           this.valorActual = '';
           this.signos = {
               sumar: '+',
               restar: '-',
               multiplicar: '*',
               dividir: '/',
           }
    }

    agregarNumero(numeros){
        this.valorActual = numeros;
    }
  
    imprimirValores(){
        this.displayValorActual.textConten = this.valorActual;
    }
}