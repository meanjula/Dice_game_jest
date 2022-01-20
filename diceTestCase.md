# Test cases for the Dice class

## Test cases for constructor

upperBound 4: dots 1,2,3,4
upperBound 2: dots 1,2

new Dice(2) creates Dice with upper bound 2
new Dice() creates Dice with upper bound 6(default value)
new Dice(12);
new Dice(20);
new Dice(6);
test with all upper bound 2...20

check that dot count is set to 0

new Dice(2.5) throws `'upper bound must be integert'`
new Dice('s') throws `'upper bound must be integert'`

new Dice(21) throws `'Upper bound too big'`
new Dice(100) throws `'Upper bound too big'`

new Dice(-2) throws `'Upper bound too small'`
new Dice(1) throws `'Upper bound too small'`

## test case for roll()

dice= new Dice(upperbound)
dice.roll()
check if 1<= dot count <=upperBound

dice= new Dice();
dice.roll();
check if 1<= dot count <=6

## test case for toString()

- roll the dice and compare the dots to string returned from toString method.
  dice = new Dice();
  dice.roll()
  expect(dice.toString()).toBe(`${dice.dots}`)

- if not rolled yet then should return `'not rolled yet'`
  dice = new Dice();
  expect(dice.toString()).toBe(`'not rolled yet`)
