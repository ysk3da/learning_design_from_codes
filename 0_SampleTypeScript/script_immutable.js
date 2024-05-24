(function(){
  console.log('変数を不変にする');
}());

const Hensuu = 1000;

console.log('Hensuu:', Hensuu);

// Hensuu = 30000; // これはだめ

// console.log('Hensuu:', Hensuu);


const ConstObj = {
  name: 'onamae'
}

console.log('ConstObj.name', ConstObj.name);

ConstObj.name = 'おなまえ';

// 書き換えられるので注意！！
console.log('ConstObj.name', ConstObj.name);

// これは？
class Money {
  amount
  currency
  constructor(amount, currency) {
    // ...負の値などの条件式は略
    this.amount = amount;
    this.currency = currency;
    Object.freeze(this);
  }
}

const Kingaku1 = new Money(1000, '円');

console.log('Kingaku', Kingaku1.amount, Kingaku1.currency);

Kingaku1.amount = 10000;
Kingaku1.currency = '$';

// 書き換えられません！やったね！！ ただエラーも出ないので、、、
console.log('Kingaku', Kingaku1.amount, Kingaku1.currency);
