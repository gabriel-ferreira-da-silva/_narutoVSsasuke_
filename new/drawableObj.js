class drawableObj extends Image{
    constructor(){
        
        super();

        // identificação
        this.type="";

        // parametros da tela 
        this.window;
        this.canvas;
        this.ctx;

        // posição, tamanho, 
        this.posx=0;
        this.posy=0;
        this.resizex=0;
        this.resizey=0;

        // controle de tempo e frame
        this.fps=5;
        this.fpsfactor=1;
        this.layer=0;
    
    }

    setcanvas(canvas){
        this.canvas=canvas;
    }

    setctx(ctx){
        this.ctx = ctx;
    }

    draw(currentFrame){
        if( currentFrame % this.fpsfactor == 0){
            this.ctx.drawImage(this, this.posx*this.canvas.width, this.posy*this.canvas.height, this.resizex*this.canvas.width, this.resizey*this.canvas.height )
        }
        
    }
}

