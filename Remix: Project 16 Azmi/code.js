var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","bc816bcd-0aeb-427a-8ab9-bc984112067e"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"v9pDKgLC7nZ1e1gBjttYZfprylPdkZq4","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"Mch53k__S7u0l1ocNm4K6i3SZtjJ5IJ5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"NnV4Zdor5xO.5jP08_UBfu.fPb8avTpH","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"bc816bcd-0aeb-427a-8ab9-bc984112067e":{"name":"pineTrees","sourceUrl":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Background = createSprite(0, 0,400,400);
Background.setAnimation("pineTrees");
Background.scale=2
var Monkey = createSprite(100, 340,20,50);
Monkey.setAnimation("monkey");
Monkey.scale=0.12;

var Ground = createSprite(400,350,800,10);
Ground.velocityX=-4;
Ground.x=Ground.width/2;
Ground.shapeColor="green"
var survivalTime=0;

var obstaclesGroup = createGroup()

var bananaGroup = createGroup()

var score=0;



function draw() {
  background(255);
  
  if (keyDown("space")) {
    Monkey.velocityY=-5;
  }
  
  Monkey.velocityY=Monkey.velocityY+0.5
  
if (obstaclesGroup.isTouching(Monkey)) {
    Monkey.scale=0.15;
  }
    if (bananaGroup.isTouching(Monkey)) {
      Monkey.scale=0.2;
      score=score+2;
      bananaGroup.destroyEach();
      
    }
    
  
if (Ground.x<0) {
    Ground.x=300
  }
    
    stroke("black")
    textSize(20);
    fill("black");
  Banana();
  
  obstacle();
  
  Monkey.collide(Ground)
  drawSprites();
text("Score: "+score, 200, 50);
    
  
}

function obstacle () {
  if (World.frameCount%300===0) {
 var obstacles = createSprite(400, 320,20,50);
 obstacles.setAnimation("Stone");
 obstacles.velocityX=-4
 obstacles.scale=0.15;
obstaclesGroup.add(obstacles) 
  }
}

  function Banana () {
  if (World.frameCount%200===0) {
var banana = createSprite(400, 200,20,50);
banana.setAnimation("Banana");
 banana.velocityX=-4
 banana.scale=0.07
 banana.y=random(123,200)
 bananaGroup.add(banana)
 
    }
  }





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
