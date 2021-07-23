var road, road2, roadImg;
var player, playerImg, playerStatic;
var shopImg, shop, count = 0, rand = 0;
var polyBagImg, polyBag, count2 = 0, rand2 = 0;
var gameState = 0;
var cross, crossImg;
var fishImg, canImg, peelImg, flintImg, appleImg, onionImg, tomatoImg, copperImg, silverImg, goldImg;
var fish, can, peel, flint, apple, onion, tomato, copper, silver, gold;
var rand5 = 0;
var inventory = [];
var score = 0;
//var updrade, storage = 5;

var polyBagGP, shopGP, itemGP;

function preload(){
    roadImg = loadImage("Images/Road.png");
    playerImg = loadAnimation("Images/man1.png","Images/man2.png","Images/man3.png","Images/man4.png","Images/man5.png","Images/man6.png","Images/man7.png","Images/man8.png","Images/man9.png","Images/man10.png","Images/man11.png","Images/man12.png");
    shopImg = loadImage("Images/shop.jpg");
    polyBagImg = loadImage("Images/polybag.png");
    playerStatic = loadImage("Images/man9.png");
    crossImg = loadImage("Images/close.jpg");
    fishImg = loadImage("Images/fish.jpg");
    peelImg = loadImage("Images/peel.jpg");
    canImg = loadImage("Images/can.jpg");
    flintImg = loadImage("Images/Flint.png");
    appleImg = loadImage("Images/apple.jpg");
    onionImg = loadImage("Images/onion.jpg");
    tomatoImg = loadImage("Images/tomato.jpg");
    copperImg = loadImage("Images/copper.jpg");
    silverImg = loadImage("Images/silver.png");
    goldImg = loadImage("Images/gold.jpg");

}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
     
    road = createSprite(windowWidth/2, windowHeight/2);
    road.addImage('roadIMG', roadImg);
    road.scale = 1.2;
    road.velocityX = -5;

    road2 = createSprite(3*windowWidth/2, windowHeight/2);
    road2.addImage('roadIMG', roadImg);
    road2.scale = 1.2;
    road2.velocityX = -5;
    
    player = createSprite(windowWidth/6,windowHeight/2 - 50);
    player.addAnimation('playerimg', playerImg);
    player.addImage('playerimgg', playerStatic);
    player.scale = 1.1;

    cross = createSprite(windowWidth - 200, windowHeight/4,10,10);
    cross.addImage('itscross',crossImg);
    cross.scale = 0.4;
    cross.visible = false;

    shopGP = new Group();
    polyBagGP = new Group();
    itemGP  = new Group();
}

