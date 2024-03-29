
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const collections = JSON.parse( fs.readFileSync("./src/data/collections.json", "utf-8") );

const productModel = require("./productModel.js");

const licenceModel = require("./licenceModel.js");

/* cargo objetos relacioados */

function cargar_relaciones( Collection ) {

  Collection.Product = productModel.ver({ id: Collection.product });

  Collection.Licence = licenceModel.ver({ id: Collection.licence });

  return Collection;
};

/* proceso licencias */

module.exports = {  

  ver : ( filtro = {} ) => {

    for( const Collection of collections ){
  
      for( const atributo in filtro ){

        if( Collection[atributo] == filtro[atributo] ) return cargar_relaciones(Collection);
      }
    }
  },
  
  listar : ( filtros ) => {
  
    let listado = Valor.filtrar( collections, filtros );
  
    for( const collection in listado ){
  
      listado[collection] = cargar_relaciones(listado[collection]);
    }
  
    return listado;
  }
};