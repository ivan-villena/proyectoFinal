
const productModel = require("../models/productModel.js");

const cartModel = require("../models/cartModel.js");

module.exports = {

  // listado de Productos
  products: ( req, res ) => {
    
    res.render( "shop/products", {
      
      title: "Shop | Funkoshop",

      styles: [
        // componentes:
        "component/pagination",
        // por página:
        "pages/shop",
        "pages/shop/products"
      ],

      products: productModel.listar( req.query )
    });
  },

  // detalle del Producto
  product: ( req, res ) => {

    const Product = productModel.ver({ id: req.params.id });
    
    res.render( "shop/product", {
      
      title: "Items del Carrito | Funkoshop",

      styles: [
        // componentes:
        "component/slider",
        "component/number",
        "component/product",
        // por página:
        "pages/shop",
        "pages/shop/product"          
      ],

      // slider
      scripts_glide: [ "slider" ],

      products_title: "Productos Relacionados...",
      products_list: productModel.listar([ ['licence','==',Product.licence] ]),

      // formulario
      Prooduct: Product
    });
  },  

  // carrito del usuario con Productos seleccionados
  cart: ( req, res ) => {
    
    res.render( "shop/cart", {
      
      title: "Carrito | Funkoshop",

      styles: [
        // componentes:
        "component/table",
        "component/number",
        "component/product",
        // por página:
        "pages/shop",
        "pages/shop/cart"
      ],

      // por id del Usuario
      Cart: cartModel.ver({ user: 1 })
    });
  }
}