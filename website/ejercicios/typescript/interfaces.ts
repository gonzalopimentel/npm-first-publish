// Interfaces
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
}

interface Rectangle {
  width: number;
  height: number;
  color: Color;
}

let rect: Rectangle = {
  width: 4,
  height: 6,
  color: Color.Rojo,
};

function area(r: Rectangle) {
  return r.height * r.width;
}

const areaRect = area(rect);
console.log(areaRect); // --> 24

rect.toString = function () {
  return this.color ? `A rectangle ${this.color}` : `Un rectangle`;
};

console.log(rect.toString());
