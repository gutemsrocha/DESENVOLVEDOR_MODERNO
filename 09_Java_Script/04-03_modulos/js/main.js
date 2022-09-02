import * as nb from './numbers.js'
import Product from './product.js'

// "import" => È a ação de importar algo que está armazenado em outro local.
// * => Informa que "TUDO" será importado (deste outro local)
// "as nb" => "as" significa "como" e "nb" foi o apelido escolhido que poderia ser 
//numbers mesmo ou qualquer outro relacionado ao arquivo (Boa prática: que este apelido
// tenha algo que referencie o nome do item a ser importado)
//"from " => "from" aponta para o local de origem significa "de"
//"./numbers.js" =>É arquivo que será importado juntamente com o seu caminho "./"

/* OBSERVAÇÃO: 
No exemplo acima utilizamos o "*" para indicar que estamos importando "tudo".
Também é possível importar, utilizando a desestruturação de objetos.

Ao invés de usar o "*", iremos colocar um objeto e informar o que queremos importar.
Assim:

Suponha que eu queria importar a função "sum". Ficaria assim:

import {sum} from "js/numbers.js"

Suponha que eu queria importar as funções "sum" e "round". Ficaria assim:

import {sum, round} from "js/numbers.js"

OBSERVAÇÃO: APENAS ARQUIVOS EXPORTADOS PODEM SER IMPORTADOS EM OUTRO MODULO. 



*/

const x = nb.sum(3, 4);
console.log(x);

console.log(nb.round(3.2345, 4));

//DEVIDO A FUNÇÃO "exp" no arquivo numbers.js, não estar implementada com o "export"
//o sistema não consegue enxerga-la. Gerando o erro. 
//console.log(nb.exp(3, 4));


const obj = new Product("Computador", 800.0, 10);

console.log(obj)