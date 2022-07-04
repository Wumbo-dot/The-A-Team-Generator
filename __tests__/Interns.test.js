const Interns = require('../lib/Interns');

const intern = new Interns('Jason', '8675309', 'jason@test.example.com', 'UTSA');

test('Test the intern objects', () => {
    expect(intern.name).toBe('Jason');
    expect(intern.id).toBe('8675309');
    expect(intern.email).toBe('jason@test.example.com');
    expect(intern.school).toBe('UTSA');

});

test('Test to get the school the intern attends', () => {
    expect(intern.school).toBe('UTSA');
});