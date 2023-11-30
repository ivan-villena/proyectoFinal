
const Texto = require("./Texto.js");

/* Proceso Valor */

module.exports = {

  /* Comparación de Valores */

  comparar : ( valor_1, operador, valor_2, RegExpOpcion = ['g','i'] ) => {

    let result = false;
    
    switch( operador ){
    case '===': result = ( valor_1 === valor_2 );  break;
    case '!==': result = ( valor_1 !== valor_2 );  break;
    case '=':   
    case '==':  result = ( valor_1 ==  valor_2 );  break;
    case '<>':  
    case '!=':  result = ( valor_1 !=  valor_2 );  break;          
    case '>':   result = ( valor_1  >  valor_2 );  break;
    case '<':   result = ( valor_1  <  valor_2 );  break;
    case '>=':  result = ( valor_1 >=  valor_2 );  break;
    case '<=':  result = ( valor_1 <=  valor_2 );  break;
    case '^^':  result = Texto.exp(`^${Texto.dec(valor_2)}`, RegExpOpcion ).test( valor_1.toString() ); break;
    case '!^':  result = Texto.exp(`^[^${Texto.dec(valor_2)}]`, RegExpOpcion ).test( valor_1.toString() ); break;
    case '$$':  result = Texto.exp( `${Texto.dec(valor_2)}$`, RegExpOpcion ).test( valor_1.toString() ); break;
    case '!$':  result = Texto.exp( `[^${Texto.dec(valor_2)}]$`, RegExpOpcion ).test( valor_1.toString() ); break;
    case '**':  result = Texto.exp( `${Texto.dec(valor_2)}`, RegExpOpcion ).test( valor_1.toString() ); break;
    case '!*':  result = Texto.exp( `[^${Texto.dec(valor_2)}]`, RegExpOpcion ).test( valor_1.toString() ); break;
    }
    
    return result;
  },
  
  /* Proceso Filtros de Lista */
  
  filtrar : ( listado, filtros, operador = "&&", comparador = "==" ) => {
  
    let resultado = [];
  
    if( filtros ){
  
      if( Array.isArray(filtros) ){
  
        for( const objeto of listado ){
  
          let comparacion = true;
  
          for( const filtro of filtros ){
    
            if( filtro[0] !== undefined && objeto[filtro[0]] !== undefined && !this.comparar( ...filtro ) ){
    
              comparacion == false;
  
              break;            
            }
          }
  
          if( comparacion ) resultado.push(objeto);
        }
      }
      else if( typeof(filtros) == 'object' ){
  
        for( const objeto of listado ){
  
          let comparacion = true;
  
          for( const ide_filtro in filtros ){
    
            if( objeto[ide_filtro] !== undefined && !this.comparar( objeto[ide_filtro], comparador, filtros[ide_filtro] ) ){
  
              comparacion == false;
  
              break;
            }
          }
  
          if( comparacion ) resultado.push(objeto);
        }
      }
    }
  
    return resultado;
  }

};