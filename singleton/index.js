const singleton = (function() {
  let instance;

  const init = () => {
    const privateVar = Math.random();
    const privateMethod = () => {
      console.log('privateMethod');
    };

    return {
      publicMethod: () => {
        console.log(privateVar);
      },
      publicVar: 'public variable'
    }
  }

  return {
    getInstance : () => {
      if(!instance){
        instance = init();
      }
      return instance;
    }
  }
})();

const singleton2 = (function() {
  let instance;

  const init = () => {
    const privateVar = Math.random();
    const privateMethod = () => {
      console.log('privateMethod');
    };

    return {
      publicMethod: () => {
        console.log(privateVar);
      },
      publicVar: 'public variable'
    }
  }

  return {
    getInstance : () => {

      instance = init();

      return instance;
    }
  }
})();
const singlA = singleton.getInstance();
const singlB = singleton.getInstance();

const singl2A = singleton2.getInstance();
const singl2B = singleton2.getInstance();

console.log(singlA.publicMethod() === singlB.publicMethod());
console.log(singl2A.publicMethod() !== singl2B.publicMethod());
