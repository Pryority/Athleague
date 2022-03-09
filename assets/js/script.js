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
    create = function() {
      // Choose type of Course
      type = window.prompt("Which type of Course will you be creating?")
      console.log(type)

      // Adjust Course length
      this.avgDis = window.prompt("How long should your Course be?")
      console.log(avgDis)

      // Choose number of Course Checkpoints
      this.cpNum = window.prompt("How many Checkpoints are in your Course?")
      console.log(cpNum)

      // Adding name to course
      this.name = window.prompt("What is your Course's name?")
      console.log(name)
    }
    this.name = name
    this.type = type
    this.loc = loc
    this.cpNum = "There are " + cpNum + " Checkpoints in this Course."
    this.cpLocations = cpLocations
    this.avgDis = avgDis + "km"
  }
}

var c = new Course
document.appendChild(c)
// c.create()
