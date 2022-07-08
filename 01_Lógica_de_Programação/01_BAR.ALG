Algoritmo "DESAFIO_BAR"

Var

   ingressoF, ingressoM, cerveja, refrigerante, espetinho : real
   ingresso, isento, consumo, aPagar : real

   qtdCerveja, qtdRefrigerante, qtdEspetinhos : inteiro

   couvert, sexo, naoIsento : caractere


Inicio

      ingressoM <- 10.00
      ingressoF <- 8.00
      cerveja <- 5.00
      refrigerante <- 3.00
      espetinho <- 7.00

      //SE O CONSUMO >= R$30,00 couver não é cobrado
      
      escreva("Sexo: ")
      leia(sexo)

      escreva("Quantidade de Cervejas: ")
      leia(qtdCerveja)
      
      escreva("Quantidade de Refrigerantes: ")
      leia(qtdRefrigerante)
      
      escreva("Quantidde de Espetinhos: ")
      leia (qtdEspetinhos)

      escreval(" ")
      
      escreval("RELATÓRIO:")

      se (sexo = "F") ou (sexo = "f") entao
         ingresso <- ingressoF
         senao
            se (sexo = "M") ou (sexo = "m") entao
            ingresso <- ingressoM
            senao
            fimse
      fimse
      
      consumo <- (qtdCerveja * cerveja) + (qtdRefrigerante * refrigerante) + (qtdEspetinhos * espetinho)


      se consumo > 30.00 entao
         escreval("Consumo = R$: ", consumo:5:2)
         escreval("Isento de Couvert")
         escreval("Ingresso = R$ ", ingresso:5:2)
         escreval(" ")
         escreval("Valor a Pagar: R$ ", consumo + ingresso:5:2)

      senao
         escreval("Consumo = R$: ", consumo:5:2)
         escreval("Couvert = R$ 4.00")
         escreval("Ingresso = R$", ingresso:5:2)
         escreval(" ")
         escreval("Valor a Pagar: R$ ", consumo + ingresso + 4.00:5:2)

       fimse


Fimalgoritmo