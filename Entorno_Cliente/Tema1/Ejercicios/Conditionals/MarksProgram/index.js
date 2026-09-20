// Marks program
// A program that saves a mark on a variable
// so with a conditional structure we say if it is an Excellent, very good, good....

let mark = "A";

switch(mark){
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Very good!");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Pass");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("That mark does NOT exist");
}
