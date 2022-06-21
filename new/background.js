class Background{
    constructor(){

        this.imageset=[];

         // identificação
         this.type="background";

         // parametros da tela 
         this.canvas;
         this.ctx;
 
         // controle de tempo e frame
         this.layer=0;

         //controle de frames do background;
         this.currframe=0;
    }

    setup(ctx, canvas){
        this.ctx =ctx;
        this.canvas =canvas;
        for(let i=0; i < this.imageset.length ; i++ ){
            this.imageset[i].ctx = this.ctx;
            this.imageset[i].canvas = this.canvas;
            
        }
    }
    draw(currentFrame){
        
        this.imageset[this.currframe++].draw(currentFrame);
        if(this.currframe == this.imageset.length ){
            this.currframe=0;;
        }
        
    }
}

