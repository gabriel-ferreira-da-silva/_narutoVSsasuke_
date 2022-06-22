class Character {
    constructor(){
       
        // identificação
        this.type ="character";
        this.name =""; 
        
        // sprite
        this.sprite = new drawableObj();

        // controle do teclado
        this.keys=[];

        // velocidade e outros
        this.posx=0;
        this.posy=0;
        this.velx=0.1;
        this.vely=0.1;

        // para controle e estatus  e etc
        this.state="";

    }

    draw(currentFrame){
        this.getmove();

        this.sprite.posx=this.posx;
        this.sprite.posy=this.posy;
        this.sprite.draw(currentFrame);
    }

    getmove(){
        if(this.keys['D']){
            this.posx+=this.velx;
            this.state = "running";
        }
        if(this.keys['A']){
            this.posx-=this.velx;
            this.state = "running-left";
        }
        if(this.keys['W']){
            this.posy-=this.velx;
            this.state = "running";
        }
        if(this.keys['S']){
            this.posy+=this.velx;
            this.state = "running-left";
        }
    }
}