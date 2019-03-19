function Ship(currentPort) {
  this.currentPort = currentPort;
}
// eslint-disable-next-line func-names
Ship.prototype.setSail = function () {
  this.currentPort = null;
};

// eslint-disable-next-line func-names
Ship.prototype.dock = function (port) {
  this.currentPort = port;
};

module.exports = Ship;