function draw(){
    background("black");
    if(gameState === 0){

        if(road.x < -windowWidth/2){
            road.x = windowWidth/2;
            road2.x = 3*windowWidth/2;
        }
       //updradeBag();
        shopCreate();
        polyBagCreate();

        if(mousePressedOver(polyBag) && inventory.length < 20){
            gameState = 1;
            for(var i = 100; i < 1010; i = i + 200){
                rand5 = Math.round(random(1,60));

                switch(rand5){
                    case 1 : can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(1);
                    break ;
                    case 2 : can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(1);
                    break ;
                    case 3 : can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(1);
                    break ;
                    case 4 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ;
                    case 5 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ;
                    case 6 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ;
                    case 7 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    fish.scale = 0.2;
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 8 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    fish.scale = 0.2;
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 9 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    fish.scale = 0.2;
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 10 : flint = createSprite(i, windowHeight/2);
                    flint.addImage('flintimg',flintImg);
                    flint.scale = 0.5;
                    itemGP.add(flint);
                    inventory.push(5);
                    break ; 
                    case 11 : apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 12 : apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 13 : copper = createSprite(i, windowHeight/2);
                    copper.addImage('copperimg',copperImg);
                    copper.scale = 0.3;
                    itemGP.add(copper);
                    inventory.push(7);
                    break ;
                    case 14 : onion = createSprite(i, windowHeight/2);
                    onion.addImage('onionimg',onionImg);
                    itemGP.add(onion);
                    onion.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 15 : onion = createSprite(i, windowHeight/2);
                    onion.addImage('onionimg',onionImg);
                    itemGP.add(onion);
                    onion.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 16 : onion = createSprite(i, windowHeight/2);
                    onion.addImage('onionimg',onionImg);
                    itemGP.add(onion);
                    onion.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 17 : tomato = createSprite(i, windowHeight/2);
                    tomato.addImage('tomatoimg',tomatoImg);
                    itemGP.add(tomato);
                    tomato.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 18 : tomato = createSprite(i, windowHeight/2);
                    tomato.addImage('tomatoimg',tomatoImg);
                    itemGP.add(tomato);
                    tomato.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 19 : tomato = createSprite(i, windowHeight/2);
                    tomato.addImage('tomatoimg',tomatoImg);
                    itemGP.add(tomato);
                    tomato.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 20 : flint = createSprite(i, windowHeight/2);
                    flint.addImage('flintimg',flintImg);
                    flint.scale = 0.5;
                    itemGP.add(flint);
                    inventory.push(5);
                    break ;
                    case 21 : silver = createSprite(i, windowHeight/2);
                    silver.addImage('silverimg',silverImg);
                    itemGP.add(silver);
                    silver.scale = 0.3; 
                    inventory.push(25);
                    break ;
                    case 22 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ; 
                    case 23 : copper = createSprite(i, windowHeight/2);
                    copper.addImage('copperimg',copperImg);
                    copper.scale = 0.3;
                    itemGP.add(copper);
                    inventory.push(7);
                    break ;
                    case 24 : apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 25 : onion = createSprite(i, windowHeight/2);
                    onion.addImage('onionimg',onionImg);
                    itemGP.add(onion);
                    onion.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 26 : tomato = createSprite(i, windowHeight/2);
                    tomato.addImage('tomatoimg',tomatoImg);
                    itemGP.add(tomato);
                    tomato.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 27 : flint = createSprite(i, windowHeight/2);
                    flint.addImage('flintimg',flintImg);
                    flint.scale = 0.5;
                    itemGP.add(flint);
                    inventory.push(5);
                    break ;
                    case 28 : copper = createSprite(i, windowHeight/2);
                    copper.addImage('copperimg',copperImg);
                    copper.scale = 0.3;
                    itemGP.add(copper);
                    inventory.push(7);
                    break ;
                    case 29 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    fish.scale = 0.2;
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 30 : flint = createSprite(i, windowHeight/2);
                    flint.addImage('flintimg',flintImg);
                    flint.scale = 0.5;
                    itemGP.add(flint);
                    inventory.push(5);
                    break ;
                    case 31 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ; 
                    case 32 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ; 
                    case 33 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    fish.scale = 0.2;
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 34 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    fish.scale = 0.2;
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 35 :   flint = createSprite(i, windowHeight/2);
                    flint.addImage('flintimg',flintImg);
                    flint.scale = 0.5;
                    itemGP.add(flint);
                    inventory.push(5);
                    break ;
                    case 36 :   gold = createSprite(i, windowHeight/2);
                    gold.addImage('goldimg',goldImg);
                    gold.scale = 0.4;
                    itemGP.add(gold);
                    inventory.push(100);
                    break ;
                    case 37 :   can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(1);
                    break ;
                    case 38 :   can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(1);
                    break ;
                    case 39 :   silver = createSprite(i, windowHeight/2);
                    silver.addImage('silverimg',silverImg);
                    itemGP.add(silver);
                    silver.scale = 0.3; 
                    inventory.push(25);
                    break ;
                    case 40 :   apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 41 :   apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 42 :   copper = createSprite(i, windowHeight/2);
                    copper.addImage('copperimg',copperImg);
                    copper.scale = 0.3;
                    itemGP.add(copper);
                    inventory.push(7);
                    break ;
                    case 43 :   onion = createSprite(i, windowHeight/2);
                    onion.addImage('onionimg',onionImg);
                    itemGP.add(onion);
                    onion.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 44 :   apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 45 :   onion = createSprite(i, windowHeight/2);
                    onion.addImage('onionimg',onionImg);
                    itemGP.add(onion);
                    onion.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 46 :   tomato = createSprite(i, windowHeight/2);
                    tomato.addImage('tomatoimg',tomatoImg);
                    itemGP.add(tomato);
                    tomato.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 47 : tomato = createSprite(i, windowHeight/2);
                    tomato.addImage('tomatoimg',tomatoImg);
                    itemGP.add(tomato);
                    tomato.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 48 :   apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 49 :   onion = createSprite(i, windowHeight/2);
                    onion.addImage('onionimg',onionImg);
                    itemGP.add(onion);
                    onion.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 50 :   can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(1);  
                    case 51 :   can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(1); 
                    break ;
                    case 52 :   onion = createSprite(i, windowHeight/2);
                    onion.addImage('onionimg',onionImg);
                    itemGP.add(onion);
                    onion.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 53 :   apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 54 :   tomato = createSprite(i, windowHeight/2);
                    tomato.addImage('tomatoimg',tomatoImg);
                    itemGP.add(tomato);
                    tomato.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 55 :  fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    fish.scale = 0.2;
                    itemGP.add(fish);
                    inventory.push(0); 
                    break ; 
                    case 56 :   fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    fish.scale = 0.2;
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 57 :   peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ;
                    case 58 :   tomato = createSprite(i, windowHeight/2);
                    tomato.addImage('tomatoimg',tomatoImg);
                    itemGP.add(tomato);
                    tomato.scale = 0.3;
                    inventory.push(0);
                    break ;
                    case 59 :   can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(1);
                    break ;
                    case 60 :   apple = createSprite(i, windowHeight/2);
                    apple.addImage('appleimg',appleImg);
                    itemGP.add(apple);
                    apple.scale = 0.3;
                    inventory.push(0);
                    break ; 
                }
                polyBagGP.destroyEach();

            } 
        }

        if(mousePressedOver(shop)){
            gameState = 2;
        }
    }

    if(gameState === 1){
        polyBagTouched();
    }

    if(gameState === 2){
        shopTouched();
    }

    //console.log();
    
    drawSprites();

    textSize(40);
    fill("green");
    text(score + "$", windowWidth - 120, 70);


    if(inventory.length === 20  ){
        textSize(25);
        fill("black");
        text("Bag is full. Sell items in order to collect more", windowWidth/3, 50);
    }
}

