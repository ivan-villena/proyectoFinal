
const productModel = require("../models/productModel.js");

const categoryModel = require("../models/categoryModel.js");

const lincenceModel = require("../models/licenceModel.js");

const cuotaModel = require("../models/cuotasModel.js");

let cuotas_defaul = 6;

module.exports = {

  // Listado de Productos con Acciones
  admin: ( req, res ) => {

    res.render( "product/admin", {
      
      title: "Administrador de Productos | Funkoshop",

      styles: [
        // componentes:
        "component/table",
        // por página:
        "pages/product",
        "pages/product/admin"        
      ],

      // navbar
      is_admin: true,

      // datos
      products: productModel.listar( req.query )
    });
  },

  // Agregar 1 Producto
  create: ( req, res ) => {

    res.render( "product/create", {
      
      title: "Crear un Producto | Funkoshop",

      styles: [
        // componentes:
        
        // por página:
        "pages/product",
        "pages/product/create"        
      ],

      // navbar
      is_admin: true,

      // selectores
      categorys: categoryModel.listar(),
      licences: lincenceModel.listar(),
      cuotas: cuotaModel.listar(),
      
      cuotas_defaul: cuotas_defaul
    });
  },

  // Modificar el Producto Seleccionado desde la Tabla
  edit: ( req, res ) => {

    res.render( "product/edit", {
      
      title: "Editar un Producto | Funkoshop",

      styles: [
        // componentes:
        
        // por página:
        "pages/product",
        "pages/product/edit"        
      ],

      // navbar
      is_admin: true,

      // selectores
      categorys: categoryModel.listar(),
      licences: lincenceModel.listar(),
      cuotas: cuotaModel.listar(),

      cuotas_defaul: cuotas_defaul,

      // datos
      Product: productModel.ver({ id: req.params.id })
    });
  },

  // Eliminar el Producto Seleccionado desde la Tabla
  delete: ( req, res ) => {

    deleted_products = 0;

    res.send( deleted_products );
  }

};