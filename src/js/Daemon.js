import MagicUnit from './MagicUnit';

export default class Daemon extends MagicUnit {
  constructor(attack) {
    super(attack);
    this.daemonFeature = 'some Daemon Feature';
  }
}