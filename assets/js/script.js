
var cpArray = [];
console.log(cpArray)

var addCheckpoint = function addCheckpoint() {
   cpArray = cpArray + 1;
   console.log(cpArray.length);
   if (cpArray.length === 49) {
       console.log("Maximum amount of checkpoints reached.")
   }
}

var addCheckpoints = function addCheckpoint() {
    cpArray = cpArray + 1;
    console.log(cpArray.length);
    if (cpArray.length === 49) {
        console.log("Maximum amount of checkpoints reached.")
    }
 }

for (var i = 0; i < 48; i++) {
    addCheckpoints();
}