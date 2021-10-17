# Q.
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

# A)
```c
#include <stdlib.h>

unsigned short *reverse_seq(unsigned short num)
{
  if (num == 0)
    return 0;
  unsigned short *arr = malloc(sizeof(unsigned short) * num);
  unsigned short n = num;
  for (int i = 0; i < num; i++)
    arr[i] = n--;
  return arr;
}
