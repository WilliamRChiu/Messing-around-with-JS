function generatepassword(length, includeuppercase, includelowercase, includenumbers, includesymbols){
    const lowercasechars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercasechars = lowercasechars.toUpperCase();
    const numberchars = "1234567890";
    const symbolchars = "!@#$%^&*()_+=-";

    let allowedchars = "";
    let password = "";

    allowedchars += includelowercase?lowercasechars:"";
    allowedchars+=includeuppercase?uppercasechars:"";
    allowedchars+=includenumbers?numberchars:"";
    allowedchars+=includesymbols?symbolchars:"";

    if(length<=0){
        return (`password length must be at least 1`);
    }
    if (allowedchars.length===0){
        return (`at least 1 set of characters needs to be selected`);
    }
    for (let i=0; i<length; i++){
       const randomindex = Math.floor(Math.random()*allowedchars.length);
       password+=allowedchars.slice(randomindex, randomindex+1);
    }
    return password;
}


const passwordlength = 12;
const includelowercase = true;
const includenumbers = true;
const includeuppercase = true;
const includesymbols = true;


const password = generatepassword(passwordlength, includelowercase, includenumbers, includeuppercase, includesymbols);

console.log(`generated password: ${password}`);

//callback = function that is passed as a argument to another function
//used to handle asynchronous operations like:
// reading a file, network requests, interacting with databases
//think of it as "Hey when you are done, call this next"

function hello(callback){
    console.log("Hello");
    callback;
}
function goodbye(){
    console.log("goodbye");
}
hello(goodbye);

function sum(callback, x, y){
    let result = x+y;
    callback(result);
}
function displayconsole(result){
    console.log(result);
}
sum(displayconsole, 12, 23);


//forEach() = method used to iterate over elements of array and apply specified function (callback) to each element
//array.forEach(callback)
//element, index, array arguments are provided


let numbers = [1,2,3,4,5];
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(uppercase);
fruits.forEach(display);
numbers.forEach(double);
numbers.forEach(display);

function uppercase(element, index, array){
    array[index]=element.toUpperCase();
}
function lowercase(element, index, array){
    array[index]=element.toLowerCase();
}
function double(element, index, array){
    array[index]=element*2;
}
function display(element){
    console.log(element);
}

//.map() = accepts callback and applies function to each element of array, then returns new array

const squares = numbers.map(square);
const fruitsUpper = fruits.map(uppercase);
const fruitsLower = fruits.map(lowercase);

function square(element){
    return Math.pow(element, 2);
}
function uppercase(element){
    return element.toUpperCase();
}
function lowercase(element){
    return element.toLowerCase();
}
console.log(squares);
console.log(fruitsUpper);
console.log(fruitsLower);

//.filter() = creates new array by filtering out elements

let newnumbers = [1,2,3,4,5,6,7];
let evenNums = newnumbers.filter(isEven);
let oddNums = newnumbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element%2 === 0;
}
function isOdd(element){
    return element%2===1;
}
//.reduce() = reduce elements of array to single value

const prices = [5,30,10,25,15,20];

const total = prices.reduce(pricesum);
console.log(`$${total.toFixed(2)}`);

function pricesum(previoustotal, element){
    return previoustotal + element;
}

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
console.log(maximum);

function getMax(tempmax, nextgrade){
    return Math.max(tempmax,nextgrade);
}

//function expressions = way to define functions as values or variables

const greetings = function(){
    console.log("Hola");
}

setTimeout(hello, 3000);

//arrow functions = concise way to write function expressions (parameters) => some code


const konichiwa = function(){
    console.log("Konichiwa");
}
konichiwa();

const bonjour = (name,age) => {console.log("bonjour " + name)
                                console.log("You are "+age+" years old")};

bonjour("Billy",25);

//objects

const person1 = {
    firstName: "Spongebob",
    lastName : "squarepants",
    age: 30,
    isemployed:true,
    sayHello: function(){console.log(`Hi I'm ${this.firstName}`)},
}
const person2 = {
    firstName: "patrick",
    lastName : "star",
    age: 32,
    isemployed:false,
    sayHello: function(){console.log("Hi I'm star...")},
}
//constructors
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`you drive the ${this.model}`)}
}
const Ford_F150= new Car("Ford", "F150", 2024, "red");
Ford_F150.drive();

