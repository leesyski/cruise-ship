/* globals describe it expect */
const Port = require('../src/Port.js');

describe('new port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    const port = new Port('Dover');
    expect(port.name).toBe('Dover');
  });
  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {};

    port.addShip(ship);

    expect(port.ship).toContain(ship);
  });
  it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ship).toEqual([titanic]);
  });

});
