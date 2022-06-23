class animationControl{
    /// let fps, fpsInterval, startTime , now, then, elapsed;

    constructor(){
        // parametros de controle da animaçao
        this.fps =0;
        this.fpsInterval =0;
        this.startTime=0;
        this.now =0;
        this.then =0;
        this.elapsed=0;

        // varivale para trackear 
        this.currentFrame=0;


    }

    getelapsed(){
        this.elapsed = this.now - this.then;
        return this.elapsed;
    }

    atualize(){
        if(this.currentFrame++ > this.fps){
            this.currentFrame=0;
        }
    }
    

    print(){
        console.log("fps: "+ this.fps);
        console.log("fpsInterval: "+ this.fpsInterval);
        console.log("startTime: "+ this.startTime);
        console.log("now: "+ this.now);
        console.log("then: "+ this.then);
        console.log("elapsed: "+ this.elapsed);
        console.log("currentFrame: "+ this.currentFrame );
    }
}