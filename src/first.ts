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
