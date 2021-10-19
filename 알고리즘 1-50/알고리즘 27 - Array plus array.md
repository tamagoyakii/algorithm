# Q.
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

# A)
```c
#include <stddef.h>

long arr_plus_arr(const int *a,  const int *b, size_t na, size_t nb) {
  long sum = 0;
  for (size_t i = 0; i < na; i++) sum += a[i];
  for (size_t i = 0; i < nb; i++) sum += b[i];
  return sum;
}
