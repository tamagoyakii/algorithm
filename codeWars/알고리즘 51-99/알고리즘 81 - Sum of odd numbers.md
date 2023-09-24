# Q.
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

# A)
```c
#include <inttypes.h>

uint64_t rowSumOddNumbers(uint32_t n) {
  uint64_t start = ((n - 1) * n ) + 1;
  uint64_t sum = 0;
  
  for (uint32_t i = 0; i < n; i++) {
    sum += start + (2 * i);
  }
  return sum;
}
```

```c
#include <inttypes.h>

uint64_t rowSumOddNumbers(uint32_t n) {
  return (n * n * n);
}
```
