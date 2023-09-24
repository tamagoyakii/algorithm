# Q.
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

# A)
```c
#include <stddef.h>

int *count_positives_sum_negatives(
  int *values, size_t count, int *positivesCount, int *negativesSum) 
{
  positivesCount[0] = 0;
  negativesSum[0] = 0;
  for (size_t i = 0; i < count; i++)
    values[i] > 0 ? positivesCount[0]++ : (negativesSum[0] += values[i]);
  int *ret = {positivesCount, negativesSum};
  return ret;
}
