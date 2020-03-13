module.exports = class EventTimer {
  constructor(handler, delay) {
    this.handler = handler;
    this.delay = delay;
    this._isRun = false;
  }

  start() {
    this._isRun = true;
    this._loopAction();
  }

  stop() {
    this._isRun = false;
  }

  _loopAction() {
    if (this._isRun != true) return;
    setTimeout(() => {
      this.handler();
      this._loopAction();
    }, this.delay);
  }

}