# Q.
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

# A)
```c
#include <stddef.h>

int square_sum(const int *values, size_t count) {
  int ret = 0;
  for (unsigned long i = 0; i < count; i++) {
    ret += values[i] * values[i];
  }
  return ret;
};
