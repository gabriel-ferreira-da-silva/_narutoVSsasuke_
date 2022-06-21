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

const sprite = new Image();
sprite.src = "idle1.png";

const sasuke = new drawableObj();
sasuke.ctx = ctx;
sasuke.canvas = canvas;
sasuke.src = "idle1.png";
sasuke.resizex= 0.3;
sasuke.resizey= 0.5;

const naruto = new drawableObj();
naruto.setctx(ctx);
naruto.setcanvas(canvas);
naruto.src = "idle2.png";
naruto.posx = 0.4;
naruto.posy = 0.4;
naruto.resizex= 0.3;
naruto.resizey= 0.5;
naruto.fpsfactor = 2;


valleyofend.setup(ctx, canvas);

let fps, fpsInterval, startTime , now, then, elapsed;
const control = new animationControl();

function startAnimating(fps){
    
    control.fps = fps;
    control.fpsInterval=1000/control.fps;
    control.then= Date.now();
    control.startTime=control.then;
    animate();

}
let count=0;


function animate(){
    //track.play();
    requestAnimationFrame(animate);
    control.now =Date.now();
    
    if(control.getelapsed() > control.fpsInterval){
        control.then=control.now-(control.elapsed%control.fpsInterval);
        
        valleyofend.draw(control.currentFrame);
        //naruto.draw(control.currentFrame);
        //sasuke.draw(control.currentFrame);
        control.atualize();
        control.print();
        requestAnimationFrame(animate);
        
    }
}



function start(){
    startAnimating(10);    
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






