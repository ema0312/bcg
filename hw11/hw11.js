class Bridesmaiddress {
    constructor(color, size) {
        this._size = size;
        this._color = color;
        this._price = 100;
    }

    get size() {
        console.log(``)
        return this._size;

    }
    get color() {
        console.log(``)
       return this._color;
        
    }
    pay(clearance) {
        this.price -= clearance;
        console.log(`clearance is ${this._price} !`);
    }
}
var molly = new Bridesmaiddress(10,"orchid",100);
console.log(molly.size);
console.log(molly.color);

molly.pay(25);