class Employee {
	constructor(name, salary, coeffs) {
		this.name = name;
		this.salary = salary;
		this.coeffs = coeffs;
	}
	
	getTotal() {
		return this.coeffs.reduce(coeff =>) {
			return this.salary * coeff;
		}, 0);
	}
}

let employee = new Employee('john', 1000, [1.1, 1.2, 1.3]);
let total = employee.getTotal();
console.log(total);