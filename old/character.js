class Character{
    //constructor(ctx, window, canvasWidth, canvasHeight){
    constructor(){
        // variaveis universais/..,,,???///???
        
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
        this.xbuffer=0;
        this.ybuffer=0;
        this.xvelFactor=0.01;
        this.yvelFactor=0.01;
        this.ygravity=0.01;
        this.velbuffer=1;
        this.gravitybuffer=0.01;

        //***************** */
        this.onground=0;
        this.isjumping=false;
        this.grounds=[];
        //********************* */
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

        ///controle da sprite
        this.lockstate="free";

        this.#setFrame();
    }
    draw(){
        this.getmove();
        this.handleState();
        this.ctx.drawImage(this.frame,this.canvasWidth*this.x,this.canvasHeight*this.y,this.canvasWidth*0.1,this.canvasHeight*0.1);
    }

    checkground(){
        
        this.onground=false;
        for(let i=0; i <  this.grounds.length ; i++){
            console.log(this.grounds);
            if(this.x > this.grounds[i].startx && this.x < this.grounds[i].endx){
                if(this.y >= this.grounds[i].starty && this.y + this.yvelFactor >= this.grounds[i].endy && this.y < this.grounds[i].endy){
                    this.onground=true;
                }
            }
        }
    }


    getmove(){
        

        if(this.lockstate=="free"){
            
            this.state ="idle";
            this.checkground();
        
            if(this.onground==false){
                this.y+=this.gravitybuffer;
            }
            if(this.keys['D']){
                this.x+=this.xvelFactor;
                this.state = "running";
            }
            if(this.keys['A']){
                this.x-=this.xvelFactor;
                this.state = "running-left";
            }
            if(this.keys['S']){
                this.y+=this.yvelFactor;        
            }
            if(this.keys['W']){
                if(this.onground){
                    this.state ="jumping";
                    this.lockstate="jumping";
                    this.onground=false;
                    this.ybuffer = this.y;
                }
            }
            if(this.keys['F']){
                this.state = "fireball-attack";
            }
        }
        

        
    }

   
    setgrounds(grounds){
        this.grounds=grounds;
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
                this.special.requested=true;
                
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
                    //this.special.initiated=true;
                    this.layer.object.add(this.special);
                }
            break;
            case "jumping":
                this.handlejumping();
                this.maxframe = 2;
                if(this.currframe > this.maxframe ||this.currframe < 1 ){
                    this.currframe=1;
                }

                this.CurrSprite ="Sprites/"+ this.basesrc +"/jumping/jumping" + this.currframe + ".png";
                this.setFrame();
                console.log(this.CurrSprite);
                this.currframe++;
                break;
            default:
                this.state="idle";
                break;



        }
    }

    handlejumping(){
        this.y-=this.yvelFactor*this.velbuffer;
        this.velbuffer-=0.2;
        if(this.velbuffer <1){
            this.lockstate="free";
        }
        
    }

    addspecial(special){
        this.special = special;
        this.special.character=this;
        this.special.ctx = this.ctx
        this.special.canvasHeight = this.canvasHeight;
        this.special.canvaswidth = this.canvasWidth;
        this.special.layer = this.layer;
        this.layer.add(this.special);
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