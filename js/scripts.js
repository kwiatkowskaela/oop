function Phone(brand, price, color, size) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.size = size;
}
Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and the size is " + this.size + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", 5.5);
var GalaxyS6 = new Phone("Samsung", 3250, "gold", 6);
var One = new Phone("OnePlus", 2550, "white", 6.4);
iPhone6S.printInfo();
GalaxyS6.printInfo();
One.printInfo();
