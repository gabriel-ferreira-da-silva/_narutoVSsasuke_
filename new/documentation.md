# documentação/diario
# introducao


o objetivo desse projeto eh praticar javascript , pythin networking e banco de dados a ponto de ser
algo simples porem funcional


# classes e funções mais basicas

## classe drawableObj


quero usar bastante orientação a objetos para q o jogo fique modularizado e facil de se adicionar,
editar e excluir qualquer parte sem prejudicar o tudo. a classe mais basica de todas é a drawableObj.


ela herda da classe Image() e vai servir para sustentar todas as outras figuras, imagens e sprites. 
define as caracteristicas mais basicas para se desenhar na tela, posição, formmato , tamanho e mais
algumas informaçãoes que serão usadas pelas classes filhas dela.

## classe animationControl


guarda algumas variaveis para controle da animação. 



# sprites

## background

o controle do background é a razão pela qual eu tive de refazer esse projeto pela 3 vez. uma boa classe background deve permitir o controle dos frames, ter um chão onde os personagems possam se
sustentar. ao mesmo tempo q um background mais simples é muito facil de se fazer e trabalhar qualquer 
complexidade que se queira adicionar ao jogo fica exponencialmente maior. antes eu tentei fazer 
os personagens antes de ter um bom background e isso é um erro.

background tem uma lista de drawableObject() q podem ser controladas independentemente.posso implementar efeitos paralax mais facilmente. todas as classes que criarei terão um metodo draw proprio.



