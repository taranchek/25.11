class Employee {
	get name() {
		console.log('get');
	}
	set name() {
		console.log('set');
	}
}

let employee = new Employee;
let name = employee.name;
employee.name = 'john';