// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
function pyth(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

}
  
const test = QUnit.test;

// name your test by what it is testing
test('check int', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 5;



    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = pyth(x, y); 



    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

