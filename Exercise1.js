console.log("Hello, World!");
// For Loop
for(var i=1;i<=100;i++){
    if(i%2==0){
        console.log("test: " + i);
    }
}

// For While Loop
var i=1;
while(i<=100){
    if(i%2==0){
        console.log("test: " + i);
        
    }
    // console.log("test: " + i);
    i++;

}
// For Do-While Loop
var name1="Lanie";
var lastname= 'sample';
var i=1;
do{
    console.log(name1 + " " + lastname);
    if(i%2==0){
        console.log("test: " + i);
        
    }
    i++

}while(i<=100);

//Function
var test= sum(1 , 4 , 10)
console.log(test);

function sum(a , b, c){
    return (a+b + c);
}

//Arrow Function
var demoSum= (a , b) => console.log(a+b);
demoSum(2,5)

//Objects
var listOfNames = {
    name1: "Marie",
    name2: "Resita",
    name3: "Waler",
}

console.log(listOfNames);
console.log(listOfNames.name1);
console.log(listOfNames.name1 +" "+ listOfNames.name2 );


console.log(listOfNames['name1'] +" "+ listOfNames['name3']);
