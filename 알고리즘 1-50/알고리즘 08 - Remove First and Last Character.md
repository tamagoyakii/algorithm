# Q.
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

# A)
```c
char* remove_char(char* dst, const char* src) {
  int i = 1;
  int j = 0;
  while (src[i + 1] != 0) {
    dst[j] = src[i];
    j++;
    i++;
  }
  dst[j] = 0;
  return dst;  
}
