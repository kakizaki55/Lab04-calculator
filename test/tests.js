// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

const test = QUnit.test;

function div(num1, num2){
    return num1 / num2 ; 
}

// name your test by what it is testing
test('check division', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10 ;
    const y = 2;
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = div(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