//classes
class Product{
    constructor(productname, price){
        this.name = productname;
        this.price = price;
    }
    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.price}`);
    }
}
const product3 = new Product("shirt", 20.11);
product3.displayProduct();
//static = keyword that defines properties or methods that belong to a class rather than the object (class owns static, not objects)

class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius*2;
    }
    static getcircumference(radius){
        return 2*this.PI*radius;
    }
}
console.log(MathUtil.PI);
let newmathobject = new MathUtil();
console.log(newmathobject.PI);//this returns undefined as the pi value is part of the class, not the object


//inheritance = a class can inherit properties and methods from eisting class
//super = keyword used in classes to call constructor or access properties and methods of parent (superclass)
//this = this object
//super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    alive = true;
    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
    move(speed){
        console.log(`The ${this.name} is moving at a speed of ${speed} km/h`);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class fish extends Animal{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed;
    }
    swim(){
        console.log(`This ${this.name} can run`);
        super.move(this.swimspeed);
    }
}
const rabbit = new Rabbit("rabbit", 2, 2.1);
rabbit.alive = false;
console.log(rabbit.alive);
rabbit.eat();
rabbit.run();

//getters = get a property
//setters = set a property

class rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if (newWidth>0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        this._height = newHeight >0 ? newHeight:console.error("Height must be positive");
    }
    get height(){
        return this._height.toFixed(1);
    }
    get width(){
        return this._width.toFixed(1);
    }
}

const Rectangle = new rectangle(3,4);
//Rectangle.width = -10000; returns error
Rectangle.width = 10;
console.log(Rectangle.width);

//destructuring = extract values from arrays and objects, then assign them to variables in convenient way
//[] = perform array destructuring
//{} = perform object destructuring

const colors = ["red", "green", "blue", "black", "white"];
const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

const{firstName, lastName, age,isemployed} = person1;
console.log(firstName);
//nested objects = objects within other objects
//allows you to represent more complex data structures
//child object enclosed by parent object

const human = {
    fullName: "Mario The Italian",
    age: 22,
    isStudent:true,
    hobbies:["karate", "goomba stomping", "cooking pasta"],
    address:{//nested object
        street: "123 abc street",
        city: "Peach castle",
        country: "Italy"
    }
}
console.log(human.fullName);
console.log(human.hobbies[2]);
console.log(human.address.street);
for (const property in human.address){
    console.log(human.address[property]);
}

class Address{
    constructor(street, city, country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}
class IDMaker{
    constructor(name, age, ...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}
const MarioID = new IDMaker ("Mario", 22, "123 ABC street", "Mushroom Kingdom", "Italy");

console.log(MarioID.address.city);

const fruitsbasket = [{name: "apple", color:"red", calories:95},{name: "orange", color:"orange", calories:12},{name: "coconut", color:"brown", calories:155}];

console.log(fruitsbasket[2].name);
fruitsbasket.push({name:"grapes", color:"purple", calories:"40"});
//can use pop, splice, foreach

fruitsbasket.forEach(fruit => console.log(fruit.name));
const fruitnames = fruitsbasket.map(fruit=>fruit.name);
const fruitcolors = fruitsbasket.map(fruit=>fruit.color);
const fruitcalories = fruitsbasket.map(fruit=>fruit.calories);
const redfruits = fruitsbasket.filter (fruit=> fruit.color=="red");
const highcalfruits = fruitsbasket.filter(fruit=>fruit.calories>50);

const maxfruitcalories = fruitsbasket.reduce((max, fruit)=> fruit.calories>max.calories?fruit:max);

console.log(highcalfruits);
console.log(maxfruitcalories);
//sort() = method used to sort elements of array in place
//sorts elements as strings in lexicographic order, not alphabetical
//lexicographic = (alphabet + numbers + symbols) as strings

let numberbasket = [1,10,2,9,3,8,4,7,5,6];
numberbasket.sort((a, b)=> a-b);
console.log(numberbasket);
fruitsbasket.sort((a,b)=>a.calories - b.calories);
console.log(fruitsbasket);
fruitsbasket.sort((a,b)=>a.color.localeCompare(b.color));
console.log(fruitsbasket);
//Date objects = objects that contain values representing dates and times
//these date objects can be changed and formatted
//Date(year, month, day, hour, minute, second, ms)

const date = new Date(2024, 6, 27, 1, 15, 12, 11);
console.log(date);
const year = date.getFullYear();
console.log(year);
//can do the same for month, day, hour, etc
const dayofweek = date.getDay();
console.log(dayofweek);
date.setHours(5);
console.log(date);
//closure = function defined inside another function
//inner function has access to variables and scope of the outer function
//allow for private variables and state maintenance

function outer(){
    let message= "this is the outer speaking from the inner";
    function inner(){
        console.log(message);
    }
    inner();
}
outer();

function createCounter(){
    let count=0;
    function increment(){
        count++;
        console.log(`count increased to ${count}`);
        
    }
    function getCount(){
        return count;
    }
    return{increment, getCount};//shorthand version of return {increment:increment};
}
const counter = createCounter();
counter.increment();
//counter.count=0; this creates a reference error

//console.log(counter.count);//undefined as count variable is private (because its in a closure)

console.log(`The current count is ${counter.getCount()}`);
