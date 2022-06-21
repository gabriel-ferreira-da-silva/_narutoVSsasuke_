const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


//canvas.width= 2400;
//canvas.height= 2000;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
/*
const scenario = new Layer(ctx, window, canvas);
/*
const sasuke = new Character(scenario.ctx,scenario.window, scenario.canvas.width, scenario.canvas.height);
sasuke.CurrSprite ="Sprites/sasuke/running/running1.png";
sasuke.setFrame();

const fireball = new Special(scenario.ctx,scenario.window, scenario.canvas.width, scenario.canvas.height,sasuke);
const srcarry= new Array("special/fireball/fireball1.png","special/fireball/fireball2.png","special/fireball/fireball3.png");
fireball.setimages(srcarry);

sasuke.special = fireball;
sasuke.basesrc = "sasuke";

const valleyofend = new Background(scenario.ctx,scenario.window, scenario.canvas.width, scenario.canvas.height);
valleyofend.maxframe =2;
const sourcesarray = new Array("sprites/waterfall1.png","sprites/waterfall2.png","sprites/waterfall3.png");
valleyofend.setimages(sourcesarray);
sasuke.layer=scenario;
*/
/*
valleyofend.ctx = scenario.ctx;
*/
/*
scenario.add(valleyofend);
sasuke.setgrounds(valleyofend.grounds);
scenario.add(sasuke);
sasuke.addspecial(fireball);
//scenario.add(fireball);
*/


let fps, fpsInterval, startTime , now, then, elapsed;

function startAnimating(fps){
    
    fpsInterval=1000/fps;
    then= Date.now();
    startTime=then;
    animate();

}
let count=0;
/*
const sprite = new Image();
sprite.src = "/home/gabriel/Desktop/projetos/naruto_GAME/_narutoVSsasuke_/_narutoVSsasuke_/old/Sprites/sasuke/idle";
*/

const sprite = new Image();
sprite.src = "idle1.png";

const sasuke = new drawableObj();
sasuke.ctx = ctx;
sasuke.canvas = canvas;
sasuke.src = "idle1.png";
sasuke.resizex= 0.3;
sasuke.resizey= 0.5;


function animate(){
    //track.play();
    requestAnimationFrame(animate);
    now =Date.now();
    elapsed=now-then;
    if(elapsed> fpsInterval){
        then=now-(elapsed%fpsInterval);        
        ctx.drawImage(sprite,0,0,canvas.width,canvas.height);
        
        sasuke.draw();
        requestAnimationFrame(animate);
        
    }
}

function start(){
    startAnimating(25);    
}

start();


/*
function animate(){

   
        ctx.drawImage(waterfall[waterfallFrame],0,0,canvas.width,canvas.height);
        sasuke.draw();
        if(waterfallFrame<2) waterfallFrame++ 
        else waterfallFrame=0;

        requestAnimationFrame(animate);
        
    
}        



let fps, fpsInterval, startTime , now, then, elapsed;

function startAnimating(fps){
    
    fpsInterval=1000/fps;
    then= Date.now();
    startTime=then;
    animate();

}

startAnimating(10);
*/






