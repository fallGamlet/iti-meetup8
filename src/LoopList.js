module.exports = class LoopList {

  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  next() {
    this.index = 0 <=this.index && this.index < this.items.length
      ? (this.index+1) % this.items.length
      : 0;

    return this.current;
  }

  toFirst() {
    this.index = 0;
    return this.current;
  }

  get random() {
    if (!this.items || this.items.length == 0) {
      return null;
    }

    let index = Math.floor(Math.random() * this.items.length);
    return this.items[index];
  }

  get current() {
    return 0 <=this.index && this.index < this.items.length 
      ? this.items[this.index]
      : null;
  }
}