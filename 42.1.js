class Exployee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

let employee = new Employee('john');
console.log(employee.getName);