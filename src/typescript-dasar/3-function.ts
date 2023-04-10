// Void type for no return value
function printHello(): void {
	console.info('Hello');
}
printHello();

// return number
function printNumber(): number {
	return 1;
}
console.info(printNumber());

// return number
function printString(): string {
	return 'Zidan';
}
console.info(printString());

// function argument
function myCat(name: string, age: number): string {
	return `${name} is my cat, he is ${age} number`;
}
console.info(myCat('kitty', 2));

// Default argument
function myDog(name: string, age: number, isDead: boolean = false): string {
	return `${name} is my cat, he is ${age} number and he is ${
		isDead ? 'dead' : 'alive'
	}`;
}
console.info(myDog('dogie', 2));
console.info(myDog('bull', 2, true));

// optional argument
function address(val: string, valOption?: string): string {
	return val + ' ' + valOption;
}
console.info(address('dogie'));
console.info(address('dogie', 'bull'));

// function as type
type Age = number;
const age: Age = 23;

type Greetings = (name: string, myName: string) => string;
const greetings: Greetings = (name: string, myName: string): string => {
	return `Hello ${name} My Name is ${myName}`;
};
console.info(greetings('Hanif', 'Zidan'));
