export default class MagicUnit {
  constructor(attack) {
    this.attack = attack;
    this.stoned = false;
  }

  get Stoned() {
    return this.c_stoned !== undefined ? this.c_stoned : this.stoned;
  }

  set Stoned(value) {
    if (typeof value !== 'boolean') throw new Error('Некорректный тип входного параметра. Требуется булево значение');
    this.c_stoned = value;
  }

  setStoned() {
    this.stoned = true;
  }

  removeStoned() {
    this.stoned = false;
  }

  getАttack(dist) {
    let resultAttack = this.attack;

    resultAttack *= (1 - 0.1 * (dist - 1));

    if (this.stoned) {
      resultAttack -= Math.log2(dist) * 5;
    }

    if (resultAttack < 0) {
      resultAttack = 0;
    }

    return Math.round(resultAttack, 0);
  }
}