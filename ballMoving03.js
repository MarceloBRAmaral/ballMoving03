//Ball moving v. 03
//This tutorial shows how to use the vector library to change the position of a ball
//
//This release adds:
//1. create a particle system to use velocity object to change position; 
// the particle object has position and velocity vectors
//2. method testBounds moved into particle system
//3. added acceleration to the particle system (not used here)
//
//BUGS:
//1. 
//
//TO DO:
//1. 
//
//By Marcello Silva

//canvas definition
var document;var window;var init;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//get canvas dimensions
var canvasWidth = canvas.width;
var canvasHeigth = canvas.height;

// var definitions
var radius = 10;//radius of the ball
//var position=vector.create(100,100);//now inside particle object
//var velocity=vector.create(0,0);//now inside particle object
//velocity.setLength(7);//now inside particle object
//velocity.setAngle(initAngle);//now inside particle object

var initAngle=Math.PI/6;
var p=particle.create(100,100,7,initAngle);

//clears the canvas function
var clearCanvas = function () {
    //ctx.fillStyle = 'white';//not used anymore
	ctx.clearRect(0,0,canvasWidth,canvasHeigth);
};


//main loop
function main() {
    init = window.requestAnimationFrame(main);
    // Whatever your main loop needs to do    
    clearCanvas();//clear the canvas
    p.testBounds(canvasWidth,canvasHeigth,radius,radius);
    p.update();
    ctx.beginPath();//only this can erase stroke and arc, here is not needed because there is only one arc
    ctx.arc(p.position.getX(),p.position.getY(),radius,0,Math.PI*2,false);
    ctx.fill();
    
}

main();