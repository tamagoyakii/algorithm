# Q.
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"u
The parameter of accum is a string which includes only letters from a..z and A..Z.

# A)
```c
#include <stdlib.h>
#include <string.h>

char *accum(const char *source) {
  char *ret = malloc(strlen(source) * (strlen(source) + 1));
  char *str_lowercase = malloc(strlen(source) + 1);
  int i = 0;
  for (i = 0; source[i]; i++) {
    if (source[i] >= 'A' && source[i] <= 'Z')
      str_lowercase[i] = source[i] + 32;
    else
      str_lowercase[i] = source[i];
  }
  str_lowercase[i] = 0;
  int x = 0;
  ret[x++] = str_lowercase[0] - 32;
  for (i = 1; str_lowercase[i]; i++) {
    ret[x++] = '-';
    ret[x++] = str_lowercase[i] - 32; 
    for (int j = i; j > 0; j--) ret[x++] = str_lowercase[i];
  }
  ret[x] = 0;
  return ret;
}
```
