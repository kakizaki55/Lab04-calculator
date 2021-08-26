// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
function mod(num1, num2){
    return num1 % num2; 
}

const test = QUnit.test;

// name your test by what it is testing
test('check division', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 3;
    const expected = 1;



    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mod(x, y); 



    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

