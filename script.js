// ===== STAR FIELD =====
const starCanvas = document.getElementById("stars");
const starCtx = starCanvas.getContext("2d");

starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;

let stars = [];

for(let i = 0; i < 150; i++){
    stars.push({
        x: Math.random() * starCanvas.width,
        y: Math.random() * starCanvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random()
    });
}

function drawStars(){
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);

    stars.forEach(s => {
        s.alpha += (Math.random() - 0.5) * 0.05;

        starCtx.beginPath();
        starCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        starCtx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        starCtx.fill();
    });

    requestAnimationFrame(drawStars);
}

drawStars();


// ===== SMOKE HEART =====
const smokeCanvas = document.getElementById("smoke");
const ctx = smokeCanvas.getContext("2d");

smokeCanvas.width = window.innerWidth;
smokeCanvas.height = window.innerHeight;

let particles = [];

// Heart shape formula
function heart(t){
    return {
        x: 16 * Math.pow(Math.sin(t), 3),
        y: -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t))
    };
}

// Create particles
for(let i = 0; i < 200; i++){
    let t = Math.random() * Math.PI * 2;
    let pos = heart(t);

    particles.push({
        x: smokeCanvas.width/2 + pos.x * 10,
        y: smokeCanvas.height/2 + pos.y * 10,
        size: Math.random() * 3 + 1,
        alpha: Math.random(),
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

function drawSmoke(){
    ctx.clearRect(0, 0, smokeCanvas.width, smokeCanvas.height);

    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        p.alpha -= 0.002;
        if(p.alpha <= 0){
            p.alpha = 1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
    });

    requestAnimationFrame(drawSmoke);
}

drawSmoke();