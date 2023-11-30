
const productModel = require("../models/productModel.js");

const licenceModel = require("../models/licenceModel.js")

module.exports = {

  home: ( req, res ) => {

    res.render( "home", { 

      title: "Home | Funkoshop",
      
      styles: [
        "component/hero",
        "component/collection",
        "component/slider"
      ],

      scripts: [],
      scripts_glide: [ "slider" ],

      // colecciones
      licences: licenceModel.listar([ ['id','<>',4] ]),
      
      // productos
      products: productModel.listar(),

      // slider
      products_title: "Últimos Lanzamientos...",
      products_list: productModel.listar_ultimos()
    })
  },

  contacto: ( req, res ) => {

    res.send(`Vista de Contacto`);
  },

  nosotros: ( req, res ) => {

    res.send(`Vista de Sobre nosotros`);
  },

  faqs: ( req, res ) => {

    res.send(`Vista del preguntas frecuentes`);
  }

}