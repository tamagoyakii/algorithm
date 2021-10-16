# Q.
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)

# A)
```c
int sum(int* numbers, int numbersCount) {
  if (numbersCount < 2)
    return 0;
  int ret = 0;
  int min = numbers[0];
  int max = numbers[0];
  for (int i = 0; i < numbersCount; i++) {
    ret += numbers[i];
    if (numbers[i] > max)
      max = numbers[i];
    if (numbers[i] < min)
      min = numbers[i];
  }
  ret = ret - max - min;
  return ret;
}
