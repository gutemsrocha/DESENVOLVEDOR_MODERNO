package aplication;

import java.util.Locale;
import java.util.Scanner;

public class Program {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		String nome;
		char sexo;
		double altura = 0;
		double peso;

		double somaPeso = 0;
		double pesoMedioAtletas = 0;

		String atletaMaisAlto = " ";
		double maiorAltura = 0;
		double somaAlturaMulheres = 0;
		double alturaMediaMulheres = 0;

		double percentagemHomens = 0;

		int qtdAtletas = 0;
		int qtdHomens = 0;
		int qtdMulheres = 0;

		System.out.print("Digite a quantidade de atletas: ");
		qtdAtletas = sc.nextInt();

		for (int i = 0; i < qtdAtletas; i++) {

			System.out.println("Digite os dados do atleta número " + (i + 1) + ":");

			System.out.print("Nome: ");
			sc.nextLine();
			nome = sc.nextLine();

			System.out.print("Sexo: ");
			sexo = sc.nextLine().charAt(0);

			while ((sexo != 'F') && (sexo != 'M')) {
				System.out.print("Valor Inválido! Favor digirar F ou M: ");
				sexo = sc.nextLine().charAt(0);
			}

			System.out.print("Altura: ");
			altura = sc.nextDouble();

			while (altura <= 0) {
				System.out.print("Valor Inválido! Favor digirar um valor positivo: ");
				altura = sc.nextDouble();
			}

			System.out.print("Peso: ");
			peso = sc.nextDouble();

			while (peso <= 0) {
				System.out.print("Valor Inválido! Favor digirar um valor positivo: ");
				peso = sc.nextDouble();
			}

			somaPeso += peso;
			pesoMedioAtletas = somaPeso / qtdAtletas;

			if (maiorAltura < altura) {
				maiorAltura = altura;
				atletaMaisAlto = nome;

			}

			if (sexo == 'F') {
				qtdMulheres++;
				somaAlturaMulheres += altura;
			} else {
				qtdHomens++;
				percentagemHomens = (double) (qtdHomens * 100) / qtdAtletas;
			}

			alturaMediaMulheres = somaAlturaMulheres / qtdMulheres;

		}

		System.out.println("");
		System.out.println("RELATÓRIO: ");
		System.out.printf("Peso Médio dos Atletas: %.2f%n", pesoMedioAtletas);
		System.out.printf("Atleta mais alto: %s%n", atletaMaisAlto);
		System.out.printf("Porcentagem de Homens: %.1f %%%n ", percentagemHomens);
		if (qtdMulheres > 0) {
			System.out.printf("Altura média das mulheres: %.2f%n ", alturaMediaMulheres);
		} else {
			System.out.println("Não há mulheres cadastradas.");
		}
		sc.close();

	}

}
