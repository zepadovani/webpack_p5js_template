export default function sketch(s) {
  let x, y, lastx,lasty, c,fr1,fr2,rate;

  const width = 400;
  const height = 400;

  s.setup = () => {
    s.createCanvas(width, height);
    x = s.random(width);
    y = height / 2;
    fr1 = s.random(0.1,3);
    fr2 = s.random(0.1,3);
    c = 0;
    rate = 0.002;
    
  };

  s.draw = () => {
    for(let i = 0; i<10; i++){
    c = c + rate;
    lastx = x;
    lasty = y;
    x = s.sin(c*fr1)*(width/2) + width/2;
    y = s.sin(c*fr2)*(height/2) + height/2;
    // s.background(backgroundColor);
    if(c>rate){
    s.strokeWeight(s.random(0.5,2));
    s.stroke(s.color(s.cos(c*fr1/2)*150+100, s.cos(c+0.9)*60+50, s.sin(c*fr2/2)*50+200));
    s.line(x,y,lastx,lasty)
    }
  }


  };

}
