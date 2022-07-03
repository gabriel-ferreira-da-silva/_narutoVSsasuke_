const { send } = require("process");

class GameScreenHandler{
    constructor(ctx, canvas, window){
        this.ctx= ctx;
        this.window = window;

        this.canvas= canvas;
        this.object = new Set();

        this.background;
        this.players =[];
        
     
    }

    add(ob){
        
        switch(ob.type){
            case "character":
                this.players.push(ob);
                break;
            case "background":
                this.background = ob;
                //this.background.push(ob);
                break;
                
        }

        ob.ctx = this.ctx;
        ob.gamescreen =this;
        ob.window =this.window;
        ob.canvas =this.canvas;
        this.object.add(ob);

        /*ob.canvasWidth = this.canvas.width;
        ob.canvasHeight =this.canvas.height;
        */
        
    }

    draw(currentFrame){

        for(let ob of this.object){
            if(ob.type=="character"){
                
                if(this.check_character_ground_colision(ob)){
                    ob.posy+=ob.vely;
                }
                send_keys( ob.keys );
            }
            
            ob.draw(currentFrame);
        }

        
        /*
        this.object.forEach (function(ob) {
            if(ob.type=="character"){
                if(ob.is_gravity_on){
                    ob.posy+=ob.vely;
                }
            }
            ob.draw(currentFrame);
            
            
        })*/
    }

    check_character_ground_colision(ob){
        for(let ground of this.background.ground ){
            if((ob.posy <= ground.starty && ob.posy + ob.vely > ground.endy) && (ob.posx > ground.startx && ob.posx < ground.endx)){
                ob.posy = ground.starty;
                ob.is_on_ground =true;
                ob.block_state_keys.delete("falling");
                return false;
            }
            
        }
        this.is_on_ground=false;
        return true;
    }
}