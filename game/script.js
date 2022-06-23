const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

valleyofend.setup(ctx, canvas, valleyofend.imageset );
valleyofend.setfpsfactor(1);

city.setup(ctx, canvas, city.imageset);
naruto.sprite.setctx(ctx);
naruto.sprite.setcanvas(canvas);
sasuke.sprite.setctx(ctx);
sasuke.sprite.setcanvas(canvas);

const gamescreen = new GameScreenHandler(ctx, canvas, window);
gamescreen.add(valleyofend);
gamescreen.add(naruto);
gamescreen.add(sasuke);


window.addEventListener("keyup",function(e){
    delete naruto.keys[e.code[3]];
    delete sasuke.keys[e.code[3]];
    //state="idle";
});

window.addEventListener("keydown",function(e){
    naruto.keys[e.code.toString()[3]]=true;
    sasuke.keys[e.code.toString()[3]]=true;    
    }
);  

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
        
        gamescreen.draw( control.currentFrame );
    
        control.atualize();
        control.print();
        requestAnimationFrame(animate);
        
    }
}



function start(){
    startAnimating(10);    
}

start();
