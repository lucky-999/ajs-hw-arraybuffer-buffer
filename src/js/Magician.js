import MagicUnit from './MagicUnit';

export default class Magician extends MagicUnit {
  constructor(attack) {
    super(attack);
    this.magicanFeature = 'some magican Feature';
  }
}