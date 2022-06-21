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


const arr = new Array(valleyofend1,valleyofend2,valleyofend3);

const valleyofend = new Background();
valleyofend.imageset = arr;

const backgroundarray = new Array();
backgroundarray.push(valleyofend);