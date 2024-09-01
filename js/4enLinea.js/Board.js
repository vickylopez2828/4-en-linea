
class Board{
    constructor(col, filas, ctx, x, y, w, h, img, marginBottom){       
        this.cantCols = col;
        this.cantRows =filas; 
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imgFinal = img;
        this.marginBottom = marginBottom;
        this.inicioGameX = 0;
        this.inicioGameY = 0;
    
    }

    setCantCols(col){
        this.cantCols = col;
    }
    
    setCantRows(row){
        this.cantRows = row;
    }

    setW(w){
        this.w = w;
    }

    setH(h){
        this.h = h;
    }


    draw(){
       
        let x = this.x;
        let y = this.y;
        let w = this.w;
        let h = this.h;
        for(let k = 0; k < this.cantRows; k++){
            for(let j = 0; j < this.cantCols; j++){
                this.ctx.drawImage(this.imgFinal,x, y, w, h);
                x+=w;
            } 
            y+=h;
            x=this.x;            
        }
      
    }
    //centrar tablero
    centerBoard(widthGame, heightGame){
        let centroAncho = widthGame/2;
        let anchoBoard = this.cantCols * this.w;
        let centroAlto = heightGame/2;
        let altoBoard = this.cantRows * this.h;
       
        //dejo un margen inferior mas chico
        let inicioBoardY = centroAlto - (altoBoard/2)+ this.marginBottom;
        this.y = inicioBoardY + this.inicioGameY;
        let inicioBoardX = centroAncho - (anchoBoard/2);  
        this.x = inicioBoardX + this.inicioGameX;
    }



}
