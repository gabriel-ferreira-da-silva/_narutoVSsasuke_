class Character{
    //constructor(ctx, window, canvasWidth, canvasHeight){
    constructor(){
        //variaveis universais
        
        this.window=null;
        this.canvasWidth=null;
        this.canvasHeight=null;
        this.ctx=null;

        // tipo
        this.type = "character";
        this.layer = 1;

        //movimento e fisica
        this.x=0.4;
        this.y=0;
        this.velFactor=0.05;

        this.layer;

        this.special=null;

        this.state="idle";
        
        this.keys =[];
        //sprites e imgaesn
        this.maxframe=0;
        this.currframe=0;
        this.basesrc="";
        this.frame=new Image();
        this.CurrSprite="";
        this.framesdic = new Object();
        //outros

        this.#setFrame();
    }
    draw(){
        this.getmove();
        this.handleState();
        this.ctx.drawImage(this.frame,this.canvasWidth*this.x,this.canvasHeight*this.y,this.canvasWidth*0.1,this.canvasHeight*0.1);
    }

    getmove(){
        this.state ="idle";
        if(this.keys['D']){
            this.x+=this.velFactor;
            this.state = "running";
        }
        if(this.keys['A']){
            this.x-=this.velFactor;
            this.state = "running-left";
        }
        if(this.keys['S']){
            this.y+=this.velFactor;
        }
        if(this.keys['W']){
            this.y-=this.velFactor;
        }

        if(this.keys['J']){
            this.state = "fireball-attack";
        }
    }

    handleState(){
        switch(this.state){
            case "idle":
               
                this.maxframe = 4;
                if(this.currframe > this.maxframe ||this.currframe < 1 ){
                    this.currframe=1;
                }

                this.CurrSprite ="Sprites/"+ this.basesrc +"/idle/idle" + this.currframe + ".png";
                this.setFrame();
                console.log(this.CurrSprite);
                this.currframe++;

            break;

            case "running":
                this.maxframe = 6;
                if(this.currframe > this.maxframe ||this.currframe < 1 ){
                    this.currframe=1;
                }

                this.CurrSprite ="Sprites/"+ this.basesrc +"/running/running" + this.currframe + ".png";
                this.setFrame();
                console.log(this.CurrSprite);
                this.currframe++;

            break;

            case "running-left":
                this.maxframe = 6;
                if(this.currframe > this.maxframe ||this.currframe < 1 ){
                    this.currframe=1;
                }

                this.CurrSprite ="Sprites/"+ this.basesrc +"/running-left/running-left" + this.currframe + ".png";
                this.setFrame();
                console.log(this.CurrSprite);
                this.currframe++;

            break;
            case "fireball-attack":

                this.maxframe = 3;
                if(this.currframe > this.maxframe ||this.currframe < 1 ){
                    this.currframe=1;
                }

                this.CurrSprite ="Sprites/"+ this.basesrc +"/jutsu/jutsu" + this.currframe + ".png";
                this.setFrame();
                console.log(this.CurrSprite);
                this.currframe++;

                if(this.special.initiated == false){
                    this.special.x= this.x;
                    this.special.y= this.y;
                    
                    this.layer.object.add(this.special);
                }
                
                
            break;
            default:
                this.state="idle";
                break;



        }
    }

    addspecial(special){
        this.special = special;
        special.character=this;
        special.ctx = this.ctx
        special.canvasheight = this.canvasHeight;
        special.canvaswidth = this.canvasWidth;
    }


    #setFrame(){
        const keys = this.keys;
        //let state = this.state;
        
        window.addEventListener("keyup",function(e){
            delete keys[e.code[3]];
            //state="idle";
            this.state="idle";
    
        });

        window.addEventListener("keydown",function(e){
            keys[e.code.toString()[3]]=true;    
            }
        );  

        
        this.keys=keys;      
        
    }

    
    setFrame(){
        this.frame.src=this.CurrSprite;//"sprites/punch.png";
        
    }

}

const sasuke = new Character();
sasuke.CurrSprite ="Sprites/sasuke/running/running1.png";
sasuke.setFrame();
sasuke.basesrc = "sasuke";


/*
const fireball = new Special(sasuke);
const srcarry= new Array("special/fireball/fireball1.png","special/fireball/fireball2.png","special/fireball/fireball3.png");
fireball.setimages(srcarry);

sasuke.special = fireball;
sasuke.basesrc = "sasuke";*/

//sasuke.layer=scenario;