class Character extends ScreenWidget{
    constructor(){
        super();

        // identificação
        this.type ="character";
        this.name =""; 
        
        // sprites e 
        this.sprite = new drawableObj();
        this.base_src = "";
        this.maxframe=0;
        this.currentFrame=1;

        // controle do teclado
        this.keys=[];
        this.block_state_keys = new Set();

        // velocidade e outros
        this.posx=0.5;
        this.posy=0.5;
        this.velx=0.1;
        this.vely=0.6;

        this.fallvel =0.6;
        this.posy_buffer=0;
        this.posx_buffer=0;

        
        // para controle e estatus  e etc
        this.state="idle";
        this.orientation="right";

        this.is_gravity_on = true;
        this.is_on_ground = false;
        this.is_jumping = false;
        this.is_falling = false;
        
        this.is_plusx_blocked=false;
        this.is_minusx_blocked=false;

        this.is_plusy_blocked=false;
        this.is_minusy_blocked=false;

        // outros
        this.string="";



    }
    /*
    setup(ctx, canvas){
        this.canvas=canvas;
        this.ctx = ctx;

        this.sprite.ctx=ctx;
        this.sprite.canvas=canvas;
    }
*/
    draw(currentFrame){
        this.getmove();
        this.handlestate();

        this.sprite.posx=this.posx;
        this.sprite.posy=this.posy;
        this.sprite.draw(currentFrame);
    }

    getmove(){
        if(this.block_state_keys.has("jumping") == false &&this.block_state_keys.has("falling") == false){
            this.state= "idle";    
        }
        
        if(this.keys['D']){
            this.posx+=this.velx;
            this.orientation = "right";
            if(this.block_state_keys.has("jumping") == false &&this.block_state_keys.has("falling") == false)
                this.state = "running";
        }
        if(this.keys['A']){
            this.posx-=this.velx;
            this.orientation = "left";
            if(this.block_state_keys.has("jumping") == false &&this.block_state_keys.has("falling") == false)
                this.state = "running";
        }
        if(this.keys['W']){
            if(this.block_state_keys.has("jumping")==false){
                this.posy_buffer = this.posy;
            }
            if(this.block_state_keys.has("falling")==false && this.is_on_ground==true){
                this.block_state_keys.add("jumping");
                this.is_on_ground =false;
                this.state = "jumping";
            }
        }else{
            this.block_state_keys.delete("jumping");
        }

        if(this.keys['S']){
            this.posy+=this.vely;           
        }
    }

    handlestate(){
        let orientation="";
        switch(this.state){
            
            case "idle":
               
                this.maxframe = 5;
                if(this.currentFrame > this.maxframe){
                    this.currentFrame=1;
                }
                
                if(this.orientation=="left"){
                    orientation="-left";
                }
                this.sprite.src =this.base_src +"/idle/idle" + orientation + this.currentFrame++ +".png";
                
                //this.sprite.src = "sprites/naruto/idle/idle1.png";
            break;
            
            case "running":
            
                this.maxframe = 6;
                if(this.currentFrame > this.maxframe){
                    this.currentFrame=1;
                }
                
                if(this.orientation=="left"){
                    orientation="-left";
                }
                this.sprite.src =this.base_src +"/running/running" + orientation + this.currentFrame++ +".png";
            break;

            case "jumping":
                this.posy-= this.vely*2;
                
                if(this.posy_buffer - this.posy  > 0.2){
                    this.block_state_keys.add("falling");
                    this.block_state_keys.delete("jumping");
                    this.state ="falling";
                }
            break;
        }
    }
}