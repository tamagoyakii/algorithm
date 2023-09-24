# Q.
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

# A)
```c
#include <string.h>
#include <stdlib.h>

int is_vowel(char c) {
  if (c == 'a' || c == 'A'
      || c == 'e' || c == 'E'
      || c == 'i' || c == 'I'
      || c == 'o' || c == 'O'
      || c == 'u' || c == 'U')
    return 1;
  else
    return 0;
}

char *disemvowel(const char *str) {
  int num = 0;
  for (int i = 0; str[i]; i++) {
    if (is_vowel(str[i]))
      num++;
  }
  char *ret = malloc(strlen(str) - num + 1);
  int i = 0;
  int j = 0;
  while (str[i]) {
    if (is_vowel(str[i])) {
      i++;
      continue;
    }
    ret[j++] = str[i++];
  }
  ret[j] = 0;
  return ret;
}
```
