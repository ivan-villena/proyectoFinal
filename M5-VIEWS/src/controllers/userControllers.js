
module.exports = {

  login: ( req, res ) => {
    
    res.render( "user/login", { 

      head: {

        title: "Login | Funkoshop",

        styles: [
          "pages/user",
          "pages/user/login"            
        ],

        scripts:[
          "pages/user/login"
        ]
      }

     });
  },

  register: ( req, res ) => {
    
    res.render( "user/register", { 

      head: {

        title: "Registrarse | Funkoshop",

        styles: [
          "pages/user",
          "pages/user/register"            
        ],

        scripts:[
          "pages/user/validate"
        ]
      }
    });
  }
}

