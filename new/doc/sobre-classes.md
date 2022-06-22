# documentação/diario -  sobre classes

# introducao


o objetivo desse projeto eh praticar javascript , python networking e banco de dados a ponto de construir algo simples porem  funcional.


# classes e funções mais basicas


## classe drawableObj() - incompleto /funcional


quero usar bastante orientação a objetos para q o jogo fique modularizado e facil de se adicionar,
editar e excluir qualquer parte sem prejudicar o tudo. a classe mais basica de todas é a drawableObj.


ela herda da classe Image() e vai servir para sustentar todas as outras figuras, imagens e sprites. 
define as caracteristicas mais basicas para se desenhar na tela, posição, formmato , tamanho e mais
algumas informaçãoes que serão usadas para desenhar algo na tela


##  classe ScreenWidget() - iniciado / incompleto /


essa classe é a base de todos os outros objetos do jogo como character background special e etc... que serão herdeiras dela. ela contem metodos e funções importantes para comunicar-se como a classe GameScreenHandler().



## classe animationControl() - incompleto/funcional


guarda algumas variaveis para controle da animação. 


# sprites


## character() - iniciado / incompleto /não funcional

o character() é a classe que será o que o jogodar controlará. certametne sera a que mais recebe e manda informações. e a que mais vai fazer tudo crashar o tempo inteiro. fiquei na duvida se ela seria uma filah de drawableObj ou se assim como background um invelocro que seria responsavel por comunicar a sprite com todo os outros elementos da tela.

## special() - não iniciado


## background() - iniciado/incompleto/não funcional

o controle do background é a razão pela qual eu tive de refazer esse projeto pela 3 vez. uma boa classe background deve permitir o controle dos frames, ter um chão onde os personagems possam se
sustentar. ao mesmo tempo q um background mais simples é muito facil de se fazer e trabalhar qualquer 
complexidade que se queira adicionar ao jogo fica exponencialmente maior. antes eu tentei fazer 
os personagens antes de ter um bom background e isso é um erro.

background tem uma lista de drawableObject() q podem ser controladas independentemente.posso implementar efeitos paralax mais facilmente. todas as classes que criarei terão um metodo draw proprio.

# controles avançados


## GameScreenHandler() - não iniciado

talves essa seja a classe mais importante. ela vai controlar todas as outras classes e objetos que aparecem ou não na tela. controlar colisões, personagens e impressão de cada imagem será o trabalho dessa classe.