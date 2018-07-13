var shoes = [];

function shoe(name,price,color,size,image,array) {
	

	this.name = name;
	this.price =price;
	this.color = color;
	this.size = size;
	this.image = image;


	pushToArray(array, this)
}


function pushToArray(array, item) {
	array.push(item);
}




new shoe('Black Beauty', 110, 'Black','11.5','img/blk.png',shoes);
new shoe('Bad N Bougee', 100, 'Black','6.5','img/blkheels.jped',shoes);
new shoe('Fake Browns', 110, 'Brown','11','img/brwn.png',shoes);
new shoe('Smooth Heels',80 , 'Brown','6','img/brwnheels.png',shoes);
new shoe('Burgandey Boomer', 85, 'Burgandey','11.5','img/burnncrm.png',shoes);
new shoe('Golden Knights', 100, 'Black and Gold','11.5','img/gldnblk.png',shoes);
new shoe('Midnights', 150, 'Navy','12','img/nvy.png',shoes);
new shoe('Nick At Night', 60, 'Orange and Balck','10.5','img/orgnblk.png',shoes);
new shoe('Red Sea', 110, 'Red and Black','11.5','img/rednblk.png',shoes);
new shoe('Eye Catcher', 180, 'Crystal Clear','5','img/shiney.jpeg',shoes);
new shoe('Dont F W/Me', 110, 'Gold','6','img/spike.png',shoes);



for(var i = 0; i < shoes.length; i++) {

var shoeName = document.createTextNode(shoes[i].name)
var shoePrice = document.createTextNode("Price:" + " " + shoes[i].price)
var shoeColor = document.createTextNode("Color:" + " " + shoes[i].color)
var shoeSize = document.createTextNode("Available size:" + " " + shoes[i].size)
var shoeButton = document.createTextNode("Buy Now!")
var shoeImage = shoes[i].image

var newCol = document.createElement("DIV")
var newDiv = document.createElement("DIV")
var nameH1 = document.createElement("H1")
var sizeH4 = document.createElement("H4")
var colorH4 = document.createElement("H4")
var priceH4 = document.createElement("H4")
var buyNow = document.createElement("BUTTON")
var image = document.createElement("IMG")

nameH1.appendChild(shoeName)
sizeH4.appendChild(shoeSize)
colorH4.appendChild(shoeColor)
priceH4.appendChild(shoePrice)
buyNow.appendChild(shoeButton)
buyNow.className = "btn btn-primary btn-lg"
image.src= shoeImage
image.className = "img-responsive"


newCol.className = "col-md-4"

newDiv.appendChild(nameH1)
newDiv.appendChild(image)
newDiv.appendChild(sizeH4)
newDiv.appendChild(colorH4)
newDiv.appendChild(priceH4)
newDiv.appendChild(buyNow)
newCol.appendChild(newDiv)

document.getElementById("feet").appendChild(newCol)

}
