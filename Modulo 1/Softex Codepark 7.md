# Proposta:

Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.

![exemplo](https://github.com/emiliomonteiro/fapsoftex/assets/13697371/e9ad5ba3-ac1e-4341-bbb7-a18d3fbc764d?raw=true)


# Resposta

```portugol
programa 
{
	funcao inicio() 
	{
		inteiro numero, resultado, cont
		
		escreva("Deseja visualizar a tabuada de qual numero? \n")
		leia(numero)

		para (cont = 1; cont <= 10; cont++) 
		{
			resultado = numero * cont 
			escreva (numero, " * ", cont, " = ", resultado , "\n")
		}
	}
}

```
