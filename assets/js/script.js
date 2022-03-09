let name = String
let type = ["START", "END", "DEFAULT"]
let loc = {
  easting: Number,
  northing: Number,
};
let cpNum = Number
let cpLocations = []

class Course {
  constructor(name, type, loc, cpNum, cpLocations, avgDis) {
    
    this.name = name
    this.type = type
    this.loc = loc
    this.cpNum = "There are " + cpNum + " Checkpoints in this Course."
    this.cpLocations = cpLocations
    this.avgDis = avgDis + "km"
    create = function() {
      // Choose type of Course
      var courseType = window.prompt("Which type of Course will you be creating?")
      console.log(courseType)

      // Adjust Course length
      var courseDistance = window.prompt("How long should your Course be?")
      console.log(courseDistance)

      // Choose number of Course Checkpoints
      var courseCpNum = window.prompt("How many Checkpoints are in your Course?")
      console.log(courseCpNum)

      // Adding name to course
      var courseName = window.prompt("What is your Course's name?")
      console.log(courseName)
    }
  }
}

var c = new Course
c.create()


// var courseInfo = {
//   name: window.prompt("What is your Course's name?"),
//   health: 100,
//   attack: 10,
//   money: 10,
//   reset: function() {
//     this.health = 100;
//     this.money = 10;
//     this.attack = 10;
//   }
// };

// var checkpoint = {
//   health: 100,
//   attack: 10,
//   money: 10,
//   reset: function() {
//     this.health = 100;
//     this.money = 10;
//     this.attack = 10;
//   }
// };

// var addCheckpoints = function() {
  
// }

// var load = function() {
//   for (var i = 0; i < 5; i++) {
    
//   }
// }




// class Checkpoint {
//   constructor(name, type, loc, cpNum, cpLocations, avgDis) {
//     this.name = "WAHOO!"
//     this.type = type[2]
//   }

//   create(name, location) {

//   }
// }

