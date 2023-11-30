
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const licences = JSON.parse( fs.readFileSync("../data/licences.json", "utf-8") );

const productModel = require("./productModel.js");

/* cargo objetos relacioados */

const cargar_relaciones = ( Licence ) => {

  Licence.Product = productModel.ver({ id: Licence.product });

  return Licence;
};

/* proceso licencias */

module.exports = {  

  ver : ({ atributo: valor }) => {

    for( const Licence of licences ){
  
      if( Licence[atributo] == valor ) return cargar_relaciones(Licence);
    }
  },
  
  listar : ( filtros ) => {
  
    let listado = Valor.filtrar( licences, filtros );
  
    for( const licence in listado ){
  
      listado[licence] = cargar_relaciones(listado[licence]);
    }
  
    return listado;
  }
};