# DICE class (API)

This is a Dice class for dice games. Dice holds the number of dots. The number of dots is betweem 1 and given upper bound(included). The maxmimum upper bound is 20. The minimum upper bound is 2.If the dice hasn't been rolled,the number of dots is 0. After the dice has been rolled, the dot count can't become zero again.

## OPerations

### **Constructor(upperBound)**

- Initializes the dice with upperbound that is passed as parameter.
- if upperbound is given, the default upper bound is 6.
- initalize dot count to 0

- if upperbound is not an integer, throw an exception
  `'upper bound must be integert'`

- if upperbound is not between 2 and 20, an exception is thrown:
  - upperbound > 20: `'Upper bound too big'`
  - upperbound < 2:> `'Upper bound too small'`

### Methods

#### **roll()**

- roll the dice
- when rolled, the dice count become a random number between 1 and upper bound(included)
- returns nothing

#### **toString()**

- return dot count as a string. for example`'4'`

- if the dice hasn't been rolled it returns a text `'not rolled yet`

### Getters

### **dots**

- returns the number of dots

### **minimunValue**

- returns the minimum number of dots of the dice,It should be 1.

### **maxmiumValue**

- returns the upperbound of the dice
