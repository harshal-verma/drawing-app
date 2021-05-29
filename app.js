const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 10;
let x = 50;
let y = 50;
let isPressed = false;

canvas.addEventListener('mousedown' , () => {
    isPressed = true;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
}); 

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
    const x = e.offsetX;
    const y = e.offsetY;
    drawCircle(x,y);
    }
});

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fill();
}

// drawCircle(50,50);

// function draw(){
//     drawCircle(50,50);
//     requestAnimationFrame(draw);
// }