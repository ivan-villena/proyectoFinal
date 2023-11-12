const shopControllers = {

  shop: res.send(`Esta ruta devuelve al vista de shop`),

  getItem: res.send(`Esta ruta devuelve la vista de un item`),

  setItem: res.send(`Esta ruta procesa el agregar un item`),

  getCart: res.send(`Esta ruta devuelve la vista del carrito`), 

  setCart: res.send(`Esta ruta procesa los Cambios del Carrito`)

}

module.exports = shopControllers;