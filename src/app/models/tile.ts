export class Tile {
  myColor = 0;
  myX = 0;
  myY = 0;
  capacity = 0;
  name = 'white';

  constructor(x: number, y: number) {
    this.myColor = 255;
    this.myX = x;
    this.myY = y;
  }

  getColor(): number {
    return this.myColor;
  }

  setColor(mColor) {
    this.myColor = mColor;
  }

  getX() {
    return this.myX;
  }

  getY() {
    return this.myY;
  }

  addCapacity() {
    this.capacity++;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
