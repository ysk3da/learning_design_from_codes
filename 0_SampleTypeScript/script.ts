(function(){
  console.log('TypeScript 完全コンストラクタと値オブジェクトのサンプル classバージョン');
}());

class Money {
  readonly amount: number // final修飾子はJavaScriptにはないのでreadonlyで不変を表現
  readonly currency: string // final修飾子はJavaScriptにはないのでreadonlyで不変を表現
  constructor(amount: number, currency: string) {
    if(amount < 0) {
      throw new Error('金額には0以上を指定してください。')
    }
    if(!currency) {
      throw new Error('通貨単位を指定してください。')
    }
    this.amount = amount;
    this.currency = currency;
  }

  // viewとかイキってますが、 getter で全然OKです getter と setter は学習してください

  view(): string {
    return this.amount.toString() + this.currency;
  }
  add(amount: number, currency: string): Money {
    if(this.currency !== currency) {
      throw new Error('通貨単位が違います。')
    }
    const added = this.amount + amount;
    return new Money(added, this.currency)
  }
}

const Kingaku1 = new Money(1000, '円');

console.log('Kingaku', Kingaku1.amount, Kingaku1.currency);

// ちゃんとエラーになるし、変更できない。
// Kingaku1.amount = 10000;
// Kingaku1.currency = '$';
// console.log('Kingaku', Kingaku1.amount, Kingaku1.currency);
