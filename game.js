// Creating variables
var myX = 0, myY = 0,vragX=[],vragY=[];
for(i=0;i<3;i=i+1){
    vragY[i]=i*150;
    vragX[i]=770;
}
var patronX=4658723174873687463,patronY=847836478364762346;
var murdane=false;
var bulletX=57823465834656348756346,bulletY=456736487346763745366463;
var dwijane=false;
var shumX=34756836465743646476,shumY=46245874258934203824327432546235478;
var ti4ane=false;

function update() {
   if(myY>=570){
       myY=570;
   }
    myY = myY+(mouseY-myY)/10;
    for(i=0;i<3;i=i+1){
        vragX[i]=vragX[i]-3,5;
    }
    for(i=0;i<3;i=i+1){
        if(vragX[i]<=30){
            vragX[i]=800;
             vragY[i]=Math.random()*570;
        }
    }
    if(isKeyPressed[32]){
        murdane=true;
        dwijane=true;
        ti4ane=true;
    }
    if(murdane==true){
        patronX=patronX+10;
    }
    if(murdane==false){
        patronX=myX;
        patronY=myY;
    }
    if(patronX>=770){
        murdane=false;
    }
    for(i=0;i<3;i=i+1){
        if(areColliding(patronX,patronY,10,10,vragX[i],vragY[i],30,30)){
            murdane=false;
            vragX[i]=770;
            vragY[i]=Math.random()*570;
        }
    }
     if(dwijane==true){
       bulletX=bulletX+6,5;
         bulletY=bulletY+6,5;
    }
    if(dwijane==false){
        bulletX=myX;
     bulletY=myY;
    
    }
    for(i=0;i<3;i=i+1){
        if(areColliding(bulletX,bulletY,10,10,vragX[i],vragY[i],30,30)){
            dwijane=false;
            vragX[i]=770;
            vragY[i]=Math.random()*570;
        }
    }
    if(bulletX>=790){
        dwijane=false;
    }
    if(bulletY>=590){
        dwijane=false;
    }
    if(ti4ane==true){
        shumX=shumX+6,5;
        shumY=shumY-6,5;
    }
    if(ti4ane==false){
        shumX=myX;
        shumY=myY;
    }
    if(shumX>=790){
        ti4ane=false;
    }
    if(shumY<=10){
        ti4ane=false;
    }
    for(i=0;i<3;i=i+1){
        if(areColliding(shumX,shumY,10,10,vragX[i],vragY[i],30,30)){
            ti4ane=false;
            vragX[i]=770;
            vragY[i]=Math.random()*590;
        }
    } 
    
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle="blue";
    context.fillRect(myX, myY, 30, 30);
    for(i=0;i<3;i=i+1){
        context.fillStyle="red";
        context.fillRect(vragX[i],vragY[i],30,30);
    }
    context.fillStyle="blue";
    context.fillRect(patronX,patronY,10,10);
    context.fillRect(bulletX,bulletY,10,10);
    context.fillRect(shumX,shumY,10,10);
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
