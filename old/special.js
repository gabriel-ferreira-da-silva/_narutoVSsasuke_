class Special{
    //constructor(ctx, window, canvasWidth, canvasHeight,character){
    constructor(){
        //variaveis universais
        this.ctx=null;
        this.window=null;
        this.canvasWidth=null;
        this.canvasHeight=null;


        this.maxframe=0;
        this.currframe=0;
        this.resizex=0.3;
        this.resizey=0.3;

        this.character=null;
        this.x=null;//this.character.x;
        this.y=null;//this.character.y - (this.resizey);
        this.type ="special";
        this.name= "";
        this.layer;
        this.buffer=0;
        this.initiated=false;
        this.requested=false;

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

    draw(  ){
            if(this.requested ==true){
            if(this.initiated == false){
                this.x = this.character.x;
                this.y = this.character.y - (this.resizey/2);
            }

            this.initiated=true;
            
            this.ctx.drawImage(this.frame[this.currframe], this.canvasWidth*this.x ,this.canvasHeight*this.y,this.canvasWidth*this.resizex,this.canvasHeight*this.resizey);
            if(this.currframe<this.maxframe){
                this.currframe++;
            } else{
                this.currframe=0;
            }

            if(this.x*this.canvasWidth > this.canvasWidth){
                this.initiated=false;
                this.requested=false;
             }else{
                this.x+=0.1;
                this.initiated=true;
            }            
            }
        }

}

const fireball = new Special();
const srcarry= new Array("special/fireball/fireball1.png","special/fireball/fireball2.png","special/fireball/fireball3.png");
fireball.setimages(srcarry);



/*
const fireball = new Special();
const srcarry= new Array("special/fireball/fireball1.png","special/fireball/fireball2.png","special/fireball/fireball3.png");
fireball.setimages(srcarry);*/