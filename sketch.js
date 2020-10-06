//Create variables here
var dog, database, foodS, foodStock;
function preload()
{
	//load images here
}

function setup() {
	database= firebase.database();
    createCanvas(500,500);
    dog = createSprite(250,250,10,10);
    dog.shapeColor = "white";
    foodStock = database.ref('Food');
    foodStock.on("value", readStock);
    
  
}


function draw() {  
  background("white");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeColor("brown");
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
  
}

function writeStock(x){
database.ref("/").update({
  Food:x
})
}





