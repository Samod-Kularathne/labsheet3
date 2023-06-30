function Q1(){ 
const games = ["The Last of Us", "Uncharted", "God of War", "Bloodborne"];

document.write(games.indexOf("God of War") + "<br>");

document.write("<br>");
}


function Q2Q3(){
const val = [
["Name", "John"],
["Age", 30],
["City", "Colombo"]
];

function createMap(values){
return new Map(values);
}

const valueMap = createMap(val);

valueMap.forEach((value, key) => {
document.write(`${key}, ${value}` + "<br>");
});            

document.write("<br>");


function removeValue(map, key){                               
return map.delete(key);
} 

const updatedMap = removeValue(valueMap, "Age");

valueMap.forEach((value, key) => {
document.write(`${key}, ${value}`  + "<br>");
}); 

document.write("<br>");
}

function Q4(){
const fruits = new Map();

fruits.set("apple", 5);
fruits.set("banana", 3);
fruits.set("orange", 2);

document.write(fruits.get("banana") + "<br>");
document.write(fruits.size + "<br>");
}