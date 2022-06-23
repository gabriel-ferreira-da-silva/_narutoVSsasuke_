class Character extends ScreenWidget{
    constructor(){
        super();

        // identificação
        this.type ="character";
        this.name =""; 
        
        // sprite
        this.sprite = new drawableObj();

        // controle do teclado
        this.keys=[];
        this.block_state_keys = new Set();

        // velocidade e outros
        this.posx=0;
        this.posy=0;
        this.velx=0.1;
        this.vely=0.6;


        this.posy_buffer=0;

        this.is_plusx_blocked=false;
        this.is_minusx_blocked=false;

        // para controle e estatus  e etc
        this.state="";
        this.orientation="right";

        this.is_gravity_on = true;
        this.is_on_ground = false;
        this.is_jumping = false;
        this.is_falling = false;


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
        if(this.keys['D']){
            this.posx+=this.velx;
            this.orientation = "right";
            this.state = "running";
        }
        if(this.keys['A']){
            this.posx-=this.velx;
            this.orientation = "left";
            this.state = "running";
        }
        if(this.keys['W']){
            if(this.block_state_keys.has("j")==false){
                this.posy_buffer = this.posy;
            }
            if(this.block_state_keys.has("f")==false && this.is_on_ground){
                this.block_state_keys.add("j");
                this.state = "jumping";
            }
            
        }else{
            this.state= "idle";
        }
        if(this.keys['S']){
            this.posy+=this.vely;           
        }
    }

    handlestate(){
        switch(this.state){
            case "jumping":
                this.posy-= this.vely*2;
                if(this.posy_buffer - this.posy  > 0.2){
                    this.block_state_keys.add('f');
                    this.state ="falling";
                }
            break;
        }
    }
}