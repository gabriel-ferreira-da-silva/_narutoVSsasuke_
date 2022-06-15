class Layer{
    constructor(ctx, window, canvas){
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
        ob.layer =this;
        ob.window =this.window;
        ob.canvasWidth = this.canvas.width;
        ob.canvasHeight =this.canvas.height;
        
        this.object.add(ob);

    }

    draw(){
        let i= null;
        this.object.forEach (function(ob) {

            ob.draw();
            if(ob.initiated ==false){
                i=ob;
            }
          })

        
        this.object.delete(i);
        
    }
}