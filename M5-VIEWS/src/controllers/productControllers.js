
const productModel = require("../models/productModel.js");

const categoryModel = require("../models/categoryModel.js");

const lincenceModel = require("../models/licenceModel.js");

const cuotaModel = require("../models/cuotasModel.js");

const cuotas_defaul = 6;

module.exports = {

  // Listado de Productos con Acciones
  admin: ( req, res ) => {

    let products = [];    

    if( req.query.buscar ){

      const buscar = req.query.buscar.toUpperCase();
      
      for( const Product of productModel.listar() ){

        if( 
          Product.id == buscar || 
          Product.sku.toUpperCase() == buscar || 
          Product.name.toUpperCase() == buscar || 
          Product.Licence.name.toUpperCase() == buscar || 
          Product.Category.name.toUpperCase() == buscar  
        ){
          products.push( Product );
        }
      }
    }
    else{

      products = productModel.listar( req.query.buscar == undefined ? req.query : {} );
    }

    res.render( "product/admin", {

      head: {

        title: "Administrador de Productos | Funkoshop",

        styles: [
          // elementos:
          "document/table",
          // página:
          "pages/product",
          "pages/product/admin"
        ],

        scripts:[
          "pages/product/admin"
        ]
      },

      products
         
    });
  },

  // Agregar 1 Producto
  create: ( req, res ) => {

    res.render( "product/create", {
      
      head: {

        title: "Crear un Producto | Funkoshop",

        styles: [
          "pages/product",
          "pages/product/create"        
        ],

        scripts:[
          "pages/product/validate"
        ]
      },      

      // selectores
      categorys: categoryModel.listar(),
      licences: lincenceModel.listar(),
      cuotas: cuotaModel.listar(),
      
      cuotas_defaul

    });
  },

  // Modificar el Producto Seleccionado desde la Tabla
  edit: ( req, res ) => {

    res.render( "product/edit", {

      head: {

        title: "Editar un Producto | Funkoshop",

        styles: [
          "pages/product",
          "pages/product/edit"        
        ],

        scripts:[
          "pages/product/validate"
        ]
      },
      
      // selectores
      categorys: categoryModel.listar(),
      licences: lincenceModel.listar(),
      cuotas: cuotaModel.listar(),

      cuotas_defaul,

      // productos
      Product: productModel.ver({ id: req.params.id })

    });
  },

  // Eliminar el Producto Seleccionado desde la Tabla
  delete: ( req, res ) => {

    deleted_products = 0;

    res.send( deleted_products );
  }

};