class Background{
    constructor(  ){
        //variaveis universais
        this.ctx=null;
        this.window=null;
        this.canvasWidth=null;
        this.canvasHeight=null;


        this.maxframe=0;
        this.currframe=0;
        this.x=0;
        this.y=0;
        this.type ="background";
        this.layer=0;
        this.buffer=0;
        this.x=0;

        this.frame=[];
        this.source= new Array();
    }

    setimages(sourcesarray){
        for(let i=0; i< sourcesarray.length ;i++ ){
            const image = new Image();
            image.src = sourcesarray[i];
            this.frame.push(image);
        }
        this.maxframe= sourcesarray.length-1;
        this.currframe=0;
    }

    drawparalax(){
        let saida=true;
        while(saida){
            this.ctx.drawImage(this.frame[this.currframe], this.x * (this.currframe + 1) ,0,this.canvasWidth,this.canvasHeight);
            this.ctx.drawImage(this.frame[this.currframe],this.x++ * (this.currframe + 1) - this.canvasWidth,0,this.canvasWidth,this.canvasHeight);            
            
            if(this.x * (this.currframe + 1)> this.canvasWidth){
                this.x=1;
            }
            
            console.log(this.x);
            //console.log(this.source[this.currframe]);
            if(this.currframe<this.maxframe){
                this.currframe++;
            } else{
                saida=false;
                this.currframe=0;
            }
        }
    }

    draw(){
            
            this.ctx.drawImage(this.frame[this.currframe],0,0,this.canvasWidth,this.canvasHeight);
            if(this.currframe<this.maxframe){
                this.currframe++;
            } else{
                this.currframe=0;
            }
    }
    draw3(){
        let saida=true;
        while(saida){
            this.frame.src = this.source[this.currframe];
            this.ctx.drawImage(this.frame,this.x + (this.currframe + 1),0,this.canvasWidth,this.canvasHeight);
            this.ctx.drawImage(this.frame,(this.x + (this.currframe + 1) ) - this.canvasWidth,0,this.canvasWidth,this.canvasHeight);
            console.log(this.source[this.currframe]);
            if(this.currframe<this.maxframe){
                this.currframe++;
                this.x+=1;
            } else{
                saida=false;
                this.currframe=0;
            }
        }
    }
    draw2(){
        let saida=true;
        while(saida){
            this.frame.src = this.source[this.currframe];
            this.ctx.drawImage(this.frame,this.x*(this.currframe + 1),0,this.canvasWidth,this.canvasHeight);
            this.ctx.drawImage(this.frame,(this.x*(this.currframe + 1) ) - this.canvasWidth,0,this.canvasWidth,this.canvasHeight);
            console.log(this.source[this.currframe]);
            if(this.currframe<this.maxframe){
                this.currframe++;
                this.x+=1;
                if(this.x >this.canvasWidth){
                    this.x=0;
                }
            } else{
                saida=false;
                this.currframe=0;
            }
        }
    }


}


const valleyofend = new Background();
valleyofend.maxframe =2;
const sourcesarray = new Array("sprites/waterfall1.png","sprites/waterfall2.png","sprites/waterfall3.png");
valleyofend.setimages(sourcesarray);