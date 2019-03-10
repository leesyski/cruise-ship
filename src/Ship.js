function Ship(startingPort) {
  this.startingPort = startingPort;
}
// eslint-disable-next-line func-names
Ship.prototype.setSail = function () {
  this.startingPort = 0;
};

module.exports = Ship;
