const name = "uzair";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("uzair-nazir");
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("r"));

const newString = gameName.substring(0, 4);
console.log(newString);
const anotherString = gameName.slice(-10, 6);
console.log(anotherString);

const newStringOne = "    uzair   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "http://uzair.com/uzair%20nazir"

console.log(url.replace('%20', '_'));
console.log(url.includes('nazir'));

console.log(gameName.split('-'));

