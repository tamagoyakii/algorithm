# Q.
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter casing)

# A)
```c
#include <stdbool.h>

bool IsIsogram(char *str) {
  for (int i = 0; str[i]; i++) {
    for (int j = i + 1; str[j]; j++) {
      if (str[i] == str[j] || str[i] == str[j] - 32 || str[i] == str[j] + 32)
        return false;
    }
  }
  return true;
}
```
JavaScript 배우면서 C 알고리즘 푸니까 헷갈려 죽겠다 !
