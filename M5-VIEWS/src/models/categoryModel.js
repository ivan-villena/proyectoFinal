
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const categorys = JSON.parse( fs.readFileSync("./src/data/categorys.json", "utf-8") );

module.exports = {

  ver : ( filtro = {} ) => {

    for( const Category of categorys ){
  
      for( const atributo in filtro ){

        if( Category[atributo] == filtro[atributo] ) return Category;
      }      
    }
  },
  
  listar : ( filtros ) => {
  
    return Valor.filtrar( categorys, filtros );
  }

};