function shopCreate(){
    if(count === 0){
        rand = Math.round(random(250,250));
    } 
    
    if(count < rand){
        count++
    }

    if(count === rand){
        shop = createSprite(windowWidth + 60, windowHeight/2 - 120);
        shop.addImage('shopimg', shopImg);
        shop.scale = 0.5;
        shop.velocityX = -5;
        count = 0;
        shop.depth = 2;
        shopGP.add(shop);
    }
}

function polyBagCreate(){ 
    if(count2 === 0){
        rand2 = Math.round(random(100,100));
    } 
    
    if(count2 < rand2){
        count2++
    }

    if(count2 === rand2){
        polyBag = createSprite(windowWidth + 60, windowHeight/2 + 35);
        polyBag.addImage('polyBagimg', polyBagImg);
        polyBag.scale = 0.6;
        polyBag.velocityX = -5;
        count2 = 0;
        polyBagGP.add(polyBag);
        polyBag.depth = 4;
    }
}

function polyBagTouched(){
    if(gameState === 1){
        player.changeAnimation('playerimgg', playerStatic);
        road.velocityX = 0;
        road2 .velocityX = 0;
        polyBagGP.setVelocityXEach(0);
        cross.visible = true;   
        shopGP.setVelocityXEach(0);
    }
    if(mousePressedOver(cross) && gameState === 1){
        gameState = 0;
        itemGP.destroyEach();
        road.velocityX = -5;
        road2.velocityX = -5;
        player.changeAnimation('playerimg', playerImg);
        cross.visible = false;
        shopGP.setVelocityXEach(-5);
        polyBagGP.setVelocityXEach(-5);
    }
}

function shopTouched(){
    if(gameState === 2){
        player.changeAnimation('playerimgg', playerStatic);
        road.velocityX = 0;
        road2 .velocityX = 0;
        polyBagGP.setVelocityXEach(0);
        cross.visible = true;   
        shopGP.setVelocityXEach(0);
        shop.x = 1000000000;

        for(var i in inventory){
            score = score + inventory[i]
        }
        inventory.length = 0;
        shopGP.destroyEach();
    }      

    if(mousePressedOver(cross) && gameState === 2){
        gameState = 0;
        itemGP.destroyEach();
        road.velocityX = -5;
        road2.velocityX = -5;
        player.changeAnimation('playerimg', playerImg);
        cross.visible = false;
        shopGP.setVelocityXEach(-5);
        polyBagGP.setVelocityXEach(-5);
        shopGP.destroyEach();
    }
}

/*function updradeBag(){  
    updrade = createButton('Updrade Bag');
    updrade.position(windowWidth/50, windowHeight/2 + 250);
    
    if(updrade.mousePressed()&& score >= 100){
        storage = storage + 5;  
    }
}*/