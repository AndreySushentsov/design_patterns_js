'use strict'
const basketModule = (function() {
  let basket = [];
  let privateMethod = () =>{
    console.log(busket);
  };

  return{
    addItem : (item) => {
      basket.push(item);
    },
    getCount : () => {
      return basket.length;
    },
    publicMethod : privateMethod,
    getTotal : function () {
      let count = this.getCount();
      let p = 0;

      while (count--) {
        p+= basket[count].price;
      }

      return p;
    }
  }
})();

basketModule.addItem({
  item:'bread',
  price:1
});

basketModule.addItem({
  item:'milk',
  price:0.5
});

basketModule.addItem({
  item:'fish',
  price:2.5
});
console.log(`Items in basket ${basketModule.getCount()}`);
console.log(`Total price: ${basketModule.getTotal()}`);
console.log(basketModule.basket);
