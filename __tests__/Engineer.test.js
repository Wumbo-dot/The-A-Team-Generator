const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Jason', '8675309', 'jason@test.example.com', 'example_dot');

test('Test the engineer objects', () => {
    expect(engineer.name).toBe('Jason');
    expect(engineer.id).toBe('8675309');
    expect(engineer.email).toBe('jason@test.example.com');
    expect(engineer.githubUser).toBe('example_dot');

});

test('Test to get the GitHub Username of the engineer', () => {
    expect(engineer.githubUser).toBe('example_dot');
});