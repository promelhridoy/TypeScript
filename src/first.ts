let myString : string = "Programming Hero"
let myNumber : number = 332;
let myBoolean : boolean = false;
let mySymbol : symbol = Symbol();
let myBigInt : bigint = 112n;

//* Type safe function

const addTwo = (a : number, b: number) : number => {
    return a + b;
}

console.log(addTwo(10, 30))

//* Array and Tuple with readonly modifier

// const arr : string[] = ["Programming Hero", "332", "false"]
const arr : Array<string> = ["Programming Hero", "332", "false"]

const numbers : number[] = [1, 2, 3, 4, 5]

//Tuple

const dhakaLatLong : readonly [number, number] = [40.7128, 74.0060]



//* Optional, Default and Rest Parameters (...args)

const concatName = (firstName: string, lastName?: string) : string => {
    if(!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
}

console.log(concatName("Programming", "Hero"))
console.log(concatName("Programming"))

const greetings = ( fullName: string, greeting = "Hello") => {
    console.log(`${greeting} ${fullName}`)
}

greetings("Programming Hero")


//* Rest Parameters */

const sum = (...numbers: number[]) => {
    return numbers.reduce((prev, curr) => prev + curr, 0)
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const logUserAction = (...args : [name :string, age :number, isLoggedIn :boolean]) => {
    const [name, age, isLoggedIn] = args;
    console.log(`Name: ${name}, Age: ${age}, Is Logged In: ${isLoggedIn}`)
}
logUserAction("Programming Hero", 332, false)

//* Objects type, type alias and interface
// Object type
const user : {
    name: string,
    age: number,
    isActive: boolean,
    action? : () => void,
    badges : string[]
} = {
    name: "Programming Hero",
    age: 332,
    isActive: false,
    action: () => console.log("User Action"),
    badges: ['Admin']
};

//* Type Alias */

type User ={
    name: string,
    age: number,
    isActive: boolean,
    action? : () => void,
    badges : string[]
}

const user2 : User = {
    name: "Promel",
    age: 21,
    isActive: true,
    action: () => console.log("User Action"),
    badges: ['Admin', 'Moderator']
}

//* Interface */

interface IUser {
    name: string,
    age: number,
    isActive: boolean,
    action? : () => void,
    badges : string[]
}

const user3 : IUser = {
    name: "Promel",
    age: 21,
    isActive: true,
    action: () => console.log("User Action"),
    badges: ['Admin', 'Moderator']
}

// Union Type

type ID = string | number;

//day 1 
type Product = {
  readonly productId: string;
  name: string;
  price: number;
  tags: string[]; 
};

const myProduct: Product = {
  productId: "P-101",
  name: "Mechanical Keyboard",
  price: 4500,
  tags: ["gadget", "keyboard", "rgb"]
};

console.log(`Product: ${myProduct.name}, Price: ${myProduct.price} BDT`);

// interface extend or inheritance

interface Admin {
    name: string;
    role: string;
}

interface SuperAdmin extends Admin {
    permissions: string[];
}

// type alias extend or inheritance

type AdminType = {
    name: string;
    role: string;
}

type SuperAdminType = AdminType & {
    permissions: string[];
}

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}

const worker: Employee = {
  name: "Promel",
  age: 24,
  employeeId: "EMP-404",
  department: "Web Development"
};

console.log(`Worker Name: ${worker.name}, Dept: ${worker.department}`);

// Day3 Function Typing

// Parameter Types and Return Type

function multiply(a: number, b: number): number {
    return a * b;
}

// Optional Parameters and Default Parameters

function greet(name: string, greeting: string = "Hello"): string  {
    return `${greeting}, ${name}!`;
}

// Rest Parameters

function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

//Union Types

// Id can be either a string or a number

type Id = string | number;

function getUserById(id: Id) {
    return `User ID is: ${id}`;
}


// intersection types ( & - And)

type EmployeeType = {
    name: string;
    startDate: Date;
};

type ManagerType = {
    department: string;
    teamSize: number;
};

// Intersection type combining EmployeeType and ManagerType

type TechLead = EmployeeType & ManagerType;

const lead: TechLead = {
    name: "Promel",
    startDate: new Date("2023-01-01"),
    department: "Web Development",
    teamSize: 5
}

//Union and Function Overloading

const formatInput = (input: string | number): string => {
    if (typeof input === "string") {
        return input.trim().toUpperCase();
    }else {
        return input.toFixed(2);
    }
}

const formattedString = formatInput("  hello world  ");
console.log(formattedString); // Output: "HELLO WORLD"
const formattedNumber = formatInput(123.345);
console.log(formattedNumber); // Output: 123.34
