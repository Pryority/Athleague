let name = ""
let type = ["START", "END", "DEFAULT"]
let location = {
  easting: Number,
  northing: Number,
};

var courseInfo = {
  name: window.prompt("What is your Course's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }
};

var checkpoint = {
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }
};

var addCheckpoints = function() {
  
}

var load = function() {
  for (var i = 0; i < 5; i++) {
    
  }
}




// class Checkpoint {
//   constructor(name, type, loc, cpNum, cpLocations, avgDis) {
//     this.name = "WAHOO!"
//     this.type = type[2]
//   }

//   create(name, location) {

//   }
// }

class Course {
  constructor(name, type, loc, cpNum, cpLocations, avgDis) {
    this.name = "WAHOO!"
    this.type = type[2]
  }

  create(name, location) {

  }
}


var course = new Course()
console.log(course.name)
console.log(course.type)