const Employees = require('../lib/Employees');

const employees = new Employees('Jason', '8675309', 'jason@test.example.com');

test('Test if we can get the constructor vaues for Employees', () => {
    expect(employees.name).toBe('Jason');
    expect(employees.id).toBe('8675309');
    expect(employees.email).toBe('jason@test.example.com');
});

test('Test if the getName populates', () => {
    expect(employees.getName()).toBe('Jason');
});

test('Test to see if you can pull the getRole method', () => {
    expect(employees.getRole()).toBe('Employee');
});