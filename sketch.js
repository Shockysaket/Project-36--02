var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;

//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time

}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

if (lastfed>=12){

}elseif (lastfed==0) {
 
 
  text ("lastfed : 12 AM , 350,30 ) ; 
}



else {

}

var food_stock_val = foodObj.getfoodstuck()
if (food_stuck_val<=0) {
  foodObj.updateFoodStock(food_stock_val *0)


}else { 
  foodObj.updateFoodStock(food_stock_val -1  )
}


function display () {
sadDog.display() 
dog.display ()
happyDog .display ()

  
   foodS.display ()
  foodStock.display ()
   addFood.display ()
   foodObj.display ()
}