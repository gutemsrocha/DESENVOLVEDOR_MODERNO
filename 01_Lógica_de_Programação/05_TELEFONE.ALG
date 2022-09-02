Algoritmo "telefone"
// Disciplina   : [Lógica de Programação]
// Capítulo    : Matrizes
// Professor   : Nélio Alves
// Descrição   : Desafio Telefone
// Autor(a)    : Gutembergue Santos Rocha Júnior
// Data atual  : 15/02/2022
Var
   // Seção de Declarações das variáveis

   // VARIÁVEIS
   M, N, i, j : inteiro

   // VETORES
   nome : vetor [0..9] de caractere
   telefone : vetor [0..9] de caractere
   tipoAssinatura : vetor [0..9] de inteiro
   minutos : vetor [0..9] de inteiro
   valorDaConta : vetor [0..9] de real
   excedente : vetor [0..9] de real
   minutagem : vetor [0..9] de inteiro

   // MATRIZES
   tabPrecos : vetor [0..2, 0..1] de real


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...


   //CAPTURA DE DADOS TABELA PRINCIPAL (NOME / TELEFONE / TIPO DE ASSINATURA /
   //MINUTOS E VALOR DA CONTA

   escreva("Informe a quantidade de clientes: ")
   leia(M)
   escreval

   para i de 0 ate M-1 faca
      escreval("Dados do ", i+1,"º cliente:")

      escreva("Nome: ")
      leia(nome[i])

      escreva("Telefone: ")
      leia(telefone[i])

      escreva("Tipo: ")
      leia(tipoAssinatura[i])

      enquanto (tipoAssinatura[i] <> 0) e (tipoAssinatura[i] <> 1) e (tipoAssinatura[i] <> 2) faca
         escreva("Digite um valor do Tipo de Assinatura válido: 0 , 1 ou 2: ")
         leia(tipoAssinatura[i])
      fimenquanto

      escreva("Minutos: ")
      leia(minutos[i])
      escreval

      minutagem[i] <- minutos[i] - 90
      se minutagem[i] > 0 entao
         excedente[i] <- minutagem[i]
      senao
         excedente[i] <- 0
      fimse

   fimpara

   // TABPRECOS (ASSINATURA X PREÇO)
   escreval
   escreval("Informe o preço básico e excedente de cada tipo de conta: ")
   escreval

   para i de 0 ate 2 faca
      escreval("Tipo ", i, ": ")
      leia(tabPrecos[i, 0])
      leia(tabPrecos[i, 1])
   fimpara

   // EXIBIÇÃO DO RELATÓRIO FINAL DOS CLIENTES
   escreval
   escreval("RELATÓRIO DE CLIENTES: ")
   escreval
   para i de 0 ate M-1 faca
      escreva(nome[i], ", ")
      escreva(telefone[i],", ")
      escreva("Tipo ",tipoAssinatura[i], ", ")
      escreva("Minutos: ",minutos[i],", ")

      // CÁLCULO DO VALOR DA CONTA
      // ABAIXO DOS 90 MINUTOS
      se minutos[i] < 90 entao

         se tipoAssinatura[i] = 0 entao
            valorDaConta[i] <- tabPrecos[0,0]
         senao
            se tipoAssinatura[i] = 1 entao
               valorDaConta[i] <- tabPrecos[1,0]
            senao
               se tipoAssinatura[i] = 2 entao
                  valorDaConta[i] <- tabPrecos[2,0]
               fimse
            fimse
         fimse

         // ACIMA DOS 90 MINUTOS
      senao
         se tipoAssinatura[i] = 0 entao
            valorDaConta[i] <- tabPrecos[0,0] + (excedente[i] * tabPrecos[0,1])
         senao
            se tipoAssinatura[i] = 1 entao
               valorDaConta[i] <- tabPrecos[1,0] + (excedente[i] * tabPrecos[1,1])
            senao
               se tipoAssinatura[i] = 2 entao
                  valorDaConta[i] <- tabPrecos[2,0] + (excedente[i] * tabPrecos[2,1])
               fimse
            fimse
         fimse
      fimse
      escreval("Conta = R$ ", valorDaConta[i]:5:2)
   fimpara

Fimalgoritmo
