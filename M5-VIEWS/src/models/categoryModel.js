
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const categorys = JSON.parse( fs.readFileSync("../data/categorys.json", "utf-8") );


/* proceso categorias */
module.exports = {

  ver : ({ atributo: valor }) => {

    for( const Category of categorys ){
  
      if( Category[atributo] == valor ) return Category;
    }
  },
  
  listar : ( filtros ) => {
  
    return Valor.filtrar( categorys, filtros );
  }

};