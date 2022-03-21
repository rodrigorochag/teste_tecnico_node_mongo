const {string_hash} = require('./trata_hash')
//import {oi} from './trata_hash.js'
const {header } = require("../js/traduz")

    
// string_hash == LISTA    
var string_traduzida = string_hash("50F70A3F73025EFCF950156F017D784000008CA0F80084003C013026A1029E72BD73C4")

console.log(string_hash("50F70A3F73025EFCF950156F017D784000008CA0F80084003C013026A1029E72BD73C4"))
var converted_cabecalho = header(string_traduzida[0])
console.log(converted_cabecalho)