/* a Pen by DIACO : twitter.com/Diaco_ml || codepen.io/MAW
powered by GSAP : http://www.greensock.com/
*/

var words=['Wiz Khalifa','Juicy J ','Berner','Chevy Woods','Ty Dolla $ign','Courtney Noelle','J.R. Donato','Project Pat'],
    centerT=document.getElementById('center-txt'),leftT=document.getElementById('left-txt');
    W1=leftT.offsetWidth,W2=centerT.offsetWidth,tl=new TimelineMax({repeat:-1});

TweenLite.set('#center-txt',{left:W1});
TweenLite.set('#right-txt',{left:W1+W2});

for(var i=0;i<words.length;i++){
  centerT.innerHTML=words[i];
  var W3=centerT.offsetWidth;
  tl.to('#right-txt',1,{x:120,ease:Sine.easeOut},'+=1')
    .to('#center-txt',1,{text:{value:words[i]},ease:Sine.easeOut},'-=0.7')
    .to('#right-txt',1.7,{x:W3-W2,ease:Bounce.easeOut},'-=0.1')
};

