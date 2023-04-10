type Human = {
	name: string;
	age: number;
	isDead: boolean;
	isMarried?: boolean;
};

const zidan: Human = {
	name: 'Zidan Syahrul Hanif',
	age: 23,
	isDead: false,
};

const jhon: Human = {
	name: 'Jhon Doe',
	age: 40,
	isDead: false,
	isMarried: true,
};

console.info(zidan);
console.info(jhon);
