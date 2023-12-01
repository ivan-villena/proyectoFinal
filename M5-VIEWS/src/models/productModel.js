
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const products = JSON.parse( fs.readFileSync("./src/data/products.json", "utf-8") );

const licenceModel = require("./licenceModel.js");

const categoryModel = require("./categoryModel.js");

const cuotasModel = require("./cuotasModel.js");

/* cargo objetos relacioados */

function cargar_relaciones ( Product ) {

  Product.Licence = licenceModel.ver({ id: Product.licence });

  Product.Category = categoryModel.ver({ id: Product.category });

  Product.Cuotas = cuotasModel.ver({ id: Product.cuotas });

  return Product;
};

/* proceso productos */

module.exports = { 

  ver : ( filtro = {} ) => {

    for( const Product of products ){
  
      for( const atributo in filtro ){

        if( Product[atributo] == filtro[atributo] ) return cargar_relaciones(Product);
      }      
    }
  },
  
  listar : ( filtros ) => {    
  
    let listado = Valor.filtrar( products, filtros );
  
    for( const product in listado ){      
  
      listado[product] = cargar_relaciones(listado[product]);
    }
  
    return listado;
  }
  
};