






let a = 70
let grade;

if (a >= 80) {
    grade = "A"
}
else if (a >= 70) {
    grade = "B"
}
else if (a >= 60) {
    grade = "C"
}
else if (a >= 50) {
    grade = "D"
}
else {
    grade = "F"
}

document.write("grade " + grade)


let g = 1

switch (g) {
    case 0:
        document.write("today is sunday")
        break;
    case 1:
        document.write("toay is monday")
        break;
    case 2:
        document.write("today is tuesday")
        break;
    case 3:
        document.write("today is wednesday")
        break;
    case 4:
        document.write("today is thrusday")
        break;
    case 5:
        document.write("today is friday")
        break;
    case 6:
        document.write("today is saturday")
        break;
    default:
        document.write("enter the correct day")

}
document.write("<br>")
document.write("<br>")




let d = [10,20,30,40,50,60,70,80,90]

document.write(d + "<br>" )

let c = d.map(multi)

document.write(c)

function multi(g){
    return g * 10;
}
   

        

