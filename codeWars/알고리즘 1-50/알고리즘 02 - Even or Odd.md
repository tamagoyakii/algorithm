# Q.
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

# A)
```c
const char * even_or_odd(int number)
{
  return number % 2 ? "Odd" : "Even" ;
};
