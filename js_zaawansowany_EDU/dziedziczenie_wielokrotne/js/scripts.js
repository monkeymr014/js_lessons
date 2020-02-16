/*
Ukaład dziedziczenia
  Shape
    Rectangle
     Square
    Triangel
*/

// funkcja która inicjacji prototypu 
// _ dobra praktyka zaznacenia zmiennych prototypowych
function Shape(sideLengths) {  
  this._name = '';
  this._sideLenghts = sideLengths; 
};


// funkcja zwraca jako prototyp długosci boków z funkcji obiektu tablicowego reduce 
Shape.prototype.getPerimeter = function () {

  return this._sideLenghts.reduce(function(prevVal, val){
    return prevVal + val;
  });
};


 // funckja zwraza na wartosci pola 
Shape.prototype.getArea = function() {

  return this._sideLenghts[0] * this._sideLenghts[1];

};

// funckja zwraza pole dla prostokątu i przypisuje jej nazwy korzystając z dziedziczenia call
function Rectangle(sideLengths) {
  
  Shape.call(this, [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]]);
    this._name = "Prostokąt"; 
};

var shape1 = new Rectangle([1,2]);

// zwraca kwadrat dziedziczy po prostokącię 
function Square(sideLength) {
  Rectangle.call(this,[sideLength,sideLength]);
  this._name = "Kwadrat";
};

var shape2 = new Square([1]);

