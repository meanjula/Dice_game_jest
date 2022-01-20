# DICE class (API)

## OPerations

### **Constructor(upperBound)**

- Initializes the dice with upperbound that is passed as parameter.
- if upperbound is given, the default upper bound is 6.
- initalize dot count to 0

- if upperbound is not a< integer, tyhrow an exception
  `'upper bound must be integert'`
- if upperbound is not between 2 and 20, an exception is thrown:
  - upperbound > 20: `Upper bound too big`
  - upperbound < 2:>
