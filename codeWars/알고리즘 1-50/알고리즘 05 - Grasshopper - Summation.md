# Q.
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

# A)
```c
int summation(int num) {
  int ret = 0;
  for (int i = 1; i <= num; i++)
    ret += i;
  return ret;
}
