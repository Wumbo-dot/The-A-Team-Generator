const Manager = require('../lib/Manager');

const manager = new Manager('Jason', '8675309', 'jason@test.example.com', '0101');

test('Test if we can get values for manager', () => {
   expect(manager.name).toBe('Jason');
   expect(manager.id).toBe('8675309');
   expect(manager.email).toBe('jason@test.example.com');
   expect(manager.officeNumber).toBe('0101');
});
test('Test to see if name returns from getOfficeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('0101');
});

test('Test to get the role from getRole', () => {
    expect(manager.getRole()).toBe('Manager');
});