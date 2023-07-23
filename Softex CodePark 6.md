# Proposta:

Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.

# Resposta

```portugol
inicio
  escreva "O transporte é motorizado?"
    leia "motor"
  se motor = "Não" então
    escreva "O transporte considerado é uma bicileta."
  senao
    escreva "É necessário o uso de capacete?"
    leia Capacete
     
  se Capacete = "Sim" então
    escreva "O transporte considerado foi uma moto."
  senao
    escreva "O transporte é pesado?"
    leia pesado
  se pesado = "Sim" então
    escreva "O transporte considerado é o trator."
  senao
    escreva "Não é possivel definir o meio de transporte."

```
