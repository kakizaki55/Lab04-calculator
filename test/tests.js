// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

const test = QUnit.test;

function add(nm1, nm2) {
    return nm1 + nm2;
    
}

// name your test by what it is testing
test('add two num', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 5;
    const expected = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
