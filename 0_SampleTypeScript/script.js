(function () {
    console.log('TypeScript 完全コンストラクタと値オブジェクトのサンプル classバージョン');
}());
var Money = /** @class */ (function () {
    function Money(amount, currency) {
        if (amount < 0) {
            throw new Error('金額には0以上を指定してください。');
        }
        if (!currency) {
            throw new Error('通貨単位を指定してください。');
        }
        this.amount = amount;
        this.currency = currency;
    }
    // viewとかイキってますが、 getter で全然OKです getter と setter は学習してください
    Money.prototype.view = function () {
        return this.amount.toString() + this.currency;
    };
    Money.prototype.add = function (amount, currency) {
        if (this.currency !== currency) {
            throw new Error('通貨単位が違います。');
        }
        var added = this.amount + amount;
        return new Money(added, this.currency);
    };
    return Money;
}());
var Kingaku1 = new Money(1000, '円');
console.log('Kingaku', Kingaku1.amount, Kingaku1.currency);
// ちゃんとエラーになるし、変更できない。
// Kingaku1.amount = 10000;
// Kingaku1.currency = '$';
// console.log('Kingaku', Kingaku1.amount, Kingaku1.currency);
