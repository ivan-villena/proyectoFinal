
module.exports = {

  login: ( req, res ) => {
    
    res.render( "user/login", { 

      title: "Login | Funkoshop",

      styles: [
        // componentes:        
        // por página:
        "pages/user",
        "pages/user/login"            
      ]

     });
  },

  register: ( req, res ) => {
    
    res.render( "user/register", { 

      title: "Registrarse | Funkoshop",

      styles: [
        // componentes:        
        // por página:
        "pages/user",
        "pages/user/register"            
      ]

     });
  }
}

