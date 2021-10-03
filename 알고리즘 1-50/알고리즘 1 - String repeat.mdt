# Q.
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

# A)
```c
#include <string.h>
#include <stdlib.h>

char *repeat_str(size_t count, const char *src) {
  char *ret = malloc(strlen(src) * count + 1);
  if (!ret) return NULL;
  for (unsigned int i = 0; i < count; i++)
    strcpy (ret + (i * strlen(src)), src);
  return ret;
}
