class drawableObj extends Image{
    constructor(){
        super();

        // identificação
        this.type="";
        //parametros da tela 
        this.canvas;
        this.ctx;

        //posição, tamanho, 
        this.posx=0;
        this.posy=0;
        this.resizex=0;
        this.resizey=0;
    
    }

    setcanvas(canvas){
        this.canvas=canvas;
    }

    setctx(ctx){
        this.ctx = ctx;
    }

    draw(){
        this.ctx.drawImage(this, this.posx, this.posy, this.resizex*this.canvas.width, this.resizey*this.canvas.height )
    }
}

