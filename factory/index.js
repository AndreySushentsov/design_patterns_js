// Конструктор для объекта Car
function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || 'brand new';
  this.color = options.color || 'black';
}

// Конструктор для объекта Truck
function Truck(options) {
  this.state = options.state || 'used';
  this.wheelSize = options.wheelSize || 'large';
  this.color = options.color || 'white';
}

function VehicleFactory() {} // Фабрика Автомобилей

// устанавливаем свойство vehicleClass со занчением Car
VehicleFactory.prototype.vehicleClass = Car;

// создаем метод который определяет класс автомобиля
VehicleFactory.prototype.createVehicle = function (options) {
  switch (options.vehicleType) {
    case 'car':
      this.vehicleClass = Car;
      break;
    case 'truck':
      this.vehicleClass = Truck;
      break;
    default:

  }

  return new this.vehicleClass(options);
};


let carFactory = new VehicleFactory(); // создаем новый объект фабрики

// Вызываем метод createVehicle и передаем уме объект с параметрами автомобиля
let car = carFactory.createVehicle({
  vehicleType:'car',  // это значеине приверяется внутри метода и на его основе присваевается каласс автомобилю
  color:'yellow',
  doors:6
});

console.log(car instanceof Car);
console.log(car);

let movingTruck = carFactory.createVehicle({
  vehicleType:'truck',
  color:'yellow',
  state:'like new',
  wheelSize:'small'
});

console.log(movingTruck instanceof Truck);
console.log(movingTruck);


function TruckFactory() {} // создаем фабирку грузовиков

TruckFactory.prototype = new VehicleFactory(); //
TruckFactory.prototype.vehicleClass = Truck;

let truckFactory = new TruckFactory();
let myTruck = truckFactory.createVehicle({
  color:'yellow',
  state:'old',
  wheelSize:'very large'
});

console.log(myTruck instanceof Truck);
console.log(myTruck);
