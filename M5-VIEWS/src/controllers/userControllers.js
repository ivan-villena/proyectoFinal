const userControllers = {

  getLoggin: res.send(`Esta ruta devuelve el loggin`),

  setLoggin: res.send(`Esta ruta procesa el loggin`),

  getRegister: res.send(`Esta ruta devuelve el formulario de Registro`),

  setRegister: res.send(`Esta ruta procesa el formulario de Registro`),

  getLogout: res.send(`Esta ruta procesa el logout`)

}

module.exports = userControllers;