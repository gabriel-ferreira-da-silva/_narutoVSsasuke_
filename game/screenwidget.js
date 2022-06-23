class ScreenWidget{
    constructor(){
        this.canvas;
        this.ctx;
        this.window;
        this.screenHandler;
    }

    setup(ctx, canvas, drawObjArr ){
        
        this.ctx =ctx;
        this.canvas =canvas;
        for(let i=0; i <drawObjArr.length ; i++ ){
            drawObjArr[i].ctx = this.ctx;
            drawObjArr[i].canvas = this.canvas;
        }
    }

}