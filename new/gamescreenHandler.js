class GameScreenHandler{
    constructor(ctx, canvas, window){
        this.ctx= ctx;
        this.window = window;

        this.canvas= canvas;
        this.object = new Set();
        
        this.#initialize();
    }

    #initialize(){
            
    }

    add(ob){
        ob.ctx = this.ctx;
        ob.gamescreen =this;
        ob.window =this.window;
        /*ob.canvasWidth = this.canvas.width;
        ob.canvasHeight =this.canvas.height;
        */
       ob.canvas =this.canvas;
        this.object.add(ob);

    }

    draw(currentFrame){
        let i= null;
        this.object.forEach (function(ob) {

            ob.draw(currentFrame);
            if(ob.initiated ==false){
                i=ob;
            }
          })

        
        this.object.delete(i);
        
    }
}