function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)
  background("#CC7E85");
  noFill()
  stroke("#CF4D6F")
  //ellipse(25,25,50)
  var w=mouseX/10
  for(var i=0;i<width/(50);i++)
  {
  for(var j=0;j<height/(50);j++)
  {
    stroke(0,170.179)
    ellipse(20+50*i,20+50*j,mouseX/10)
    rect(20+50*i,20+50*j,mouseY/4)
    stroke("#CF4D6F") 
    strokeWeight(3)
   ellipse(20+50*i,20+50*j,30)

  }
}
}
