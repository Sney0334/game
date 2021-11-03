class Canvas2dGraphics {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
    }

    Init = function () {
        if (this.canvas != null && this.canvas != undefined) {
            this.context = this.canvas.getContext("2d");
        }
    };

    SetContext = function (ctx) {
        this.context = ctx;
    };

    Background = function (backgroundColor) {
        this.context.beginPath();
        this.context.fillStyle = backgroundColor;
        this.context.fillRect(0, 0, canvas.width, canvas.height);
        this.context.closePath();
    };
    Background = function () {
        //backgroundColor for players thing
         this.context.beginPath();
        this.context.fillStyle = "red";
        this.context.fillRect(0, 0, canvas.width, canvas.height);
        this.context.closePath();
    };
    //Clear function
    ClearCanvas = function (x, y, w, h) {
        this.context.beginPath();
        this.context.clearRect(x, y, w, h);
        this.context.closePath();
    };

    //Translate canvas
    Translate = function (x, y) {
        this.context.translate(x, y);
    }

    //Rotate canvas
    Rotate=function(angel){
        this.context.rotate(angel);
    }

    //Save canvas
    Save = function () {
        this.context.save();
    }

    //Restore canvas
    Restore = function () {
        this.context.restore();
    }

    //Stroke graphs
    //Stroke Text
    StrokeText = function (text, x, y,strokeColor,lineWidth, fontSizeAndfontStyle) {
        {
            try {
                this.context.beginPath();
                if(fontSizeAndfontStyle !=undefined || fontSizeAndfontStyle !=null || fontSizeAndfontStyle.length!=0){
                    this.context.font=fontSizeAndfontStyle;
                }
                if(strokeColor !=undefined || strokeColor !=null || strokeColor.length!=0){
                    this.context.strokeStyle=strokeColor;
                }
                if(lineWidth !=undefined || lineWidth != null || lineWidth.length!=0){
                    this.context.lineWith=lineWidth;
                }
                
                this.context.strokeText(text, x, y);
                this.context.closePath();
            } catch (err) {
                console.error('Stroke Text - ' + new Error(err));
            }
        }
    };

    // Draw Line on canvas
    StrokeLine = function (x0, y0, x1, y1, strokeColor, lineWidth) {
        try {
            if (strokeColor != null && strokeColor.length != 0) {
                this.context.strokeStyle = strokeColor;
            } else {
                this.context.strokeStyle = "red";
            }

            if (lineWidth != null && lineWidth.length != 0) {
                this.context.lineWidth = lineWidth;
            }
            this.context.beginPath();
            this.context.moveTo(x0, y0);
            this.context.lineTo(x1, y1);
            this.context.stroke();
            this.context.closePath();
        } catch (err) {
            console.error("StrokeTriangle - " + new Error(err));
        }
    };

    //Draw stroke triangle
    StrokeTriangle = function (x0, y0, x1, y1, x2, y2, strokeColor, lineWidth) {
        try {
            if (strokeColor != null && strokeColor.length != 0) {
                this.context.strokeStyle = strokeColor;
            } else {
                this.context.strokeStyle = "red";
            }

            if (lineWidth != null && lineWidth.length != 0) {
                this.context.lineWidth = lineWidth;
            }
            this.context.beginPath();
            this.context.moveTo(x0, y0);
            this.context.lineTo(x1, y1);
            this.context.lineTo(x2, y2);
            this.context.lineTo(x0, y0);
            this.context.stroke();
            this.context.closePath();
        } catch (err) {
            console.error("StrokeTriangle - " + new Error(err));
        }
    };

    //Draw stroke rectangle
    StrokeRectangle = function (x, y, width, height, strokeColor, lineWidth) {
        try {
            this.context.save();
            if (strokeColor != null && strokeColor.length != 0) {
                this.context.strokeStyle = strokeColor;
            } else {
                this.context.strokeStyle = "red";
            }

            if (lineWidth != null && lineWidth.length != 0) {
                this.context.lineWidth = lineWidth;
            }
            this.context.beginPath();
            this.context.strokeRect(x, y, width, height);
            this.context.closePath();
            this.context.restore();
        } catch (err) {
            console.error("StrokeRectangle - " + new Error(err));
        }
    };

 
    //Draw stroke circle
    StrokeCircle = function (
        x,
        y,
        radius,
        startAngle,
        endAngle,
        direction,
        strokeColor,
        lineWidth
    ) {
        try {
            this.context.save();
            if (strokeColor != null && strokeColor.length != 0) {
                this.context.strokeStyle = strokeColor;
            } else {
                this.context.strokeStyle = "red";
            }

            if (lineWidth != null && lineWidth.length != 0) {
                this.context.lineWidth = lineWidth;
            }

            this.context.beginPath();
            this.context.arc(x, y, radius, startAngle, endAngle, direction);
            this.context.stroke();
            this.context.closePath();
            this.context.restore();
        } catch (err) {
            console.error("StrokeCircle - " + new Error(err));
        }
    };

 
    FillText = function (text, x, y,fillColor, fontSizeAndfontStyle) {
        {
            try {
                this.context.beginPath();
                if(fontSizeAndfontStyle !=undefined || fontSizeAndfontStyle !=null || fontSizeAndfontStyle.length!=0){
                    this.context.font=fontSizeAndfontStyle;
                }
                if(fillColor !=undefined || fillColor !=null || fillColor.length!=0){
                    this.context.fillStyle=fillColor;
                }
                
                this.context.fillText(text, x, y);
                this.context.closePath();
            } catch (err) {
                console.error('Stroke Text - ' + new Error(err));
            }
        }
    };

    //Fill Triangle
    FillTriangle = function (x0, y0, x1, y1, x2, y2, fillColor) {
        try {
            this.context.save();
            if (fillColor != null && fillColor.length != 0) {
                this.context.fillStyle = fillColor;
            } else {
                this.context.strokeStyle = "red";
            }

            this.context.beginPath();
            this.context.moveTo(x0, y0);
            this.context.lineTo(x1, y1);
            this.context.lineTo(x2, y2);
            this.context.lineTo(x0, y0);
            this.context.fill();
            this.context.closePath();
            this.context.restore();
        } catch (err) {
            console.error("StrokeTriangle - " + new Error(err));
        }
    };

 

    //Fill rectangle
    FillRectangle = function (x, y, width, height, fillColor) {
        try {
            if (fillColor != null && fillColor.length != 0) {
                this.context.fillStyle = fillColor;
            } else {
                this.context.fillStyle = "red";
            }
            this.context.beginPath();
            this.context.fillRect(x, y, width, height);
            this.context.closePath();
        } catch (err) {
            console.error("StrokeTriangle - " + new Error(err));
        }
    };

    //Fill Circle
    FillCircle = function (
        x,
        y,
        radius,
        startAngle,
        endAngle,
        direction,
        fillColor
    ) {
        try {
            this.context.save();
            if (fillColor != null && fillColor.length != 0) {
                this.context.fillStyle = fillColor;
            } else {
                this.context.fillStyle = "red";
            }

            this.context.beginPath();
            this.context.arc(x, y, radius, startAngle, endAngle, direction);
            this.context.fill();
            this.context.closePath();
            this.context.restore();
        } catch (err) {
            console.error("StrokeCircle - " + new Error(err));
        }
    };

    //Image draw
    DrawImage(Image, x, y){
        try{
            if(Image !=undefined && Image.length !=0 ){
                this.context.beginPath();
                this.context.drawImage(Image, x, y);
                this.context.closePath();
            }
        }catch(err){
            console.error('Draw Image - '+new Error(err));
        }
    };
    //Draw Image with x, y position 
    DrawImageWH(Image, x, y, width, height){
        try{
            if(Image !=undefined && Image.length !=0 ){
                this.context.beginPath();
                this.context.drawImage(Image, x, y,width, height);
                this.context.closePath();
            }
        }catch(err){
            console.error('Draw Image - '+new Error(err));
        }
    };
    //Draw Image with clipped sx, sy, s-width, s-height
    DrawImageClipped(Image, sx, sy, sWidth, sHeight, x, y, width, height){
        try{
            if(Image !=undefined && Image.length !=0 ){
                this.context.beginPath();
                this.context.drawImage(Image, sx, sy,sWidth, sHeight, x, y, width, height);
                this.context.closePath();
            }
        }catch(err){
            console.error('Draw Image - '+new Error(err));
        }
    };

}


//Export the Canvas2dGraphics class
export {
    Canvas2dGraphics
};