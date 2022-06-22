class Background extends ScreenWidget{
    constructor(){

        super();

        this.imageset=new Array();

         // identificação
         this.type="background";
         this.name="";

 
         // controle de tempo e frame
         this.layer=0;
        //
        this.option = "normal";
         //controle de frames do background;
         this.currframe=0;
    }

    setup1(ctx, canvas){
        this.ctx =ctx;
        this.canvas =canvas;
        for(let i=0; i < this.imageset.length ; i++ ){
            this.imageset[i].ctx = this.ctx;
            this.imageset[i].canvas = this.canvas;
            
        }
    }

    setfpsfactor(fpsfactor){
        for(let i=0; i < this.imageset.length ; i++ ){
            this.imageset[i].fpsfactor = fpsfactor;
            
        }
    }
    
    draw(currentFrame){

        if(this.option == "parallax"){
            for(let i = 0; i < this.imageset.length ; i++){
                this.imageset[i].draw(currentFrame);
            }
        }else{
            console.log(this.currframe);
            this.imageset[this.currframe++].draw(currentFrame);
            if(this.currframe == this.imageset.length ){
            this.currframe=0;    
        }
        }
        
        
    }
}

