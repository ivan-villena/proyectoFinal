const fs = require("node:fs");

const carts = JSON.parse( fs.readFileSync("../data/carts.json", "utf-8") );

const productModel = require("./productModel.js");

/* Cargo Objetos Relacionales */

const cargar_relaciones = ( Cart ) => {

  for( const item in Cart.items ){

    const Item = Cart.items[item];

    if( Item.product ) Cart.items[item].product = productModel.ver( Item.product );
  }

  return Cart;
};

/* proceso carrito */

module.exports = {

  ver : ({ atributo: valor }) => {

    let Cart_ver;
  
    for( const Cart of carts ){
  
      if( Cart[atributo] == valor ){
  
        Cart_ver = cargar_relaciones( Cart );
  
        break;
      }
    }
    
    return Cart_ver;
  }
  
};