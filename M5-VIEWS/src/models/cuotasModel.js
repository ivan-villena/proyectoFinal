
const fs = require("node:fs");

const Valor = require("../utils/Valor.js")

const cuotas = JSON.parse( fs.readFileSync("../data/cuotas.json", "utf-8") );

/* proceso cuotas */
module.exports = {

  ver : ({ atributo: valor }) => {

    const filter = cuotas.filter( Cuota => Cuota[atributo] == valor );

    return  filter.length ? filter[0] : undefined;
  },
  
  listar : ( filtros ) => {
  
    return Valor.filtrar( cuotas, filtros );
  }
};