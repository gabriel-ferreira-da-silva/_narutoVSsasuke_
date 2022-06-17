class Line{
    constructor(startx,starty,endx,endy){
        this.startx=startx;
        this.starty=starty;
        this.endx=endx;
        this.endy=endy;
    }
}
class Ground{
    constructor(){
        this.line=[];
    }
}

class Background{
    constructor(  ){
        //variaveis universais
        this.ctx=null;
        this.window=null;
        this.canvasWidth=null;
        this.canvasHeight=null;
        
        
        //fisica e movimento
        this.grounds= [];

        /****** */
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

    setgrounds(grounds){
        this.grounds=grounds;
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

const line1 = new Line(-0.1 ,0.5 ,0.27 ,0.5+0.025 );
const line2 = new Line(0.67 ,0.5 , 1.11 ,0.5+0.025 );
const line3 = new Line(0.25 ,0.6 , 0.7 ,0.6 +0.05 );

const grounds = [line1,line2,line3];
/*grounds.push(line1);
grounds.push(line2);
grounds.push(line3);*/
valleyofend.setgrounds(grounds);


