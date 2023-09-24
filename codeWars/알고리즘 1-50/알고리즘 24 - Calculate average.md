# Q.
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

# A)
```c
double find_average(double* array, int length) {
  double average = 0;
  for (int i = 0; i < length; i++)
    average += array[i];
  return average / length;
}
