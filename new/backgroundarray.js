const backgroundarray = new Array();
//definindo imagens
const valleyofend1 = new drawableObj();
valleyofend1.src = "image/background/valleyofend/waterfall1.png";
valleyofend1.posx=0;
valleyofend1.posy=0;
valleyofend1.resizex=1;
valleyofend1.resizey=1;
const valleyofend2 = new drawableObj();
valleyofend2.src = "image/background/valleyofend/waterfall2.png";
valleyofend2.posx=0;
valleyofend2.posy=0;
valleyofend2.resizex=1;
valleyofend2.resizey=1;
const valleyofend3 = new drawableObj();
valleyofend3.src = "image/background/valleyofend/waterfall3.png";
valleyofend3.posx=0;
valleyofend3.posy=0;
valleyofend3.resizex=1;
valleyofend3.resizey=1;
const valleyofendarr = new Array(valleyofend1,valleyofend2,valleyofend3);
//cria e nomeia o background
const valleyofend = new Background();
valleyofend.imageset = valleyofendarr;
valleyofend.name = "valley of end";
// definindo grounds
const line1 = new Line(-0.1 ,0.5 ,0.27 ,0.5 );
const line2 = new Line(0.67 ,0.5 , 1.11 ,0.5 );
const line3 = new Line(0.25 ,0.6 , 0.7 ,0.6 );
valleyofend.ground = [line1,line2,line3];

backgroundarray.push(valleyofend);


const city1 = new drawableObj();
city1.src="image/background/city/city1.png";
city1.posx =0;
city1.posy =0;
city1.resizex =1;
city1.resizey =1;
const city2 = new drawableObj();
city2.src="image/background/city/city2.png";
city2.posx =0;
city2.posy =0;
city2.resizex =1;
city2.resizey =1;
const city3 = new drawableObj();
city3.src="image/background/city/city3.png";
city3.posx =0;
city3.posy =0;
city3.resizex =1;
city3.resizey =1;
const city = new Background();
const cityarr = new Array(city1,city2,city3);
city.name = "city";
city.imageset = cityarr;
backgroundarray.push(city);