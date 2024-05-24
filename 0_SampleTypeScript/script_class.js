(function(){
  console.log('完全コンストラクタと値オブジェクトのサンプル classバージョン');
}());

/**
 * 完全コンストラクタと値オブジェクトのサンプル classバージョン
 * @param {*} amount :number
 * @param {*} currency :string
 */

class Money {
  amount
  currency
  constructor(amount, currency) {
    if(amount < 0) {
      throw new Error('金額には0以上を指定してください。')
    }
    if(!currency) {
      throw new Error('通貨単位を指定してください。')
    }
    this.amount = amount;
    this.currency = currency;
    Object.freeze(this);
  }

  // viewとかイキってますが、 getter で全然OKです

  view() {
    return this.amount.toString() + this.currency;
  }
  add(amount, currency) {
    if(this.currency !== currency) {
      throw new Error('通貨単位が違います。')
    }
    const added = this.amount + amount;
    return new Money(added, this.currency)
  }
}

// const Kingaku0 = new Money(-100, '$')

const Kingaku1 = new Money(2000, '$')

console.log('Kingagu1:', Kingaku1.view());

const Kingaku2 = Kingaku1.add(2000, '$')

console.log('Kingagu2:', Kingaku2.view());