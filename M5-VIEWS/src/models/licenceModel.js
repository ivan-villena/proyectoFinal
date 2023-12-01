
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const licences = JSON.parse( fs.readFileSync("./src/data/licences.json", "utf-8") );

module.exports = {  

  ver : ( filtro = {} ) => {

    for( const Licence of licences ){

      for( const atributo in filtro ){

        if( Licence[atributo] == filtro[atributo] ) return Licence;
      }      
    }
  },
  
  listar : ( filtros ) => {
  
    let listado = Valor.filtrar( licences, filtros );
  
    for( const licence in listado ){
  
      listado[licence] = listado[licence];
    }
  
    return listado;
  }
};