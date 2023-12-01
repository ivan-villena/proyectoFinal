
const fs = require("node:fs");

const carts = JSON.parse( fs.readFileSync("./src/data/carts.json", "utf-8") );

const productModel = require("./productModel.js");

/* Cargo Objetos Relacionales */

function cargar_relaciones( Cart ) {

  Cart.cantidad = 0;

  Cart.subtotal = 0;

  for( const item in Cart.items ){

    const Item = Cart.items[item];

    Cart.items[item].Product = productModel.ver({ id: Item.product });

    Cart.cantidad += Cart.items[item].cantidad;

    Cart.subtotal += Cart.items[item].cantidad * Cart.items[item].Product.price;
  }
  
  Cart.total = Cart.subtotal + Cart.envio;

  return Cart;
};

/* proceso carrito */

module.exports = {

  ver : ( filtro = {} ) => {
  
    for( const Cart of carts ){
  
      for( const atributo in filtro ){

        if( Cart[atributo] == filtro[atributo] ) return cargar_relaciones( Cart );
      }      
    }
  }
  
};