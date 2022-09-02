Algoritmo "atletas"

Var

   N, i, qtdHomem, qtdMulher : inteiro
   peso, pesoMedio, percHomens, altMedMulheres : real
   alturaMediaM, alturaMulher, alturaHomem, pesoMulher, pesoHomem : real
   pesoTotalM, alturaTotalM, pesoTotalH, alturaTotalH, maiorAltura : real
   nome, sexo, maiorNome  : caractere

Inicio

   escreva("Qual a quantidade de atletas? ")
   leia(N)

   // TESTE DE (N) - SOMENTE VALORES VÁLIDOS
   enquanto N <= 0 faca
      escreval("Valor invalido! Favor digitar um valor positivo:")
      leia(N)
   fimenquanto

   // VARIÁVEIS RECEBENDO VALOR INICIAL = 0
   pesoHomem <- 0
   pesoMulher <- 0
   pesoTotalM <- 0
   alturaTotalM <-0
   alturaHomem <- 0
   alturaMulher <- 0
   alturaMediaM <- 0
   qtdHomem <- 0
   qtdMulher <- 0
   pesoTotalH <- 0
   alturaTotalH <- 0
   maiorAltura <- 0
   maiorNome <- " "

   para i de 1 ate N faca

      escreval("Digite os dados do atleta numero ", i,":")

      escreva("Nome: ")
      leia(nome)

      escreva("Sexo: ")
      leia(sexo)

      // VERIFICAÇÃO DO SEXO - F P/ FEMININO OU M P/ MASCULINO
      enquanto (sexo <> "F") e (sexo <> "M") faca
         escreva("Valor invalido! Favor digitar F ou M: ")
         leia(sexo)
      fimenquanto

      se (sexo = "F") entao

         // VERIFICAÇÃO DA ALTURA MULHER
         qtdMulher <- qtdMulher + 1
         escreva("Altura : ")
         leia(alturaMulher)
         enquanto alturaMulher <= 0 faca
            escreva("Valor invalido! Favor digitar um valor positivo: ")
            leia(alturaMulher)
         fimenquanto
         alturaMulher <- alturaMulher
         alturaTotalM <- alturaTotalM + alturaMulher
         se maiorAltura < alturaMulher entao
            maiorAltura <- alturaMulher
            maiorNome <- nome
         fimse

         // VERIFICAÇÃO DO PESO MULHER
         escreva("Peso: ")
         leia(pesoMulher)
         enquanto pesoMulher <= 0 faca
            escreva("Valor invalido! Favor digitar um valor positivo: ")
            leia(pesoMulher)
         fimenquanto
         pesoMulher <- pesoMulher
         pesoTotalM <- pesoTotalM + pesoMulher

      senao
         // VERIFICAÇÃO DA ALTURA HOMEM
         qtdHomem <- qtdHomem + 1
         escreva("Altura : ")
         leia(alturaHomem)
         enquanto alturaHomem <= 0 faca
            escreva("Valor invalido! Favor digitar um valor positivo: ")
            leia(alturaHomem)
         fimenquanto
         alturaHomem <- alturaHomem
         alturaTotalH <- alturaTotalH + alturaHomem
         se maiorAltura < alturaHomem entao
            maiorAltura <- alturaHomem
            maiorNome <- nome
         fimse

         // VERIFICAÇÃO DO PESO HOMEM
         escreva("Peso: ")
         leia(pesoHomem)
         enquanto pesoHomem <= 0 faca
            escreva("Valor invalido! Favor digitar um valor positivo: ")
            leia(pesoHomem)
         fimenquanto
         pesoHomem <- pesoHomem
         pesoTotalH <- pesoTotalH + pesoHomem
      fimse
   fimpara

   // ELABORAÇÃO DAS FORMULAS
   pesoMedio <- (pesoTotalH + pesoTotalM) / N
   percHomens <- (qtdHomem * 100) / N
   se qtdMulher > 0 entao
      alturaMediaM <- alturaTotalM / qtdMulher
   fimse

   // ELABORAÇÃO DO RELATÓRIO
   escreval(" ")
   escreval("RELATÓRIO")
   escreval("Peso médio dos atletas: ", pesoMedio:3:2)
   escreval("Atleta mais alto: ", maiorNome)
   escreval("Porcentagem de homens: ", percHomens:3:1," %")
   se qtdMulher <= 0 entao
      escreval ("Não há mulheres cadastradas")
   senao
      escreval("Altura média das mulheres: ", alturaMediaM:3:2)
   fimse

Fimalgoritmo