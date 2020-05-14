const calculator = {
  plus: function(a,b)
  {
    return a+b;
  },
  minus: function(a,b)
  {
    return a-b;
  },
  multiply: function(a,b)
  {
    return a*b;
  },
  divide: function(a,b)
  {
    return a/b;
  },
  pow: function(a,b)
  {
    return a**b;
  }
}

const a = calculator.plus(4,5);
const b = calculator.minus(4,3);
const c = calculator.multiply(4,3);
const d = calculator.divide(4,3);
const e = calculator.pow(4,3);


console.log(a,b,c,d,e);