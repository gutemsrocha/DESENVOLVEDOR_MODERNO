Algoritmo "IMPOSTO"


Var

   rendaAnualSalario, rendaAnualPrestServico, rendaAnualGanhoCapital : real
   gastosMedicos, gastosEducacionais, salario, imposto : real
   impostoSobPrestacaoDeServico, impostoSobRendaAnualGanhoCapital   : real
   gastosDedutiveis,  maximoDedutivel, impostoBrutoTotal : real
   salarioBrutoTotal, salarioBrutoMensal, abatimento, impostoDevido     : real

Inicio

   escreva("Renda anual com salario: ")
   leia(rendaAnualSalario)
   escreva("Renda anual com prestação de serviço: ")
   leia(rendaAnualPrestServico)
   escreva("Renda anual com ganho de capital: ")
   leia(rendaAnualGanhoCapital)
   escreva("Gastos médicos: ")
   leia(gastosMedicos)
   escreva("Gastos educacionais: ")
   leia(gastosEducacionais)
   escreval(" ")

   salario <- rendaAnualSalario/12

   //CÁLCULO DO IMPOSTO SOBRE O SALÁRIO

   se salario < 3000 entao
      imposto <- 0

   senao
      se salario < 5000 entao
         imposto <- 10/100

      senao
         se salario > 5000 entao
            imposto <- 20/100
         senao
         fimse
      fimse
   fimse

   // CÁLCULOS DOS DESCONTOS

   // CÁLCULO DO IMPOSTO DE RENDA SOBRE PRESTAÇÕES DE SERVIÇOS 15%

   se rendaAnualPrestServico > 0  entao
      impostoSobPrestacaoDeServico <- 15/100
   senao

   fimse

   // -------------------------------------

   // CÁLCULO DO IMPOSTO DE RENDA SOBRE GANHOS DE Capital 20%

   se rendaAnualGanhoCapital > 0 entao
      impostoSobRendaAnualGanhoCapital <- 20/100
   senao

   fimse

   // -------------------------------------

   // CÁLCULO DO IMPOSTO BRUTO TOTAL

   impostoBrutoTotal <- (rendaAnualSalario * imposto) + (rendaAnualPrestServico * impostoSobPrestacaoDeServico) + (rendaAnualGanhoCapital * impostoSobRendaAnualGanhoCapital)
   salarioBrutoMensal <- (rendaAnualSalario + rendaAnualPrestServico + rendaAnualGanhoCapital)/12
   salarioBrutoTotal <- (rendaAnualSalario + rendaAnualPrestServico + rendaAnualGanhoCapital)

   // CÁLCULO DO ABONO ATÉ 30% DO IMPOSTO DEVIDO (GASTOS MÉDICOS E EDUCACIONAIS)

   gastosDedutiveis <-  gastosMedicos +  gastosEducacionais
   maximoDedutivel <- ( (rendaAnualSalario * imposto) + (rendaAnualPrestServico * impostoSobPrestacaoDeServico) + (rendaAnualGanhoCapital * impostoSobRendaAnualGanhoCapital))   * 30/100

   // -------------------------------------

   // CALCULO DA VARIÁVEL ABATIMENTO


   se (gastosDedutiveis > maximoDedutivel) entao
      abatimento <- maximoDedutivel
   senao
      abatimento <- gastosDedutiveis
   fimse
   impostoDevido <- impostoBrutoTotal - abatimento

   // -------------------------------------

   escreval("RELATÓRIO DE IMPOSTO DE RENDA")
   escreva(" ")
   escreval("CONSOLIDADO DE RENDA")
   escreval("Imposto sobre salário: R$ ", rendaAnualSalario * imposto:8:2)
   escreval("Imposto sobre serviços: R$ ", rendaAnualPrestServico * impostoSobPrestacaoDeServico:8:2)
   escreval("Imposto sobre ganho de Capital: R$ ", rendaAnualGanhoCapital * impostoSobRendaAnualGanhoCapital:8:2)
   escreval(" ")
   escreval("DEDUÇÕES")
   escreval("Máximo dedutível: R$ ",maximoDedutivel:8:2)
   escreval("Gastos dedutíveis: R$ ",gastosDedutiveis:8:2)
   escreval(" ")
   escreval("RESUMO")
   escreval("Imposto Bruto Total: R$ ",impostoBrutoTotal:8:2)
   escreval("Abatimento: RS ", abatimento:8:2)
   escreval("Imposto devido: R$ ", impostoDevido: 8:2)


Fimalgoritmo