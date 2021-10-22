# Q.
Write a function which converts the input string to uppercase.

# A)
```c
char *makeUpperCase (char *string) {
  for (int i = 0; string[i]; i++) {
    if (string[i] >= 'a' && string[i] <= 'z')
     string[i] -= 32;
  }
  return string;
}
