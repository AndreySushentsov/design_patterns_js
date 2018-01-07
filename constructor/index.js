function Car(model, year, miles) {
  this.model = model;
  this.year  = year;
  this.miles = miles;

  this.toString = function () {
    return `${this.model} has done ${this.miles} miles`;
  };
}


// Можно задать метод через прототип

Car.prototype.madeBy = function() {
  return `${this.model}: This car was made in ${this.year}`;
}


const civic = new Car('Honda Civic', 2009, 20000);
const mondeo = new Car('Ford Mondeo', 2012, 15000);

console.log(civic.toString());
console.log(mondeo.toString());
console.log(civic.madeBy());
console.log(mondeo.madeBy());
