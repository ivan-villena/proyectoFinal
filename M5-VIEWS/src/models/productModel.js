
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const products = JSON.parse( fs.readFileSync("../data/products.json", "utf-8") );

const licenceModel = require("../models/licenceModel.js");

const categoryModel = require("../models/categoryModel.js");

const cuotaModel = require("../models/cuotasModel.js");

/* proceso carga de objetos relacionados */

const cargar_relaciones = ( Product ) => {

  Product.Licence = licenceModel.ver({ id: Product.licence });

  Product.Category = categoryModel.ver({ id: Product.category });

  Product.Cuotas = cuotaModel.ver({ id: Product.cuotas });

  return Product;
};

/* proceso Productos */

module.exports = { 

  ver : ({ atributo: valor }) => {

    for( const Product of products ){
  
      if( Product[atributo] == valor ) return cargar_relaciones(Product);
    }
  },
  
  listar : ( filtros ) => {
  
    let listado = Valor.filtrar( products, filtros );
  
    for( const product of listado ){
  
      listado[product] = cargar_relaciones(listado[product]);
    }
  
    return listado;
  },
  
  listar_nuevos : ( filtros ) => {  
  
    const resultado = [];
  
    const listado = ( filtros ? listar(filtros) : products );
  
    for( const Product of listado ){
  
      if( Product.is_new ) resultado.push( cargar_relaciones(Product) );
    }
  }
  
};