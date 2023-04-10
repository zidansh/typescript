//String
let name: string = 'zidan';
name = 'true';
// becomes error on code below
// name = true

// Number
let age: number = 23;
age = 24;
// becomes error on code below
// age = "24"

// Boolean
let isMarried: boolean;
isMarried = true;
isMarried = false;

// Any data type
let someThing: any = 'zidan';
someThing = 1;
someThing = true;
someThing = 'syahrul';

// Union Type
let phoneNumber: string | number;
phoneNumber = '62 893 4567 8901';
phoneNumber = 6289345678901;

export {};
