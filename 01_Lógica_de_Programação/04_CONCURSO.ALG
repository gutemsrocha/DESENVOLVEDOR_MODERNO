Algoritmo "concurso"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Nélio Alves
// Descrição   : DESAFIO CONCURSO
// Autor(a)    : Gutembergue Santos Rocha Junior
// Data atual  : 10/02/2022

Var
   // Seção de Declarações das variáveis
   N, i, qtdAprovados, posMaior : inteiro
   porcentagemAprovados, maiorNota, notaMediaAprov : real

   nome: vetor [0..9] de caractere
   notaEtapa1: vetor [0..9] de real
   notaEtapa2: vetor [0..9] de real
   mediaEtapas: vetor [0..9] de real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   escreva("Qual a quantidade de pessoas? ")
   leia(N)
   escreval

   //COLETA DE DADOS
   para i de 0 ate N-1 faca

      escreval("Dados da ",i+1,"ª pessoa:")
      escreva("Nome: ")
      leia(nome[i])
      escreva("Nota etapa 1: ")
      leia(notaEtapa1[i])
      escreva("Nota etapa 2: ")
      leia(notaEtapa2[i])
      escreval

   fimpara

   //EXIBIÇAO DAS PESSOAS, NOTAS E MÉDIAS:
   escreval
   escreval("TABELA:")

   para i de 0 ate N-1 faca

      mediaEtapas[i] <- (notaEtapa1[i] + notaEtapa2[i]) / 2

      escreva(Nome[i],", ")
      escreva(notaEtapa1[i]:4:1,", ")
      escreva(notaEtapa2[i]:4:1,", ")
      escreval("MEDIA = ",mediaEtapas[i]:4:2)

   fimpara

   //EXIBIÇÃO e CONTAGEM DAS PESSOAS APROVADAS:
   escreval
   escreval("PESSOAS APROVADAS:")

   qtdAprovados <- 0
   para i de 0 ate N-1 faca

      se mediaEtapas[i] >= 70 entao
         escreval(nome[i])
         qtdAprovados <- qtdAprovados + 1
      fimse

   fimpara

   //PERCENTAGEM DE APROVAÇÃO e VALIDAÇÃO PARA CONTINUIDADE DO RELATÓRIO
   se qtdAprovados > 0 entao
      porcentagemAprovados <- (qtdAprovados * 100) / N
      escreval
      escreval("Porcentagem de aprovação: ", porcentagemAprovados:4:1," %")

      //EXIBIÇÃO DO ALUNO COM A MAIOR NOTA
      maiorNota <- 0
      posMaior <- 0
      para i de 0 ate N-1 faca
         se notaEtapa1[i] > maiorNota entao
            maiorNota <- notaEtapa1[i]
            posMaior <- i
         fimse

         se notaEtapa2[i] > maiorNota entao
            maiorNota <- notaEtapa2[i]
            posMaior <- i
         fimse
      fimpara

      escreval("Maior nota: ", nome[posMaior])

      //EXIBIÇÃO DA NOTA MÉDIA DOS APROVADOS
      notaMediaAprov <- 0
      para i de 0 ate N-1 faca
         se mediaEtapas[i] >= 70 entao
            notaMediaAprov <- notaMediaAprov + mediaEtapas[i]
         fimse
      fimpara

      notaMediaAprov <- notaMediaAprov / qtdAprovados
      escreva("Nota média dos aprovados: ", notaMediaAprov:4:2)

      // ***** PARA OS CASOS DE NÃO APROVADOS *****
   senao
      se qtdAprovados <= 0 entao
         escreval
         escreval("Porcentagem de aprovação: 0.0 %")

         //EXIBIÇÃO DO ALUNO COM A MAIOR NOTA
         maiorNota <- 0
         posMaior <- 0
         para i de 0 ate N-1 faca
            se notaEtapa1[i] > maiorNota entao
               maiorNota <- notaEtapa1[i]
               posMaior <- i
            fimse

            se notaEtapa2[i] > maiorNota entao
               maiorNota <- notaEtapa2[i]
               posMaior <- i
            fimse
            escreval("Maior nota: ", nome[posMaior])
            escreval("Não há candidatos aprovados")
         fimpara
      fimse
   fimse



Fimalgoritmo
