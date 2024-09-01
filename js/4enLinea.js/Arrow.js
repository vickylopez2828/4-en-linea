class Arrow {
    constructor(ctx, x, y, w, h, col, img){       
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.col = col
    }

    draw(){

        let x = this.x + this.w/4;
        let y = this.y - this.h / 2;
        let w = this.w;
        let h = this.h;
       // this.ctx.drawImage(this.img, 150, 100, w, h);

        for(let k = 0; k < this.col; k++){
            this.ctx.drawImage(this.img, x, y, w/2, h/2);
            x+=w;           
        }
      
    }




}