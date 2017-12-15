//======================= Phone ====================
function Phone(brand, price, color,screenSize,batteryCapacity) {
	this.brand = brand;
	this.price = price;
    this.color = color;
    this.screen = screenSize;
    this.battery = batteryCapacity;
}

//== Marketing Info =================================
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

//== Tech Info ======================================
Phone.prototype.printInfoTech = function() {
   console.log("The phone brand is " + this.brand + ", screen size is " + this.screen + " and battery is " + this.battery + ".");
}

//== All Info =======================================
Phone.prototype.printAllInfo = function() {
    console.log("The phone brand is " + this.brand + ",  the price is " + this.price +", color is " + this.color +", screen size is " + this.screen + " and battery is " + this.battery + ".");
}

//== Making new phones ==============================
var iPhone6S = new Phone("Apple", 2250, "silver","6.0 inches","3300 mAh");
var SamsungGalaxyS6 = new Phone("Samsung", 3400, "black","5.0 inches","3000 mAh");
var OnePlusOne = new Phone("OnePlus",1900, "grey","7.0 inches","3500 mAh");

//== Print Marketing Info ============================
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

//== Print Tech Info ==================================
iPhone6S.printInfoTech();
SamsungGalaxyS6.printInfoTech();
OnePlusOne.printInfoTech();

//== Print All Info ===================================
iPhone6S.printAllInfo();
SamsungGalaxyS6.printAllInfo();
OnePlusOne.printAllInfo();