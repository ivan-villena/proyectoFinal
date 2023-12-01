
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const cuotas = JSON.parse( fs.readFileSync("./src/data/cuotas.json", "utf-8") );

module.exports = {

  ver : ( filtro = {} ) => {

    for( const Cuota of cuotas ){

      for( const atributo in filtro ){

        if( Cuota[atributo] == filtro[atributo] ) return Cuota;
      }      
    }
  },
  
  listar : ( filtros ) => {
  
    return Valor.filtrar( cuotas, filtros );
  }
};