# Q.
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

# A)
```c
#include <stddef.h>

size_t get_count(const char *s) {
  size_t ret = 0;
  for (size_t i = 0; s[i]; i++) {
    if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
      ret++;
  }
  return ret;
}
