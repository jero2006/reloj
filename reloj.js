function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200,200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    let end1 = map(sc, 0, 60, 0, 360);
    arc(0,0,300,300, 0, end1);

    stroke(35, 187, 244);
    let end2 = map(mn, 0, 60, 0, 360);
    arc(0,0,260,260, 0, end2);

    stroke(172, 189, 7);
    let end3 = map(hr, 0, 24, 0, 360);
    arc(0,0,220,220, 0, end3);

    fill(255);
    noStroke();
    rotate(90);
    text(hr + ':' + mn + ':' + sc, -20, 0);
}