(function(){
  console.log('完全コンストラクタと値オブジェクトのサンプル prototypeオブジェクトバージョン');
}());

/**
 * 完全コンストラクタと値オブジェクトのサンプル prototypeオブジェクトバージョン
 * @param {*} amount :number
 * @param {*} currency :string
 */

function Money(amount, currency) {
  if(amount < 0 ){
    throw new Error('金額には0以上を指定してください。')
  }
  if(!currency) {
    throw new Error('通貨単位を指定してください。')
  }
  this.amount = amount;
  this.currency = currency;
  Object.freeze(this) //immutable
}

Money.prototype.view = function() {
  return this.amount.toString() + this.currency
}

Money.prototype.add = function(other) {
  if(this.currency !== other.currency) {
    throw new Error('通貨単位が違います。')
  }
  const added = this.amount + other.amount;
  return new Money(added, this.currency)
}

const Kingaku1 = new Money(1000, '円')

console.log('Kingaku1:', Kingaku1.view());

const Kingaku2 = Kingaku1.add({amount: 100, currency:'円'})

console.log('Kingaku2:', Kingaku2.view());
