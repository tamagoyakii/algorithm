# Q.
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

# A)
```c
void fakeBin(const char *digits, char *buffer) {
  int i = 0;
  for (i = 0; digits[i]; i++)
    (digits[i] < '5') ? (buffer[i] = '0') : (buffer[i] = '1');
  buffer[i] = 0;
}
