(function(){
  console.log('mutator:状態変更を発生させるもの');
}());

class Hitpoint {
  amount
  constructor(amount) {
    if(amount < 0 ){
      throw new Error('HPは0以上で設定してください。')
    }
    this.amount = amount
  }

  /**
   * ダメージを受ける
   * @param damageAmount ダメージ量
   */
  damage(damageAmount) {
    const nextAmount = this.amount - damageAmount
    this.amount = Math.max(0, nextAmount)
  }
  isZero() {
    return this.amount === 0
  }
}

const HP1 = new Hitpoint(100)


console.log('HP:', HP1.amount);
const damage = 10;
HP1.damage(damage);
console.log(`${damage}のダメージ！！！`);
console.log('HP:', HP1.amount);
console.log(HP1.isZero()? '死んだ！！': 'まだだ!まだいける!!');

class Charactor {
  hitpoint
  states
  constructor(hitpoint, states) {
    this.hitpoint = new Hitpoint(hitpoint)
    this.states = states
  }
  /**
   * ダメージを受ける
   * @param damageAmount ダメージ量
   */
  damage(damageAmount){
    this.hitpoint.damage(damageAmount);
    if(this.hitpoint.isZero()){
      this.states = 'dead'
    }
  }
}

const Chara1 = new Charactor(100, 'normal')

console.log(`Chara1 HP:${Chara1.hitpoint.amount} state:${Chara1.states}`)
const damage2 = 100;
Chara1.damage(damage2);
console.log(`Chara1に${damage2}のダメージ！！！`);
console.log(`Chara1 HP:${Chara1.hitpoint.amount} state:${Chara1.states}`)
console.log(Chara1.states === 'dead'? 'Chara1は死んだ！！': 'まだだ!まだいける!!');
