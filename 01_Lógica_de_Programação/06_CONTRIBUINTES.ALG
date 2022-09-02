// Parametros:
// quantia: valor recebido como salário
// Efeito: retorna o imposto a ser pago sobre o salário
funcao impostoSobreSalario(quantia: real) : real
var
   base : real
inicio
   base <- quantia / 12

   se base < 3000.0 entao
      retorne 0
   senao
      se base < 5000.0 entao
         retorne quantia * 0.1
      senao
         retorne quantia * 0.2
      fimse
   fimse
fimfuncao

//****************************************************
// Parametros:
// quantia: valor recebido como prestação de serviços
// Efeito: retorna o imposto a ser pago sobre prestação de serviços
funcao impostoSobreServicos(quantia: real) : real
inicio
   retorne quantia * 0.15
fimfuncao

//****************************************************
// Parametros:
// quantia: valor recebido como ganho de capital
// Efeito: retorna o imposto a ser pago sobre ganhos de capital
funcao impostoSobreGC(quantia: real) : real
inicio
   retorne quantia * 0.20
fimfuncao

//****************************************************
// Parametros:
// salario: valor recebido como salário
// servicos: valor recebido como prestação de serviços
// gc: valor recebido como ganho de capital
// Efeito: retorna o imposto bruto total a ser pago
funcao impostoBrutoTotal(salario: real; servicos: real; gc: real) : real
var
   soma : real
inicio
   soma <- (salario) + (servicos) + (gc)
   retorne soma
fimfuncao

//****************************************************
// Parametros:
// salario: valor recebido como salário
// servicos: valor recebido como prestação de serviços
// gc: valor recebido como ganho de capital
// gastosMedicos: valor gasto com despesas médicas
// gastosEducacionais: valor gasto com despesas educacionais
//impostoBruto : Variável resultante da soma dos Impostos (Salario / Serviço / Ganho de Capital)
//gastoBruto : Variável resultante da soma dos Gastos( Médico / Educacional)
// Efeito: retorna o valor que o contribuinte pode abater no seu imposto
funcao abatimento(salario: real; servicos: real; gc: real; gastosMedicos: real; gastosEducacionais: real) : real
var
   impostoBruto, gastoBruto : real

inicio
   impostoBruto <- salario + servicos + gc
   gastoBruto <- (gastosMedicos) + (gastosEducacionais)

   se gastoBruto > impostoBruto entao
      retorne impostoBruto * 0.3
   senao
      retorne gastoBruto
   fimse
fimfuncao

//****************************************************
//Parametros
//A: Elemento A
//B: Elemento B
//Efeito : Calcular o Imposto Devido (Imposto Bruto Total - Abatimento)
funcao impostoDevido(A : real ; B : real) : real
var
   calc : real
inicio
   calc <- A - B
   retorne calc
fimfuncao

//****************************************************
//Parametros
//salarioAnual : Variável recebe o valor do Salário Anual
//Efeito: Calcular o valor do Salário Mensal (Salario Anual / 12 meses)
funcao calcSalarioMensal(salarioAnual : real) : real
inicio
   retorne salarioAnual[i] / 12
fimfuncao

//****************************************************
//Parametros
//A: Elemento A
//B: Elemento B
//Efeito : Calcular a soma dos Elementos A e B
funcao somaGastos(A : real ; B : real) : real
inicio
   retorne (A) + (B)
fimfuncao

//****************************************************

Algoritmo "CONTRIBUINTES"

Var
   N, i : inteiro
   A, B : real

   contribuinte : vetor [0..9] de inteiro
   salarioAnual : vetor [0..9] de real
   salarioMensal : vetor [0..9] de real
   rendaPs : vetor [0..9] de real
   rendaGc : vetor [0..9] de real
   gastosMedicos : vetor [0..9] de real
   gastosEducacionais : vetor [0..9] de real
   totalGastos : vetor [0..9] de real
   impostoSalario : vetor [0..9] de real
   impostoServicos : vetor [0..9] de real
   impostoGC : vetor [0..9] de real
   impBrutoTotal : vetor [0..9] de real

Inicio

   // COLETA DE DADOS
   escreva("Quantos contribuintes você vai digitar? ")
   leia(N)
   escreval

   para i de 0 ate N-1 faca
      contribuinte[i] <- i
      escreval("Digite os dados do ",i+1,"º contribuinte: ")
      escreva("Renda anual com salário: ")
      leia(salarioAnual[i])

      // COLETA DO SALARIO MENSAL
      salarioMensal[i] <- calcSalarioMensal(salarioAnual[i])

      // COLETA DO VALOR DO IMPOSTO SOBRE SALARIO
      impostoSalario[i] <- impostoSobreSalario(salarioAnual[i])

      escreva("Renda com prestação de serviço: ")
      leia(rendaPs[i])

      // COLETA DO VALOR DO IMPOSTO SOBRE RENDA COM PRESTAÇÃO DE SERVIÇOS
      impostoServicos[i] <- impostoSobreServicos(rendaPs[i])

      escreva("Renda com ganho de capital: ")
      leia(rendaGc[i])

      // COLETA DO VALOR DO IMPOSTO SOBRE GANHO DE CAPITAL
      impostoGC[i] <- impostoSobreGC(rendaGc[i])

      escreva("Gastos médicos: ")
      leia(gastosMedicos[i])
      escreva("Gastos educacionais: ")
      leia(gastosEducacionais[i])

      // COLETA DO TOTAL DE GASTOS (GASTOS MÉDICOS + GASTOS EDUCACIONAIS)
      totalGastos[i] <- somaGastos(gastosMedicos[i], gastosEducacionais[i])

      escreval
   fimpara

   // EXIBIÇÃO DO RESUMO:
   para i de 0 ate N-1 faca
      escreval
      escreval("Resumo do ", i+1,"º contribuinte: ")

      // EXIBIÇÃO DO IMPOSTO BRUTO TOTAL
      A <- impostoBrutoTotal((impostoSalario[i]), (impostoServicos[i]), (impostoGC[i]))
      escreval("Imposto Bruto Total: ", A:8:2)

      // EXIBIÇÃO DO ABATIMENTO
      B <- abatimento(impostoSalario[i], impostoServicos[i], impostoGC[i], gastosMedicos[i], gastosEducacionais[i])
      escreval("Abatimento: ", B:7:2)

      //EXIBIÇÃO DO IMPOSTO DEVIDO (Imposto Bruto Total - Abatimento)
      escreva("Imposto devido: ",impostoDevido(A , B):8:2)
      escreval
   fimpara


Fimalgoritmo
