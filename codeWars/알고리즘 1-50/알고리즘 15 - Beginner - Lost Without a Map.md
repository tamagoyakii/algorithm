# Q.
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

# A)
```c
#include <stddef.h>

int *maps(const int *arr, size_t size) {
  int *ret = malloc(sizeof(int) * size);
  for (size_t i = 0; i < size; i++)
    ret[i] = arr[i] * 2;
  return ret;
}
